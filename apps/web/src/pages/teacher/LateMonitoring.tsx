import { AlarmClock } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function LateMonitoringPage() {
  return (
    <PageStub
      icon={AlarmClock}
      title="Monitoring Keterlambatan"
      description="Ranking & tren keterlambatan siswa."
      task="Task 4.8"
    />
  )
}
