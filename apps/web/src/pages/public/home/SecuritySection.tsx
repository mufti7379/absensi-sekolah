import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Fingerprint, Lock, ScrollText, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { PUBLIC_ROUTES } from '@/lib/routes'

const points = [
  {
    icon: Fingerprint,
    title: 'Bukan Foto, Cuma Kode Unik',
    description:
      'Wajah diubah jadi kode digital yang tidak bisa dipakai untuk memalsukan foto atau identitas.',
  },
  {
    icon: Lock,
    title: 'Tersimpan Terenkripsi',
    description: 'Data wajah dienkripsi dan tidak pernah dikirim kembali ke perangkat siapa pun.',
  },
  {
    icon: ScrollText,
    title: 'Setiap Akses Tercatat',
    description: 'Semua akses ke data wajah masuk log audit - transparan dan bisa ditelusuri.',
  },
]

export function SecuritySection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-[1fr_1.2fr] md:p-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/20 px-3 py-1 text-xs font-medium text-success">
            <ShieldCheck className="size-3.5" />
            Data Biometrik Terlindungi
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance">
            Privasi wajah siswa adalah prioritas kami
          </h2>
          <p className="mt-3 text-muted-foreground">
            Kami paham data wajah bersifat sangat pribadi. Karena itu, AbsenWajah dirancang supaya
            data ini tidak pernah bisa disalahgunakan.
          </p>
          <Button variant="outline" className="mt-6" asChild>
            <Link to={PUBLIC_ROUTES.privacy}>Baca Kebijakan Privasi</Link>
          </Button>
        </motion.div>

        <div className="grid gap-4">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4 rounded-2xl border border-white/10 bg-background/40 p-5"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <point.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">{point.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
