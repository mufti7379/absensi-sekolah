import type { LucideIcon } from 'lucide-react'
import { Construction } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface PageStubProps {
  icon?: LucideIcon
  title: string
  description: string
  /** Nomor task PRD (Bab 11) yang akan mengisi halaman ini dengan UI penuh. */
  task: string
}

/**
 * Placeholder sementara untuk halaman yang belum dibangun.
 * Skeleton router (Task 1.4) merutekan semua halaman di Bab 3 lebih dulu;
 * konten penuh tiap halaman dibangun bertahap di task-task berikutnya (Bab 11).
 */
export function PageStub({ icon: Icon = Construction, title, description, task }: PageStubProps) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-6">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="items-center">
          <div className="mb-2 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="size-7" />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-mono text-xs text-muted-foreground">Dibangun di {task}</p>
        </CardContent>
      </Card>
    </div>
  )
}
