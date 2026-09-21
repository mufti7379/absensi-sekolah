import { CalendarClock } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function SchedulesPage() {
  return (
    <PageStub
      icon={CalendarClock}
      title="Jadwal Kelas"
      description="Jam masuk, pulang, & toleransi terlambat."
      task="Task 5.9"
    />
  )
}
