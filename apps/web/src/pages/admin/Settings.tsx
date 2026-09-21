import { Settings } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function SettingsPage() {
  return (
    <PageStub
      icon={Settings}
      title="Pengaturan Sistem"
      description="Threshold similarity, token, dll."
      task="Task 5.13"
    />
  )
}
