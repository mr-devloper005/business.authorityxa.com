import Link from 'next/link'
import { BriefcaseBusiness, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#efefef] text-[#17324f]">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(120deg,#133a64,#1d4e7c)] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <h1 className="text-5xl font-bold uppercase tracking-tight sm:text-6xl">Careers</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
              Build the future of press release distribution with {SITE_CONFIG.name}.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <article className="rounded-md border border-[#d2d8e0] bg-white p-8 shadow-[0_14px_30px_rgba(16,44,82,0.08)]">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#edf4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#1e4f7f]">
                <BriefcaseBusiness className="h-4 w-4" />
                Hiring Status
              </div>
              <h2 className="mt-4 text-4xl font-bold uppercase text-[#1d4268]">We&rsquo;re not hiring right now</h2>
              <p className="mt-4 text-base leading-8 text-[#41566f]">
                There are no open roles currently. We update this page whenever new opportunities are available across product, engineering, and operations.
              </p>
              <p className="mt-3 text-base leading-8 text-[#41566f]">
                If you want to work with us in the future, please contact us and share your details.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#ff315b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#e52c53]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
