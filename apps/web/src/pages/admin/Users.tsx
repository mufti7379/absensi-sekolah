import { UserCog } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function UsersPage() {
  return (
    <PageStub
      icon={UserCog}
      title="Kelola Pengguna"
      description="CRUD user & role."
      task="Task 5.2"
    />
  )
}
