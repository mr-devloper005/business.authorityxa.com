import { Globe2, Megaphone } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { RegisterForm } from '@/components/auth/register-form'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#efefef] text-[#17324f]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-md bg-[linear-gradient(135deg,#0f345a,#1d4e7b)] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Publisher Onboarding</p>
            <h1 className="mt-4 text-5xl font-bold uppercase leading-tight">Create your newsroom account</h1>
            <p className="mt-4 text-base leading-8 text-white/85">Open your {SITE_CONFIG.name} account to submit press releases, target sectors, and track media pickup.</p>
            <div className="mt-8 grid gap-3">
              <div className="flex items-start gap-3 rounded-md border border-white/20 bg-white/10 p-4 text-sm leading-7"><Globe2 className="mt-1 h-5 w-5 shrink-0 text-[#9fceff]" />Global and regional distribution circuits.</div>
              <div className="flex items-start gap-3 rounded-md border border-white/20 bg-white/10 p-4 text-sm leading-7"><Megaphone className="mt-1 h-5 w-5 shrink-0 text-[#9fceff]" />One workflow to publish across all your announcements.</div>
            </div>
          </div>
          <RegisterForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}
