import { motion } from 'framer-motion'
import {
  AlarmClock,
  CalendarRange,
  ClipboardCheck,
  Download,
  ScanFace,
  ShieldCheck,
} from 'lucide-react'

const features = [
  {
    icon: ScanFace,
    title: 'Absen dalam Hitungan Detik',
    description: 'Verifikasi wajah langsung dari HP siswa, menggantikan absen manual 5-10 menit.',
  },
  {
    icon: ShieldCheck,
    title: 'Anti Titip Absen',
    description: 'Setiap wajah unik per siswa - tidak bisa dititipkan atau diwakilkan teman.',
  },
  {
    icon: CalendarRange,
    title: 'Rekap Lintas Tahun Ajaran',
    description: 'Data kehadiran tersimpan permanen dan bisa dibandingkan antar tahun ajaran.',
  },
  {
    icon: ClipboardCheck,
    title: 'Izin/Sakit Terdokumentasi',
    description: 'Pengajuan izin & bukti pendukung tercatat rapi, tidak lagi lewat WhatsApp.',
  },
  {
    icon: AlarmClock,
    title: 'Monitoring Keterlambatan',
    description: 'Wali kelas otomatis melihat tren & siswa yang terlambat berulang tiap bulan.',
  },
  {
    icon: Download,
    title: 'Export Sekali Klik',
    description: 'Laporan rekap bulanan & tahunan siap unduh dalam format Excel atau PDF.',
  },
]

export function FeaturesSection() {
  return (
    <section className="border-t border-white/5 bg-white/[0.02] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight">Fitur Unggulan</h2>
          <p className="mt-3 text-muted-foreground">
            Semua yang dibutuhkan sekolah untuk mengelola kehadiran siswa, dalam satu dashboard.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-primary/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="size-5.5" />
              </div>
              <h3 className="mt-4 font-heading font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
