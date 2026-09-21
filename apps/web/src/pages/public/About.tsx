import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Gauge, ScanFace, ShieldCheck, Sparkles, Target } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PUBLIC_ROUTES } from '@/lib/routes'

const values = [
  {
    icon: Gauge,
    title: 'Efisiensi',
    description: 'Absensi yang dulu 5-10 menit per jam pelajaran, sekarang hitungan detik.',
  },
  {
    icon: Target,
    title: 'Akurasi',
    description: 'Verifikasi wajah unik per siswa menghilangkan praktik titip absen.',
  },
  {
    icon: ShieldCheck,
    title: 'Privasi',
    description: 'Data biometrik dienkripsi dan hanya dipakai untuk keperluan absensi.',
  },
  {
    icon: Sparkles,
    title: 'Transparansi',
    description: 'Setiap keputusan absensi tercatat & bisa ditelusuri lewat audit log.',
  },
]

const timeline = [
  {
    year: '2024',
    title: 'Riset & Pengembangan Awal',
    description:
      'AbsenWajah dirancang untuk menjawab masalah absensi manual yang lambat dan rawan titip absen di sekolah menengah.',
  },
  {
    year: '2025',
    title: 'Uji Coba di SMA Harapan Bangsa',
    description:
      'Pilot project berjalan dengan 145 siswa - mengukur akurasi verifikasi wajah dan kecepatan absensi di kondisi kelas nyata.',
  },
  {
    year: '2025',
    title: 'Modul Laporan Lintas Tahun Ajaran',
    description:
      'Wali kelas dan kepala sekolah bisa membandingkan tren kehadiran antar semester dan antar tahun ajaran.',
  },
  {
    year: '2026',
    title: 'Perluasan ke Lebih Banyak Sekolah',
    description:
      'Menyempurnakan akurasi verifikasi wajah dan menyiapkan AbsenWajah untuk sekolah dengan jumlah siswa lebih besar.',
  },
]

export function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight">Tentang AbsenWajah</h1>
        <p className="mt-4 text-muted-foreground">
          Kami membangun AbsenWajah untuk satu tujuan sederhana: membuat absensi sekolah lebih
          cepat, akurat, dan tidak lagi merepotkan guru maupun siswa.
        </p>
      </div>

      <Card className="mt-12">
        <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ScanFace className="size-8" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold">Sekolah Mitra Uji Coba</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              AbsenWajah pertama kali diuji coba di{' '}
              <strong className="text-foreground">SMA Harapan Bangsa</strong>, sekolah menengah atas
              dengan 145 siswa aktif dari 9 rombongan belajar (X-XII, jurusan IPA & IPS). Hasil uji
              coba ini menjadi dasar penyempurnaan fitur sebelum diperluas ke sekolah lain.
            </p>
          </div>
        </CardContent>
      </Card>

      <section className="mt-16">
        <h2 className="text-center font-heading text-2xl font-bold tracking-tight">
          Nilai yang Kami Pegang
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <value.icon className="size-5" />
              </div>
              <h3 className="mt-3 font-heading font-semibold">{value.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-center font-heading text-2xl font-bold tracking-tight">
          Perjalanan Kami
        </h2>
        <div className="relative mt-10 space-y-8 border-l border-white/10 pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <span className="absolute top-1.5 -left-[calc(2rem+5px)] size-2.5 rounded-full bg-gradient-to-br from-primary to-secondary" />
              <span className="text-xs font-mono font-medium text-primary">{item.year}</span>
              <h3 className="mt-1 font-heading font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <ShieldCheck className="mx-auto size-8 text-success" />
        <h2 className="mt-3 font-heading text-xl font-bold">Komitmen pada Privasi</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
          Data wajah siswa disimpan terenkripsi dan tidak pernah dibagikan ke pihak luar. Baca
          selengkapnya kebijakan privasi kami.
        </p>
        <Button variant="outline" className="mt-4" asChild>
          <Link to={PUBLIC_ROUTES.privacy}>Baca Kebijakan Privasi</Link>
        </Button>
      </section>
    </div>
  )
}
