import { Link, Outlet } from 'react-router-dom'
import { ScanFace } from 'lucide-react'

import { PUBLIC_ROUTES } from '@/lib/routes'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-primary to-secondary p-10 text-background md:flex">
        <Link
          to={PUBLIC_ROUTES.home}
          className="flex items-center gap-2 font-heading text-lg font-bold"
        >
          <ScanFace className="size-6" />
          AbsenWajah
        </Link>

        <div className="max-w-sm">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight">
            Absensi sekolah, selesai dalam hitungan detik.
          </h2>
          <p className="mt-3 text-sm/relaxed opacity-90">
            Verifikasi wajah langsung dari HP siswa, tanpa antre, tanpa titip absen.
          </p>
        </div>

        <blockquote className="max-w-sm text-sm italic opacity-90">
          "Sejak pakai AbsenWajah, absensi kelas yang tadinya 10 menit sekarang cuma hitungan
          detik." — Ibu Ratna Kusumaningrum, S.Pd., Wali Kelas XI IPA 1
        </blockquote>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.4)] backdrop-blur-xl">
          <Link
            to={PUBLIC_ROUTES.home}
            className="mb-6 flex items-center gap-2 font-heading font-bold md:hidden"
          >
            <ScanFace className="size-6 text-primary" />
            AbsenWajah
          </Link>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
