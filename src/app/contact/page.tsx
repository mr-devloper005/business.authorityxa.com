import type { Metadata } from 'next'
import { Send } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/contact',
    title: `Contact ${SITE_CONFIG.name}`,
    description: `Get in touch with ${SITE_CONFIG.name} for distribution support and partnership inquiries.`,
    keywords: ['contact', 'support', 'press release services', SITE_CONFIG.name],
  })
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#efefef] text-[#17324f]">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(120deg,#123963,#1d4d7b)] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <h1 className="text-5xl font-bold uppercase tracking-tight sm:text-6xl">Contact Us</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">Talk to our team about press release distribution, campaign support, and media partnerships.</p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <article className="rounded-md bg-[linear-gradient(135deg,#153b65,#1e507f)] p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Reach Our Team</p>
                <h2 className="mt-4 text-4xl font-bold uppercase">We’re here to help</h2>
                <p className="mt-4 text-base leading-8 text-white/85">Share your requirements and our specialists will get back with the right distribution plan.</p>
                <div className="mt-7 space-y-3 text-sm text-white/90">
                  <p>Support window: 24/7</p>
                  <p>Primary response time: within 1 business day</p>
                </div>
              </article>

              <article className="rounded-md border border-[#d2d8e0] bg-white p-8 shadow-[0_14px_30px_rgba(16,44,82,0.08)]">
                <h2 className="text-3xl font-bold uppercase text-[#17324f]">Send a message</h2>
                <form className="mt-6 space-y-4">
                  <input type="text" required className="h-12 w-full rounded-md border border-[#d7dfe8] bg-[#f7f9fc] px-4 text-sm outline-none focus:border-[#1e4f7f]" placeholder="Full name" />
                  <input type="email" required className="h-12 w-full rounded-md border border-[#d7dfe8] bg-[#f7f9fc] px-4 text-sm outline-none focus:border-[#1e4f7f]" placeholder="Work email" />
                  <input type="text" required className="h-12 w-full rounded-md border border-[#d7dfe8] bg-[#f7f9fc] px-4 text-sm outline-none focus:border-[#1e4f7f]" placeholder="Company" />
                  <input type="text" required className="h-12 w-full rounded-md border border-[#d7dfe8] bg-[#f7f9fc] px-4 text-sm outline-none focus:border-[#1e4f7f]" placeholder="Subject" />
                  <textarea required rows={6} className="w-full rounded-md border border-[#d7dfe8] bg-[#f7f9fc] px-4 py-3 text-sm outline-none focus:border-[#1e4f7f]" placeholder="Tell us what you need..." />
                  <button type="submit" className="inline-flex h-12 items-center gap-2 rounded-md bg-[#ff315b] px-7 text-sm font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#e52c53]">
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
