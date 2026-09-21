import { LayoutDashboard } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function StudentDashboardPage() {
  return (
    <PageStub
      icon={LayoutDashboard}
      title="Dasbor Siswa"
      description="Status kehadiran hari ini & notifikasi terbaru."
      task="Task 3.1"
    />
  )
}
