/** Sesuai `roleEnum` di skema database (PRD Bab 10). */
export type Role = 'SISWA' | 'GURU_MAPEL' | 'WALI_KELAS' | 'ADMIN' | 'KEPALA_SEKOLAH'

/** Subset kolom tabel `users` yang relevan untuk frontend. */
export interface AuthUser {
  id: string
  email: string
  fullName: string
  role: Role
  avatarUrl?: string | null
}

export interface LoginResponse {
  user: AuthUser
  accessToken: string
}
