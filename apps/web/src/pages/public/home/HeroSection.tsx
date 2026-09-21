import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ScanFace, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { AUTH_ROUTES } from '@/lib/routes'

const ringDelays = [0, 0.6, 1.2]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 -z-10 h-[600px] bg-gradient-to-b from-primary/20 via-secondary/10 to-transparent blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            Absensi Berbasis Biometrik Wajah
          </span>

          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            Absensi sekolah, selesai dalam{' '}
            <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
              hitungan detik
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-muted-foreground">
            AbsenWajah mengubah wajah siswa jadi kode unik digital, sehingga kehadiran tercatat
            otomatis dari HP masing-masing siswa. Tidak perlu antre, tidak bisa titip absen.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link to={AUTH_ROUTES.register}>Daftarkan Sekolah</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={AUTH_ROUTES.login}>Masuk ke Akun</Link>
            </Button>
          </div>

          <dl className="mt-10 flex flex-wrap gap-8">
            <div>
              <dt className="text-2xl font-bold text-foreground">&lt;30 detik</dt>
              <dd className="text-sm text-muted-foreground">per kelas absen</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-foreground">0%</dt>
              <dd className="text-sm text-muted-foreground">titip absen</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-foreground">95%</dt>
              <dd className="text-sm text-muted-foreground">registrasi minggu pertama</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto flex size-72 items-center justify-center md:size-80"
        >
          {ringDelays.map((delay) => (
            <motion.span
              key={delay}
              className="absolute inset-0 rounded-full border border-primary/40"
              initial={{ scale: 0.6, opacity: 0.8 }}
              animate={{ scale: 1.35, opacity: 0 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay }}
            />
          ))}
          <div className="relative flex size-48 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(56,189,248,0.25)] backdrop-blur-xl md:size-56">
            <ScanFace className="size-20 text-primary md:size-24" strokeWidth={1.25} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
