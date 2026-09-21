import { CheckSquare } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function ApprovalsPage() {
  return (
    <PageStub
      icon={CheckSquare}
      title="Persetujuan Izin/Sakit"
      description="Daftar pengajuan izin menunggu approval."
      task="Task 4.7"
    />
  )
}
