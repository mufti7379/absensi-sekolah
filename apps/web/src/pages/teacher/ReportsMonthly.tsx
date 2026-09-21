import { FileBarChart } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function ReportsMonthlyPage() {
  return (
    <PageStub
      icon={FileBarChart}
      title="Rekap Bulanan"
      description="Rekap absensi per bulan + grafik tren."
      task="Task 4.5"
    />
  )
}
