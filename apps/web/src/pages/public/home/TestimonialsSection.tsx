import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    quote:
      'Sejak pakai AbsenWajah, absensi kelas yang tadinya 10 menit sekarang cuma hitungan detik. Saya jadi punya lebih banyak waktu mengajar.',
    name: 'Ratna Kusumaningrum, S.Pd.',
    role: 'Wali Kelas XI IPA 1',
  },
  {
    quote:
      'Laporan kehadiran bulanan yang dulu saya susun manual dari Excel, sekarang tinggal klik export. Datanya juga rapi per tahun ajaran.',
    name: 'Hendro Wibowo, M.Pd.',
    role: 'Wali Kelas XI IPS 2',
  },
  {
    quote:
      'Sebagai kepala sekolah, saya bisa lihat tren kehadiran seluruh sekolah dari satu dashboard, tanpa harus minta rekap ke tiap wali kelas.',
    name: 'Dr. Bambang Suryanto, M.Pd.',
    role: 'Kepala Sekolah',
  },
]

export function TestimonialsSection() {
  return (
    <section className="border-t border-white/5 bg-white/[0.02] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight">
            Dipercaya Guru & Wali Kelas
          </h2>
          <p className="mt-3 text-muted-foreground">
            Cerita dari mereka yang memakai AbsenWajah setiap hari.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <Quote className="size-6 text-primary/60" />
              <blockquote className="mt-3 flex-1 text-sm text-muted-foreground">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <Avatar className="size-9">
                  <AvatarImage
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`}
                  />
                  <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
