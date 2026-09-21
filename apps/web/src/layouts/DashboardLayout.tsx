import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Bell, LogOut, Menu, ScanFace, Search, User, X } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { cn } from 'cn'
import { AUTH_ROUTES, PUBLIC_ROUTES } from '@/lib/routes'
import { resolveDashboardNav } from '@/layouts/dashboard-nav'

export function DashboardLayout() {
  const location = useLocation()
  const nav = resolveDashboardNav(location.pathname)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const activeItem = nav.items.find((item) => location.pathname.startsWith(item.href))

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-transform lg:translate-x-0',
          mobileNavOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Link to={PUBLIC_ROUTES.home} className="flex items-center gap-2 font-heading font-bold">
            <ScanFace className="size-6 text-primary" />
            AbsenWajah
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileNavOpen(false)}
          >
            <X className="size-5" />
          </Button>
        </div>

        <p className="px-5 pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {nav.roleLabel}
        </p>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3">
          {nav.items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setMobileNavOpen(false)}
              className={({ isActive }) =>
                cn(
                  'relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground',
                  isActive &&
                    "bg-sidebar-accent text-sidebar-foreground before:absolute before:top-1/2 before:left-0 before:h-5 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-b before:from-primary before:to-secondary before:content-['']",
                )
              }
            >
              <item.icon className="size-4.5 shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-muted-foreground"
            asChild
          >
            <Link to={AUTH_ROUTES.login}>
              <LogOut className="size-4.5" />
              Keluar
            </Link>
          </Button>
        </div>
      </aside>

      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* Konten */}
      <div className="lg:pl-[260px]">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-white/10 bg-background/80 px-4 backdrop-blur-xl sm:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu className="size-5" />
          </Button>

          <p className="hidden text-sm text-muted-foreground sm:block">
            {nav.roleLabel}
            {activeItem ? ` / ${activeItem.label}` : ''}
          </p>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Search className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Cari..." className="w-56 pl-8" />
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="size-5" />
              <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-danger" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-full outline-none">
                  <Avatar className="size-8">
                    <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=User" />
                    <AvatarFallback>
                      <User className="size-4" />
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to={PUBLIC_ROUTES.home}>Profil Saya</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to={AUTH_ROUTES.login}>
                    <LogOut className="mr-2 size-4" />
                    Keluar
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
