import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios'

/**
 * PRD Bab 8B: access token (15 menit) disimpan di MEMORY (bukan localStorage),
 * refresh token (7 hari) disimpan sebagai httpOnly cookie oleh backend.
 * Modul ini jadi satu-satunya sumber kebenaran access token di sisi client -
 * AuthContext (src/hooks/useAuth.tsx) yang mengatur isinya lewat setAccessToken().
 */
let accessToken: string | null = null
let onUnauthorized: (() => void) | null = null

export function setAccessToken(token: string | null) {
  accessToken = token
}

export function getAccessToken() {
  return accessToken
}

/** Dipanggil AuthContext untuk tahu kapan harus logout paksa (refresh gagal). */
export function setOnUnauthorized(handler: (() => void) | null) {
  onUnauthorized = handler
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // Wajib true supaya cookie httpOnly refresh token ikut terkirim (PRD Bab 8B).
  withCredentials: true,
})

// Interceptor request: sisipkan Authorization header dari access token di memory.
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (accessToken) {
    config.headers.set('Authorization', `Bearer ${accessToken}`)
  }
  return config
})

let refreshPromise: Promise<string | null> | null = null

/**
 * POST /api/auth/refresh (PRD Bab 8, Task 8.4) - endpoint ini baru diimplementasikan
 * di backend pada Task 8.4. Sebelum itu, panggilan ini akan gagal (404/network error)
 * dan ditangani sebagai "sesi tidak valid", yang merupakan perilaku aman/wajar.
 */
async function refreshAccessToken(): Promise<string | null> {
  try {
    const response = await axios.post<{ accessToken: string }>(
      '/auth/refresh',
      {},
      { baseURL: import.meta.env.VITE_API_URL, withCredentials: true },
    )
    setAccessToken(response.data.accessToken)
    return response.data.accessToken
  } catch {
    setAccessToken(null)
    return null
  }
}

// Interceptor response: kalau 401 & belum pernah retry, coba refresh sekali lalu ulangi request.
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as
      (InternalAxiosRequestConfig & { _retry?: boolean }) | undefined

    if (error.response?.status !== 401 || !originalRequest || originalRequest._retry) {
      return Promise.reject(error)
    }

    originalRequest._retry = true

    // Cegah banyak request 401 bersamaan memicu banyak call refresh sekaligus.
    refreshPromise ??= refreshAccessToken().finally(() => {
      refreshPromise = null
    })

    const newToken = await refreshPromise

    if (!newToken) {
      onUnauthorized?.()
      return Promise.reject(error)
    }

    originalRequest.headers.set('Authorization', `Bearer ${newToken}`)
    return api(originalRequest)
  },
)
