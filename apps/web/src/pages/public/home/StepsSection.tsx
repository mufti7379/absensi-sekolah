import { motion } from 'framer-motion'
import { CheckCircle2, ScanFace, UserPlus } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: '1. Daftar Wajah',
    description:
      'Di awal tahun ajaran, siswa mendaftarkan wajah lewat aplikasi HP - cukup 3 sudut (depan, kiri, kanan).',
  },
  {
    icon: ScanFace,
    title: '2. Scan',
    description:
      'Setiap pagi, siswa cukup arahkan wajah ke kamera HP. Sistem otomatis memverifikasi dalam hitungan detik.',
  },
  {
    icon: CheckCircle2,
    title: '3. Selesai',
    description:
      'Status Hadir/Terlambat langsung tercatat, notifikasi terkirim, dan wali kelas bisa memantau dari dashboard.',
  },
]

export function StepsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight">Cara Kerjanya Sederhana</h2>
        <p className="mt-3 text-muted-foreground">
          Tiga langkah singkat, tanpa kertas, tanpa antre di depan kelas.
        </p>
      </div>

      <div className="relative mt-14 grid gap-8 md:grid-cols-3">
        <div
          aria-hidden
          className="absolute top-8 right-[16.6%] left-[16.6%] hidden h-px bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 md:block"
        />

        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
          >
            <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-background">
              <step.icon className="size-8" />
            </div>
            <h3 className="mt-4 font-heading font-bold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
