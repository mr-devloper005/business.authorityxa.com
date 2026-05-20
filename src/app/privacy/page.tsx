import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'Information We Collect',
    body: 'We collect account details, submission content, and interaction data needed to operate and improve the press distribution experience.',
  },
  {
    title: 'How We Use Information',
    body: 'Data is used to provide account access, process releases, support targeting features, maintain security, and improve service performance.',
  },
  {
    title: 'Sharing & Disclosure',
    body: 'We do not sell your personal data. Information may be shared with trusted service providers or legal authorities when required.',
  },
  {
    title: 'Your Controls',
    body: 'You can request profile updates, manage communication preferences, and contact support for account-related privacy requests.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#efefef] text-[#17324f]">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(120deg,#133a64,#1d4e7c)] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <h1 className="text-5xl font-bold uppercase tracking-tight sm:text-6xl">Privacy Policy</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">How {SITE_CONFIG.name} handles, protects, and uses your information.</p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <article className="rounded-md border border-[#d2d8e0] bg-white p-8 shadow-[0_14px_30px_rgba(16,44,82,0.08)]">
              <p className="text-xs uppercase tracking-[0.14em] text-[#68788d]"></p>
              <div className="mt-6 space-y-4">
                {sections.map((section) => (
                  <section key={section.title} className="rounded-md border border-[#e1e7f0] bg-[#f7f9fc] p-5">
                    <h2 className="text-xl font-bold uppercase text-[#1d4268]">{section.title}</h2>
                    <p className="mt-2 text-base leading-8 text-[#42566f]">{section.body}</p>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
