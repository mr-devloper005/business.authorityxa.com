import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  { title: 'Account Usage', body: 'Keep your account secure and follow community guidelines.' },
  {
    title: 'Content Ownership',
    body: 'You own the content you publish and grant the platform a license to display it.',
  },
  { title: 'Acceptable Use', body: 'No spam, harassment, or illegal content.' },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#171717]">
      <NavbarShell />
      <main>
        <section className="bg-[#ea004f] text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
            <p className="mt-3 max-w-2xl text-white/90">The rules and guidelines for using {SITE_CONFIG.name}.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <Card className="border-[#ececec] bg-white">
            <CardContent className="space-y-4 p-6">
              <p className="text-xs text-[#666]">Last updated: March 16, 2026</p>
              {sections.map((section) => (
                <div key={section.title} className="rounded-lg border border-[#ececec] bg-[#fafafa] p-4">
                  <h3 className="text-sm font-semibold text-[#1c1c1c]">{section.title}</h3>
                  <p className="mt-2 text-sm text-[#5f5f5f]">{section.body}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  )
}
