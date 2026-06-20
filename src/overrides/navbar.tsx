'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useAuth } from '@/lib/auth-context'

export const NAVBAR_OVERRIDE_ENABLED = true

const topBarFeatures = [
  'Global Distribution',
  'Real Media Reach',
  '24/7 Submission',
]

const navLinks = [
  // { label: 'Services', href: '/pricing' },
  // { label: 'Pricing', href: '/pricing' },
  { label: 'Press Releases', href: '/press-releases' },
  // { label: 'News', href: '/press-releases' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7e7e7] bg-white">
      {/* Top utility bar */}
      <div className="hidden bg-[#f3f3f3] text-[#21334d] lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] uppercase tracking-[0.14em] sm:px-6 lg:px-8">
          <span>{SITE_CONFIG.domain}</span>
          <div className="flex items-center gap-5 text-[#6a7483]">
            {topBarFeatures.map((feature) => <span key={feature}>{feature}</span>)}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white text-[#17324f]">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo + site name */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <img
              src="/favicon.png?v=20260520"
              alt={`${SITE_CONFIG.name} logo`}
              width="300"
              height="74"
              className="h-12 w-auto object-contain sm:h-14"
            />
            <div className="hidden sm:block">
              <p className="text-2xl font-bold leading-tight text-[#17324f]">{SITE_CONFIG.name}</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6a7483]"></p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 lg:flex">
            {isAuthenticated ? (
              <>
                <Link href="/create/mediaDistribution" className="mr-2 rounded-md bg-[#1e4f7f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173e63]">
                  CREATE TASK
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="mr-3 rounded-md border border-[#d5deea] bg-white px-5 py-3 text-sm font-semibold text-[#17324f] transition hover:bg-[#f4f7fb]"
                >
                  SIGN OUT
                </button>
              </>
            ) : (
              <Link href="/login" className="mr-3 rounded-md bg-[#ff315b] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#e42b52]">
                SEND PRESS RELEASE
              </Link>
            )}
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'rounded px-3 py-2 text-[15px] font-medium transition-colors',
                    isActive ? 'text-[#0f3f78]' : 'text-[#17324f] hover:text-[#0f3f78]'
                  )}
                >
                  <span className="inline-flex items-center gap-1">
                    {link.label}
                    {link.label === 'Services' ? <ChevronDown className="h-3.5 w-3.5" /> : null}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Right side: search + CTA */}
          <div className="flex shrink-0 items-center gap-3">
            {/* Mobile menu toggle */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#17324f] transition-colors hover:bg-[#f1f4f8] hover:text-[#0f3f78] lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-[#e8edf4] bg-white lg:hidden">
            <div className="space-y-1 px-4 py-3">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/create/mediaDistribution"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mb-2 block rounded-md bg-[#1e4f7f] px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#173e63]"
                  >
                    CREATE TASK
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      logout()
                      setIsMobileMenuOpen(false)
                    }}
                    className="mb-2 block w-full rounded-md border border-[#d5deea] bg-white px-5 py-2.5 text-center text-sm font-semibold text-[#17324f] hover:bg-[#f4f7fb]"
                  >
                    SIGN OUT
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mb-2 block rounded-md bg-[#ff315b] px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#e42b52]"
                >
                  SEND PRESS RELEASE
                </Link>
              )}
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-[#eef4fb] text-[#0f3f78]'
                        : 'text-[#17324f] hover:bg-[#f5f7fa] hover:text-[#0f3f78]'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
