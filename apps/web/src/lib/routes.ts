/**
 * Konstanta path rute, sesuai daftar halaman di PRD Bab 3.
 * Dipakai bareng oleh router (App.tsx) dan navigasi (Sidebar/Navbar)
 * supaya path tidak tersebar sebagai magic string di banyak tempat.
 */
export const PUBLIC_ROUTES = {
  home: '/',
  about: '/tentang',
  guide: '/panduan',
  contact: '/kontak',
  privacy: '/privacy',
} as const

export const AUTH_ROUTES = {
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password/:token',
} as const

export const STUDENT_ROUTES = {
  dashboard: '/dashboard',
  attendanceHistory: '/attendance-history',
  leaveRequest: '/leave-request',
  leaveHistory: '/leave-history',
  faceRegistration: '/face-registration',
  notifications: '/notifications',
  profile: '/profile',
} as const

export const TEACHER_ROUTES = {
  dashboard: '/teacher/dashboard',
  attendanceToday: '/teacher/attendance/today',
  attendanceManual: '/teacher/attendance/manual',
  reportsDaily: '/teacher/reports/daily',
  reportsMonthly: '/teacher/reports/monthly',
  reportsAcademicYear: '/teacher/reports/academic-year',
  approvals: '/teacher/approvals',
  lateMonitoring: '/teacher/late-monitoring',
  students: '/teacher/students',
  export: '/teacher/export',
  profile: '/teacher/profile',
} as const

export const ADMIN_ROUTES = {
  dashboard: '/admin/dashboard',
  users: '/admin/users',
  students: '/admin/students',
  teachers: '/admin/teachers',
  classes: '/admin/classes',
  academicYears: '/admin/academic-years',
  holidays: '/admin/holidays',
  attendanceLocks: '/admin/attendance-locks',
  schedules: '/admin/schedules',
  faceRegistrations: '/admin/face-registrations',
  reports: '/admin/reports',
  auditLogs: '/admin/audit-logs',
  settings: '/admin/settings',
} as const

export const PRINCIPAL_ROUTES = {
  dashboard: '/principal/dashboard',
  reports: '/principal/reports',
} as const

export const ROUTES = {
  public: PUBLIC_ROUTES,
  auth: AUTH_ROUTES,
  student: STUDENT_ROUTES,
  teacher: TEACHER_ROUTES,
  admin: ADMIN_ROUTES,
  principal: PRINCIPAL_ROUTES,
} as const
