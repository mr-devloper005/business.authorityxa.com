import { ShieldCheck, Timer } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { LoginForm } from '@/components/auth/login-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#efefef] text-[#17324f]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-md bg-[linear-gradient(135deg,#143963,#1e4f7f)] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Account Access</p>
            <h1 className="mt-4 text-5xl font-bold uppercase leading-tight">Sign in to {SITE_CONFIG.name}</h1>
            <p className="mt-4 text-base leading-8 text-white/85">Manage press releases, monitor distribution status, and publish updates from one dashboard.</p>
            <div className="mt-8 grid gap-3">
              {[
                { icon: ShieldCheck, text: 'Secure workspace for your releases and newsroom assets.' },
                { icon: Timer, text: 'Faster submission flow with saved profile and contacts.' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 rounded-md border border-white/20 bg-white/10 p-4 text-sm leading-7">
                  <item.icon className="mt-1 h-5 w-5 shrink-0 text-[#a9d9ff]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <LoginForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}
