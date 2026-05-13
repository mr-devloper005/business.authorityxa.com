import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { title: 'Data We Collect', body: 'Account information, usage analytics, and content you submit.' },
  { title: 'How We Use Data', body: 'To personalize your experience, improve search, and keep the platform secure.' },
  { title: 'Your Choices', body: 'You can manage email preferences and delete your account at any time.' },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#171717]">
      <NavbarShell />
      <main>
        <section className="bg-[#ea004f] text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
            <p className="mt-3 max-w-2xl text-white/90">How we collect, use, and protect your information.</p>
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
