import { BookOpenCheck } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function AttendanceManualPage() {
  return (
    <PageStub
      icon={BookOpenCheck}
      title="Absensi Manual"
      description="Input absensi manual sebagai fallback."
      task="Task 4.3"
    />
  )
}
