import type { LucideIcon } from 'lucide-react'
import {
  AlarmClock,
  BookOpenCheck,
  CalendarClock,
  CalendarOff,
  CalendarRange,
  CheckSquare,
  ClipboardList,
  Download,
  FileBarChart,
  FileClock,
  GraduationCap,
  Lock,
  LayoutDashboard,
  ScanFace,
  ScrollText,
  School,
  Settings,
  UserCircle,
  UserCog,
  Users,
} from 'lucide-react'

import { ADMIN_ROUTES, PRINCIPAL_ROUTES, STUDENT_ROUTES, TEACHER_ROUTES } from '@/lib/routes'

export interface DashboardNavItem {
  label: string
  href: string
  icon: LucideIcon
}

export interface DashboardNavSection {
  role: 'SISWA' | 'GURU_MAPEL' | 'WALI_KELAS' | 'ADMIN' | 'KEPALA_SEKOLAH'
  roleLabel: string
  items: DashboardNavItem[]
}

export const studentNav: DashboardNavSection = {
  role: 'SISWA',
  roleLabel: 'Siswa',
  items: [
    { label: 'Dasbor', href: STUDENT_ROUTES.dashboard, icon: LayoutDashboard },
    { label: 'Riwayat Absensi', href: STUDENT_ROUTES.attendanceHistory, icon: CalendarClock },
    { label: 'Ajukan Izin', href: STUDENT_ROUTES.leaveRequest, icon: ClipboardList },
    { label: 'Riwayat Izin', href: STUDENT_ROUTES.leaveHistory, icon: FileClock },
    { label: 'Registrasi Wajah', href: STUDENT_ROUTES.faceRegistration, icon: ScanFace },
    { label: 'Notifikasi', href: STUDENT_ROUTES.notifications, icon: AlarmClock },
    { label: 'Profil Saya', href: STUDENT_ROUTES.profile, icon: UserCircle },
  ],
}

export const teacherNav: DashboardNavSection = {
  role: 'WALI_KELAS',
  roleLabel: 'Guru / Wali Kelas',
  items: [
    { label: 'Dasbor', href: TEACHER_ROUTES.dashboard, icon: LayoutDashboard },
    { label: 'Absensi Hari Ini', href: TEACHER_ROUTES.attendanceToday, icon: CalendarClock },
    { label: 'Absensi Manual', href: TEACHER_ROUTES.attendanceManual, icon: BookOpenCheck },
    { label: 'Rekap Harian', href: TEACHER_ROUTES.reportsDaily, icon: FileBarChart },
    { label: 'Rekap Bulanan', href: TEACHER_ROUTES.reportsMonthly, icon: FileBarChart },
    {
      label: 'Rekap Tahun Ajaran',
      href: TEACHER_ROUTES.reportsAcademicYear,
      icon: CalendarRange,
    },
    { label: 'Persetujuan Izin', href: TEACHER_ROUTES.approvals, icon: CheckSquare },
    { label: 'Monitoring Keterlambatan', href: TEACHER_ROUTES.lateMonitoring, icon: AlarmClock },
    { label: 'Data Siswa Kelas', href: TEACHER_ROUTES.students, icon: Users },
    { label: 'Pusat Export', href: TEACHER_ROUTES.export, icon: Download },
    { label: 'Profil Guru', href: TEACHER_ROUTES.profile, icon: UserCircle },
  ],
}

export const adminNav: DashboardNavSection = {
  role: 'ADMIN',
  roleLabel: 'Admin Sekolah',
  items: [
    { label: 'Dasbor', href: ADMIN_ROUTES.dashboard, icon: LayoutDashboard },
    { label: 'Kelola Pengguna', href: ADMIN_ROUTES.users, icon: UserCog },
    { label: 'Kelola Siswa', href: ADMIN_ROUTES.students, icon: GraduationCap },
    { label: 'Kelola Guru', href: ADMIN_ROUTES.teachers, icon: Users },
    { label: 'Kelola Kelas', href: ADMIN_ROUTES.classes, icon: School },
    { label: 'Tahun Ajaran', href: ADMIN_ROUTES.academicYears, icon: CalendarRange },
    { label: 'Hari Libur', href: ADMIN_ROUTES.holidays, icon: CalendarOff },
    { label: 'Kunci Absensi', href: ADMIN_ROUTES.attendanceLocks, icon: Lock },
    { label: 'Jadwal Kelas', href: ADMIN_ROUTES.schedules, icon: CalendarClock },
    {
      label: 'Registrasi Wajah',
      href: ADMIN_ROUTES.faceRegistrations,
      icon: ScanFace,
    },
    { label: 'Laporan Global', href: ADMIN_ROUTES.reports, icon: FileBarChart },
    { label: 'Audit Log', href: ADMIN_ROUTES.auditLogs, icon: ScrollText },
    { label: 'Pengaturan Sistem', href: ADMIN_ROUTES.settings, icon: Settings },
  ],
}

export const principalNav: DashboardNavSection = {
  role: 'KEPALA_SEKOLAH',
  roleLabel: 'Kepala Sekolah',
  items: [
    { label: 'Dasbor', href: PRINCIPAL_ROUTES.dashboard, icon: LayoutDashboard },
    { label: 'Laporan Sekolah', href: PRINCIPAL_ROUTES.reports, icon: FileBarChart },
  ],
}

/** Tentukan section navigasi aktif berdasarkan prefix path saat ini. */
export function resolveDashboardNav(pathname: string): DashboardNavSection {
  if (pathname.startsWith('/teacher')) return teacherNav
  if (pathname.startsWith('/admin')) return adminNav
  if (pathname.startsWith('/principal')) return principalNav
  return studentNav
}
