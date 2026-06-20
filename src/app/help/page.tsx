import Link from 'next/link'
import { ArrowRight, LifeBuoy, Megaphone, SearchCheck, ShieldCheck } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const faqs = [
  {
    q: 'How quickly is a press release published?',
    a: 'Most submissions are processed quickly after review. Timing can vary based on content completeness and distribution settings.',
  },
  {
    q: 'Can I target releases by sector or geography?',
    a: 'Yes. You can target releases by relevant sectors and regional distribution circuits based on your campaign goals.',
  },
  {
    q: 'Where can I manage my submitted releases?',
    a: 'After sign in, use your account dashboard and create-task flow to submit, review, and manage release details.',
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#efefef] text-[#17324f]">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(120deg,#133a64,#1d4e7c)] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <h1 className="text-5xl font-bold uppercase tracking-tight sm:text-6xl">Help Center</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">Get quick guidance on submissions, distribution, and account workflows on {SITE_CONFIG.name}.</p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: Megaphone, title: 'Release Submission', text: 'How to prepare and submit a complete press release package.' },
                { icon: SearchCheck, title: 'Distribution & Tracking', text: 'Understand reach, targeting, and performance visibility.' },
                { icon: ShieldCheck, title: 'Account & Security', text: 'Manage your access, credentials, and account safety.' },
              ].map((item) => (
                <article key={item.title} className="rounded-md border border-[#d2d8e0] bg-white p-7 shadow-[0_12px_24px_rgba(13,40,73,0.07)]">
                  <item.icon className="h-6 w-6 text-[#1e4f7f]" />
                  <h2 className="mt-4 text-2xl font-bold uppercase text-[#1d4268]">{item.title}</h2>
                  <p className="mt-3 text-base leading-8 text-[#3f536b]">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-md border border-[#d2d8e0] bg-white p-8 shadow-[0_12px_24px_rgba(13,40,73,0.07)]">
              <h2 className="text-3xl font-bold uppercase text-[#1d4268]">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-4">
                {faqs.map((item) => (
                  <article key={item.q} className="rounded-md border border-[#e1e7f0] bg-[#f7f9fc] p-5">
                    <h3 className="text-lg font-semibold text-[#17324f]">{item.q}</h3>
                    <p className="mt-2 text-base leading-8 text-[#41566f]">{item.a}</p>
                  </article>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#ff315b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#e52c53]">
                  <LifeBuoy className="h-4 w-4" />
                  Contact Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
