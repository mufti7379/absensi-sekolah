import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

import { AuthLayout } from '@/layouts/AuthLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { PublicLayout } from '@/layouts/PublicLayout'
import {
  ADMIN_ROUTES,
  AUTH_ROUTES,
  PRINCIPAL_ROUTES,
  PUBLIC_ROUTES,
  STUDENT_ROUTES,
  TEACHER_ROUTES,
} from '@/lib/routes'
import { Toaster } from '@/components/ui/sonner'

// Public
const HomePage = lazy(() => import('@/pages/public/Home').then((m) => ({ default: m.HomePage })))
const AboutPage = lazy(() => import('@/pages/public/About').then((m) => ({ default: m.AboutPage })))
const GuidePage = lazy(() => import('@/pages/public/Guide').then((m) => ({ default: m.GuidePage })))
const ContactPage = lazy(() =>
  import('@/pages/public/Contact').then((m) => ({ default: m.ContactPage })),
)
const PrivacyPage = lazy(() =>
  import('@/pages/public/Privacy').then((m) => ({ default: m.PrivacyPage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/public/NotFound').then((m) => ({ default: m.NotFoundPage })),
)

// Auth
const LoginPage = lazy(() => import('@/pages/auth/Login').then((m) => ({ default: m.LoginPage })))
const RegisterPage = lazy(() =>
  import('@/pages/auth/Register').then((m) => ({ default: m.RegisterPage })),
)
const ForgotPasswordPage = lazy(() =>
  import('@/pages/auth/ForgotPassword').then((m) => ({ default: m.ForgotPasswordPage })),
)
const ResetPasswordPage = lazy(() =>
  import('@/pages/auth/ResetPassword').then((m) => ({ default: m.ResetPasswordPage })),
)

// Student
const StudentDashboardPage = lazy(() =>
  import('@/pages/student/Dashboard').then((m) => ({ default: m.StudentDashboardPage })),
)
const AttendanceHistoryPage = lazy(() =>
  import('@/pages/student/AttendanceHistory').then((m) => ({
    default: m.AttendanceHistoryPage,
  })),
)
const LeaveRequestPage = lazy(() =>
  import('@/pages/student/LeaveRequest').then((m) => ({ default: m.LeaveRequestPage })),
)
const LeaveHistoryPage = lazy(() =>
  import('@/pages/student/LeaveHistory').then((m) => ({ default: m.LeaveHistoryPage })),
)
const FaceRegistrationPage = lazy(() =>
  import('@/pages/student/FaceRegistration').then((m) => ({ default: m.FaceRegistrationPage })),
)
const StudentNotificationsPage = lazy(() =>
  import('@/pages/student/Notifications').then((m) => ({ default: m.StudentNotificationsPage })),
)
const StudentProfilePage = lazy(() =>
  import('@/pages/student/Profile').then((m) => ({ default: m.StudentProfilePage })),
)

// Teacher
const TeacherDashboardPage = lazy(() =>
  import('@/pages/teacher/Dashboard').then((m) => ({ default: m.TeacherDashboardPage })),
)
const AttendanceTodayPage = lazy(() =>
  import('@/pages/teacher/AttendanceToday').then((m) => ({ default: m.AttendanceTodayPage })),
)
const AttendanceManualPage = lazy(() =>
  import('@/pages/teacher/AttendanceManual').then((m) => ({ default: m.AttendanceManualPage })),
)
const ReportsDailyPage = lazy(() =>
  import('@/pages/teacher/ReportsDaily').then((m) => ({ default: m.ReportsDailyPage })),
)
const ReportsMonthlyPage = lazy(() =>
  import('@/pages/teacher/ReportsMonthly').then((m) => ({ default: m.ReportsMonthlyPage })),
)
const ReportsAcademicYearPage = lazy(() =>
  import('@/pages/teacher/ReportsAcademicYear').then((m) => ({
    default: m.ReportsAcademicYearPage,
  })),
)
const ApprovalsPage = lazy(() =>
  import('@/pages/teacher/Approvals').then((m) => ({ default: m.ApprovalsPage })),
)
const LateMonitoringPage = lazy(() =>
  import('@/pages/teacher/LateMonitoring').then((m) => ({ default: m.LateMonitoringPage })),
)
const TeacherStudentsPage = lazy(() =>
  import('@/pages/teacher/Students').then((m) => ({ default: m.TeacherStudentsPage })),
)
const TeacherExportPage = lazy(() =>
  import('@/pages/teacher/Export').then((m) => ({ default: m.TeacherExportPage })),
)
const TeacherProfilePage = lazy(() =>
  import('@/pages/teacher/Profile').then((m) => ({ default: m.TeacherProfilePage })),
)

// Admin
const AdminDashboardPage = lazy(() =>
  import('@/pages/admin/Dashboard').then((m) => ({ default: m.AdminDashboardPage })),
)
const UsersPage = lazy(() => import('@/pages/admin/Users').then((m) => ({ default: m.UsersPage })))
const AdminStudentsPage = lazy(() =>
  import('@/pages/admin/Students').then((m) => ({ default: m.AdminStudentsPage })),
)
const TeachersPage = lazy(() =>
  import('@/pages/admin/Teachers').then((m) => ({ default: m.TeachersPage })),
)
const ClassesPage = lazy(() =>
  import('@/pages/admin/Classes').then((m) => ({ default: m.ClassesPage })),
)
const AcademicYearsPage = lazy(() =>
  import('@/pages/admin/AcademicYears').then((m) => ({ default: m.AcademicYearsPage })),
)
const HolidaysPage = lazy(() =>
  import('@/pages/admin/Holidays').then((m) => ({ default: m.HolidaysPage })),
)
const AttendanceLocksPage = lazy(() =>
  import('@/pages/admin/AttendanceLocks').then((m) => ({ default: m.AttendanceLocksPage })),
)
const SchedulesPage = lazy(() =>
  import('@/pages/admin/Schedules').then((m) => ({ default: m.SchedulesPage })),
)
const AdminFaceRegistrationsPage = lazy(() =>
  import('@/pages/admin/FaceRegistrations').then((m) => ({
    default: m.AdminFaceRegistrationsPage,
  })),
)
const AdminReportsPage = lazy(() =>
  import('@/pages/admin/Reports').then((m) => ({ default: m.AdminReportsPage })),
)
const AuditLogsPage = lazy(() =>
  import('@/pages/admin/AuditLogs').then((m) => ({ default: m.AuditLogsPage })),
)
const SettingsPage = lazy(() =>
  import('@/pages/admin/Settings').then((m) => ({ default: m.SettingsPage })),
)

// Principal
const PrincipalDashboardPage = lazy(() =>
  import('@/pages/principal/Dashboard').then((m) => ({ default: m.PrincipalDashboardPage })),
)
const PrincipalReportsPage = lazy(() =>
  import('@/pages/principal/Reports').then((m) => ({ default: m.PrincipalReportsPage })),
)

function RouteLoadingFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Loader2 className="size-6 animate-spin text-primary" />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          {/* Public - Bab 3.A (navbar + footer) */}
          <Route element={<PublicLayout />}>
            <Route path={PUBLIC_ROUTES.home} element={<HomePage />} />
            <Route path={PUBLIC_ROUTES.about} element={<AboutPage />} />
            <Route path={PUBLIC_ROUTES.guide} element={<GuidePage />} />
            <Route path={PUBLIC_ROUTES.contact} element={<ContactPage />} />
            <Route path={PUBLIC_ROUTES.privacy} element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* Auth - Bab 3.A (split-screen) */}
          <Route element={<AuthLayout />}>
            <Route path={AUTH_ROUTES.login} element={<LoginPage />} />
            <Route path={AUTH_ROUTES.register} element={<RegisterPage />} />
            <Route path={AUTH_ROUTES.forgotPassword} element={<ForgotPasswordPage />} />
            <Route path={AUTH_ROUTES.resetPassword} element={<ResetPasswordPage />} />
          </Route>

          {/* Dashboard (Siswa / Guru / Admin / Kepsek) - Bab 3.B-E (sidebar + header) */}
          <Route element={<DashboardLayout />}>
            {/* Siswa */}
            <Route path={STUDENT_ROUTES.dashboard} element={<StudentDashboardPage />} />
            <Route path={STUDENT_ROUTES.attendanceHistory} element={<AttendanceHistoryPage />} />
            <Route path={STUDENT_ROUTES.leaveRequest} element={<LeaveRequestPage />} />
            <Route path={STUDENT_ROUTES.leaveHistory} element={<LeaveHistoryPage />} />
            <Route path={STUDENT_ROUTES.faceRegistration} element={<FaceRegistrationPage />} />
            <Route path={STUDENT_ROUTES.notifications} element={<StudentNotificationsPage />} />
            <Route path={STUDENT_ROUTES.profile} element={<StudentProfilePage />} />

            {/* Guru / Wali Kelas */}
            <Route path={TEACHER_ROUTES.dashboard} element={<TeacherDashboardPage />} />
            <Route path={TEACHER_ROUTES.attendanceToday} element={<AttendanceTodayPage />} />
            <Route path={TEACHER_ROUTES.attendanceManual} element={<AttendanceManualPage />} />
            <Route path={TEACHER_ROUTES.reportsDaily} element={<ReportsDailyPage />} />
            <Route path={TEACHER_ROUTES.reportsMonthly} element={<ReportsMonthlyPage />} />
            <Route
              path={TEACHER_ROUTES.reportsAcademicYear}
              element={<ReportsAcademicYearPage />}
            />
            <Route path={TEACHER_ROUTES.approvals} element={<ApprovalsPage />} />
            <Route path={TEACHER_ROUTES.lateMonitoring} element={<LateMonitoringPage />} />
            <Route path={TEACHER_ROUTES.students} element={<TeacherStudentsPage />} />
            <Route path={TEACHER_ROUTES.export} element={<TeacherExportPage />} />
            <Route path={TEACHER_ROUTES.profile} element={<TeacherProfilePage />} />

            {/* Admin */}
            <Route path={ADMIN_ROUTES.dashboard} element={<AdminDashboardPage />} />
            <Route path={ADMIN_ROUTES.users} element={<UsersPage />} />
            <Route path={ADMIN_ROUTES.students} element={<AdminStudentsPage />} />
            <Route path={ADMIN_ROUTES.teachers} element={<TeachersPage />} />
            <Route path={ADMIN_ROUTES.classes} element={<ClassesPage />} />
            <Route path={ADMIN_ROUTES.academicYears} element={<AcademicYearsPage />} />
            <Route path={ADMIN_ROUTES.holidays} element={<HolidaysPage />} />
            <Route path={ADMIN_ROUTES.attendanceLocks} element={<AttendanceLocksPage />} />
            <Route path={ADMIN_ROUTES.schedules} element={<SchedulesPage />} />
            <Route path={ADMIN_ROUTES.faceRegistrations} element={<AdminFaceRegistrationsPage />} />
            <Route path={ADMIN_ROUTES.reports} element={<AdminReportsPage />} />
            <Route path={ADMIN_ROUTES.auditLogs} element={<AuditLogsPage />} />
            <Route path={ADMIN_ROUTES.settings} element={<SettingsPage />} />

            {/* Kepala Sekolah */}
            <Route path={PRINCIPAL_ROUTES.dashboard} element={<PrincipalDashboardPage />} />
            <Route path={PRINCIPAL_ROUTES.reports} element={<PrincipalReportsPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position="top-right" />
    </BrowserRouter>
  )
}

export default App
