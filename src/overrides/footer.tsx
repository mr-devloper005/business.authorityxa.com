import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { FooterAuthLinks } from '@/components/shared/footer-auth-links'

export const FOOTER_OVERRIDE_ENABLED = true


export async function FooterOverride() {
  return (
    <footer className="border-t border-[#0b243a] bg-[linear-gradient(90deg,#0e2b45,#0d324f)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/favicon.png?v=20260520"
                alt={`${SITE_CONFIG.name} logo`}
                width="270"
                height="72"
                className="h-14 w-auto object-contain"
              />
              <div>
                <p className="text-3xl font-bold leading-tight text-white">{SITE_CONFIG.name}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60"></p>
              </div>
            </div>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/80">Newswire distribution and media visibility for global announcements.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">Company</p>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/90 md:grid-cols-3">
              <Link href="/contact" className="hover:text-white">Contact us </Link>
              <Link href="/about" className="hover:text-white">About us </Link>
              {/* <Link href="/create/mediaDistribution" className="hover:text-white">Task create page</Link> */}
              <FooterAuthLinks />
              <Link href="/careers" className="hover:text-white">Carrer</Link>
              <Link href="/search" className="hover:text-white">Search </Link>
              <Link href="/help" className="hover:text-white">Help</Link>
              <Link href="/terms" className="hover:text-white">Terms </Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-white/15 pt-5 text-sm text-white/70">&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
