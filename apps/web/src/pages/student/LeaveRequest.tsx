import { ClipboardList } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function LeaveRequestPage() {
  return (
    <PageStub
      icon={ClipboardList}
      title="Ajukan Izin/Sakit"
      description="Form pengajuan izin/sakit + upload bukti."
      task="Task 3.3"
    />
  )
}
