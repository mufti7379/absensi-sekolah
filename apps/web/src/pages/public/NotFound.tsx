import { Compass } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function NotFoundPage() {
  return (
    <PageStub
      icon={Compass}
      title="Halaman Tidak Ditemukan"
      description="URL yang kamu tuju tidak tersedia."
      task="Task 2.4"
    />
  )
}
