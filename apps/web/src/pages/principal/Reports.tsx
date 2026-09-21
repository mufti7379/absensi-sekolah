import { FileBarChart } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function PrincipalReportsPage() {
  return (
    <PageStub
      icon={FileBarChart}
      title="Laporan Read-Only"
      description="Laporan lintas kelas tanpa aksi edit."
      task="Task 6.2"
    />
  )
}
