import { Download } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function TeacherExportPage() {
  return (
    <PageStub
      icon={Download}
      title="Pusat Export"
      description="Generator export laporan Excel/PDF."
      task="Task 4.10"
    />
  )
}
