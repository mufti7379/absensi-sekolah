import { CalendarClock } from 'lucide-react'

import { PageStub } from '@/components/PageStub'

export function AttendanceTodayPage() {
  return (
    <PageStub
      icon={CalendarClock}
      title="Absensi Hari Ini"
      description="Status kehadiran kelas realtime."
      task="Task 4.2"
    />
  )
}
