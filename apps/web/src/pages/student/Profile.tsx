import { UserCircle } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function StudentProfilePage() {
  return (
    <PageStub
      icon={UserCircle}
      title="Profil Saya"
      description="Data pribadi & ganti password."
      task="Task 3.4"
    />
  )
}
