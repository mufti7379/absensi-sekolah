import { Link, NavLink, Outlet } from 'react-router-dom'
import { ScanFace, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from 'cn'
import { PUBLIC_ROUTES, AUTH_ROUTES } from '@/lib/routes'

const navLinks = [
  { label: 'Tentang', href: PUBLIC_ROUTES.about },
  { label: 'Panduan', href: PUBLIC_ROUTES.guide },
  { label: 'Kontak', href: PUBLIC_ROUTES.contact },
]

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to={PUBLIC_ROUTES.home} className="flex items-center gap-2 font-heading font-bold">
            <ScanFace className="size-6 text-primary" />
            <span>AbsenWajah</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn('transition-colors hover:text-foreground', isActive && 'text-foreground')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link to={AUTH_ROUTES.login}>Masuk</Link>
            </Button>
            <Button asChild>
              <Link to={AUTH_ROUTES.register}>Daftar</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 font-heading font-bold">
              <ScanFace className="size-5 text-primary" />
              AbsenWajah
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Sistem absensi siswa berbasis biometrik wajah untuk sekolah modern.
            </p>
          </div>

          <div className="text-sm">
            <p className="mb-3 font-medium text-foreground">Tautan</p>
            <ul className="space-y-2 text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={PUBLIC_ROUTES.privacy} className="hover:text-foreground">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/20 px-3 py-1 text-xs font-medium text-success">
              <ShieldCheck className="size-3.5" />
              Data Biometrik Terlindungi
            </span>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} AbsenWajah. Seluruh hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
