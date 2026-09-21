import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

import { api, setAccessToken, setOnUnauthorized } from '@/lib/axios'
import { readStorage, removeStorage, writeStorage } from '@/lib/storage'
import type { AuthUser } from '@/types/auth'

const AUTH_STORAGE_KEY = 'absenwajah.auth.user'

interface AuthContextValue {
  user: AuthUser | null
  isAuthenticated: boolean
  /** true selama proses cek sesi awal (silent refresh) saat aplikasi dibuka. */
  isInitializing: boolean
  login: (user: AuthUser, accessToken: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isInitializing, setIsInitializing] = useState(true)

  function login(nextUser: AuthUser, accessToken: string) {
    setUser(nextUser)
    setAccessToken(accessToken)
    // PRD Bab 8B: hanya profil (bukan token) yang persist ke localStorage.
    // Access token sengaja hanya hidup di memory (lihat src/lib/axios.ts).
    writeStorage(AUTH_STORAGE_KEY, nextUser)
  }

  function logout() {
    setUser(null)
    setAccessToken(null)
    removeStorage(AUTH_STORAGE_KEY)
    // Best-effort - beri tahu backend supaya refresh token cookie dicabut (Task 8.4).
    api.post('/auth/logout').catch(() => {
      // diamkan, backend belum ada / user memang sudah logout
    })
  }

  useEffect(() => {
    setOnUnauthorized(logout)

    const persistedUser = readStorage<AuthUser>(AUTH_STORAGE_KEY)
    if (!persistedUser) {
      setIsInitializing(false)
      return
    }

    // Ada profil tersimpan -> coba dapat access token baru lewat refresh
    // token cookie (httpOnly). Kalau gagal, anggap sesi kedaluwarsa.
    setUser(persistedUser)
    api
      .post<{ accessToken: string }>('/auth/refresh')
      .then((response) => {
        setAccessToken(response.data.accessToken)
      })
      .catch(() => {
        setUser(null)
        removeStorage(AUTH_STORAGE_KEY)
      })
      .finally(() => setIsInitializing(false))

    return () => setOnUnauthorized(null)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: user !== null,
      isInitializing,
      login,
      logout,
    }),
    [user, isInitializing],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth harus dipakai di dalam <AuthProvider>')
  }
  return context
}
