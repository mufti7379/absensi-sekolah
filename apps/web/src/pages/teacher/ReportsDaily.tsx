import { FileBarChart } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function ReportsDailyPage() {
  return (
    <PageStub
      icon={FileBarChart}
      title="Rekap Harian"
      description="Rekap absensi per hari."
      task="Task 4.4"
    />
  )
}
