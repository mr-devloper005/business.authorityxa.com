import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe2, Newspaper, Target } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/about',
    title: `About ${SITE_CONFIG.name}`,
    description: `Learn how ${SITE_CONFIG.name} helps organizations distribute press releases globally.`,
    keywords: ['about', 'press release distribution', 'newswire', SITE_CONFIG.name],
  })
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#efefef] text-[#17324f]">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(120deg,#133a64,#1d4e7c)] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <h1 className="text-5xl font-bold uppercase tracking-tight sm:text-6xl">About {SITE_CONFIG.name}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-white/90">A global-first distribution platform built for modern press releases, announcements, and newsroom visibility.</p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: Newspaper, value: '10,000+', label: 'Releases distributed' },
                { icon: Globe2, value: '150+', label: 'Countries reached' },
                { icon: Target, value: '5,000+', label: 'Media endpoints' },
              ].map((item) => (
                <article key={item.label} className="rounded-md border border-[#d1d8e2] bg-white p-7 text-center shadow-[0_12px_24px_rgba(13,40,73,0.07)]">
                  <item.icon className="mx-auto h-7 w-7 text-[#1e4f7f]" />
                  <p className="mt-4 text-4xl font-bold text-[#17324f]">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[#627184]">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-md border border-[#d1d8e2] bg-white p-8">
                <h2 className="text-4xl font-bold uppercase text-[#1d4268]">Our Story</h2>
                <p className="mt-5 text-base leading-8 text-[#3f536b]">{SITE_CONFIG.name} was built to make press release distribution simpler, faster, and more reliable. We combine a structured submission flow with high-quality media routing so brands can reach the right audiences without operational friction.</p>
                <p className="mt-4 text-base leading-8 text-[#3f536b]">From product launches to financial updates, our system supports communication teams with better speed, clearer coverage, and scalable distribution options across sectors and geographies.</p>
              </article>
              <article className="rounded-md border border-[#d1d8e2] bg-white p-8">
                <h2 className="text-4xl font-bold uppercase text-[#1d4268]">What We Deliver</h2>
                <ul className="mt-5 space-y-3 text-base leading-8 text-[#3f536b]">
                  <li>- Targeted regional and global media circuits</li>
                  <li>- Sector-based audience and publication mapping</li>
                  <li>- Faster release publication and distribution windows</li>
                  <li>- Unified release archive and performance visibility</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#183f67] py-14 text-white">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold uppercase">Ready to distribute your next release?</h2>
            <p className="mt-3 text-lg text-white/90">Work with a platform designed for communication speed, accuracy, and reach.</p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#ff315b] px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#e52c53]">
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
