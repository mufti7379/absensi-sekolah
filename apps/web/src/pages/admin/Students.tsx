import { GraduationCap } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function AdminStudentsPage() {
  return (
    <PageStub
      icon={GraduationCap}
      title="Kelola Siswa"
      description="CRUD siswa + import CSV."
      task="Task 5.3"
    />
  )
}
