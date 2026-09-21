import {
  BookOpenCheck,
  CameraIcon,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Download,
  ScanFace,
  UserCheck,
  UserPlus,
} from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface GuideStep {
  icon: typeof ScanFace
  title: string
  description: string
}

const studentGuides: { title: string; steps: GuideStep[] }[] = [
  {
    title: 'Cara Mendaftarkan Wajah',
    steps: [
      {
        icon: UserPlus,
        title: '1. Buka Menu "Daftarkan Wajah"',
        description: 'Login ke aplikasi AbsenWajah di HP, lalu buka menu registrasi wajah.',
      },
      {
        icon: CameraIcon,
        title: '2. Rekam 3 Sudut Wajah',
        description:
          'Ikuti instruksi di layar: hadap depan, miring kiri, miring kanan. Pastikan cahaya cukup terang.',
      },
      {
        icon: ScanFace,
        title: '3. Tunggu Validasi',
        description:
          'Sistem memeriksa kualitas wajah secara otomatis, biasanya kurang dari 10 detik.',
      },
      {
        icon: CheckCircle2,
        title: '4. Selesai',
        description: 'Registrasi berhasil, kamu akan mendapat notifikasi dan siap absen esok hari.',
      },
    ],
  },
  {
    title: 'Cara Absen Harian',
    steps: [
      {
        icon: ScanFace,
        title: '1. Tekan Tombol "Absen Sekarang"',
        description: 'Buka aplikasi AbsenWajah di halaman utama.',
      },
      {
        icon: CameraIcon,
        title: '2. Arahkan Wajah ke Kamera',
        description: 'Posisikan wajah di tengah frame sampai muncul lingkaran hijau.',
      },
      {
        icon: CheckCircle2,
        title: '3. Lihat Hasilnya',
        description:
          'Status Hadir/Terlambat langsung muncul. Kalau gagal, kamu akan diarahkan untuk absen manual ke guru.',
      },
    ],
  },
  {
    title: 'Cara Mengajukan Izin/Sakit',
    steps: [
      {
        icon: ClipboardList,
        title: '1. Buka Menu "Ajukan Izin"',
        description: 'Pilih jenis (Izin/Sakit), isi tanggal, dan alasan.',
      },
      {
        icon: CameraIcon,
        title: '2. Unggah Bukti',
        description: 'Lampirkan foto surat dokter atau surat orang tua (JPG/PNG/PDF, maks 5MB).',
      },
      {
        icon: UserCheck,
        title: '3. Tunggu Persetujuan Wali Kelas',
        description: 'Kamu akan mendapat notifikasi begitu wali kelas menyetujui atau menolak.',
      },
    ],
  },
]

const teacherGuides: { title: string; steps: GuideStep[] }[] = [
  {
    title: 'Cara Memantau Absensi Hari Ini',
    steps: [
      {
        icon: BookOpenCheck,
        title: '1. Buka "Absensi Hari Ini"',
        description: 'Pilih kelas binaan untuk melihat status kehadiran secara realtime.',
      },
      {
        icon: CheckCircle2,
        title: '2. Pantau Status Siswa',
        description: 'Status Hadir/Terlambat/Belum Absen diperbarui otomatis setiap 10 detik.',
      },
    ],
  },
  {
    title: 'Cara Input Absensi Manual',
    steps: [
      {
        icon: ClipboardCheck,
        title: '1. Buka "Absensi Manual"',
        description: 'Gunakan menu ini sebagai fallback saat verifikasi wajah gagal.',
      },
      {
        icon: UserCheck,
        title: '2. Pilih Status & Isi Alasan',
        description: 'Tandai status siswa dan wajib isi alasan override minimal 10 karakter.',
      },
      {
        icon: CheckCircle2,
        title: '3. Simpan',
        description: 'Data tersimpan dan otomatis tercatat di audit log serta notifikasi ke siswa.',
      },
    ],
  },
  {
    title: 'Cara Menyetujui Izin & Export Laporan',
    steps: [
      {
        icon: ClipboardList,
        title: '1. Buka "Persetujuan Izin/Sakit"',
        description: 'Tinjau detail pengajuan siswa beserta bukti pendukungnya.',
      },
      {
        icon: UserCheck,
        title: '2. Setujui atau Tolak',
        description: 'Jika menolak, wajib isi alasan penolakan.',
      },
      {
        icon: Download,
        title: '3. Export Laporan',
        description: 'Buka "Pusat Export", pilih periode, lalu unduh dalam format Excel atau PDF.',
      },
    ],
  },
]

function GuideGroup({ groups }: { groups: { title: string; steps: GuideStep[] }[] }) {
  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="font-heading text-lg font-bold">{group.title}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {group.steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="size-5" />
                </div>
                <h4 className="mt-3 text-sm font-semibold">{step.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function GuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight">Panduan Pengguna</h1>
        <p className="mt-4 text-muted-foreground">
          Langkah-langkah singkat memakai AbsenWajah, untuk siswa maupun guru.
        </p>
      </div>

      <Tabs defaultValue="siswa" className="mt-12">
        <TabsList className="mx-auto">
          <TabsTrigger value="siswa">Untuk Siswa</TabsTrigger>
          <TabsTrigger value="guru">Untuk Guru</TabsTrigger>
        </TabsList>
        <TabsContent value="siswa" className="mt-8">
          <GuideGroup groups={studentGuides} />
        </TabsContent>
        <TabsContent value="guru" className="mt-8">
          <GuideGroup groups={teacherGuides} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
