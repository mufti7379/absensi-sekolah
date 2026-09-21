import { Link } from 'react-router-dom'
import { Database, Eye, Lock, Mail, ShieldCheck, UserCog } from 'lucide-react'

import { PUBLIC_ROUTES } from '@/lib/routes'

const sections = [
  {
    icon: Database,
    title: '1. Data yang Kami Kumpulkan',
    body: [
      'Data identitas: nama, NIS, email sekolah, kelas, dan tahun ajaran.',
      'Data biometrik wajah: diambil hanya saat proses registrasi wajah di awal tahun ajaran, lalu diubah menjadi kode digital (vector angka), bukan disimpan sebagai foto.',
      'Data kehadiran: waktu absen, status (Hadir/Terlambat/Izin/Sakit/Alpa), dan metode verifikasi.',
    ],
  },
  {
    icon: Lock,
    title: '2. Bagaimana Data Wajah Diamankan',
    body: [
      'Kode digital wajah disimpan dalam bentuk terenkripsi di server, terpisah dari data pribadi lainnya.',
      'Kode ini tidak bisa diubah kembali menjadi foto wajah, sehingga tidak bisa disalahgunakan untuk memalsukan identitas.',
      'Kode wajah tidak pernah dikirim ke perangkat siswa, guru, atau pihak mana pun - hanya dipakai untuk perbandingan saat verifikasi di server.',
      'Setiap akses ke data wajah dicatat dalam log audit dan dibatasi hanya untuk proses verifikasi otomatis.',
    ],
  },
  {
    icon: Eye,
    title: '3. Untuk Apa Data Ini Digunakan',
    body: [
      'Memverifikasi kehadiran siswa secara otomatis saat absen harian.',
      'Menyusun rekap dan laporan kehadiran untuk wali kelas, admin sekolah, dan kepala sekolah.',
      'Data tidak digunakan untuk tujuan lain di luar keperluan absensi sekolah, dan tidak dibagikan ke pihak ketiga mana pun.',
    ],
  },
  {
    icon: UserCog,
    title: '4. Hak Anda Sebagai Pengguna',
    body: [
      'Siswa (atau orang tua/wali untuk siswa di bawah umur) berhak mengetahui data apa saja yang tersimpan.',
      'Registrasi wajah siswa baru memerlukan persetujuan dari orang tua/wali, karena data biometrik anak tergolong data pribadi yang bersifat spesifik.',
      'Siswa dapat mengajukan reset/penghapusan data wajah melalui admin sekolah, misalnya saat pindah sekolah atau lulus.',
      'Permintaan reset atau penghapusan akan diproses admin sekolah dan dicatat dalam log audit untuk transparansi.',
    ],
  },
]

export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/20 px-3 py-1 text-xs font-medium text-success">
          <ShieldCheck className="size-3.5" />
          Data Biometrik Terlindungi
        </span>
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight">
          Kebijakan Privasi
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Terakhir diperbarui: 12 September 2026</p>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-muted-foreground backdrop-blur-xl">
        Kebijakan ini disusun untuk mematuhi{' '}
        <strong className="text-foreground">
          Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)
        </strong>
        , khususnya terkait data biometrik yang tergolong sebagai data pribadi yang bersifat
        spesifik. AbsenWajah berkomitmen memproses data wajah siswa secara sah, terbatas pada tujuan
        absensi, dan dengan pengamanan yang memadai.
      </div>

      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <section.icon className="size-4.5" />
              </div>
              <h2 className="font-heading text-lg font-bold">{section.title}</h2>
            </div>
            <ul className="mt-3 ml-12 list-disc space-y-2 text-sm text-muted-foreground marker:text-primary/60">
              {section.body.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
        <Mail className="mx-auto size-6 text-primary" />
        <h2 className="mt-3 font-heading font-bold">Pertanyaan Seputar Privasi Data?</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Hubungi admin IT sekolah kami di{' '}
          <a href="mailto:admin.it@sman-harapanbangsa.sch.id" className="text-primary underline">
            admin.it@sman-harapanbangsa.sch.id
          </a>{' '}
          atau lewat{' '}
          <Link to={PUBLIC_ROUTES.contact} className="text-primary underline">
            halaman kontak
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
