import { FileBarChart } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function AdminReportsPage() {
  return (
    <PageStub
      icon={FileBarChart}
      title="Laporan Global"
      description="Laporan read-only lintas kelas."
      task="Task 5.11"
    />
  )
}
