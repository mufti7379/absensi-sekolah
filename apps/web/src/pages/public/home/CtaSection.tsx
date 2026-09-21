import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { AUTH_ROUTES } from '@/lib/routes'

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-10 text-center text-background md:p-16"
      >
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
          Siap membuat absensi sekolah lebih cepat & akurat?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm opacity-90 md:text-base">
          Daftarkan sekolah Anda dan mulai rasakan absensi tanpa antre, tanpa titip absen.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="mt-8 bg-background text-foreground"
          asChild
        >
          <Link to={AUTH_ROUTES.register}>Mulai Sekarang</Link>
        </Button>
      </motion.div>
    </section>
  )
}
