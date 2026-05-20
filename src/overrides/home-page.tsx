import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { ContentImage } from '@/components/shared/content-image'
import { ArrowRight, Database, Globe2, Languages, Newspaper } from 'lucide-react'
import { PressReleasesGrid } from '@/overrides/press-releases-grid'

export const HOME_PAGE_OVERRIDE_ENABLED = true

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 16, { fresh: true })
  const featured = posts[0]
  const pressReleaseFeed = posts.slice(0, 12).map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    image: String((post.content as any)?.coverImage || post.media?.[0]?.url || '/images/home/hero-press-release.jpg'),
  }))
  const clients = ['Defra', 'Ryanair', 'Sotheby’s', 'Honda', 'Nikon', 'Etihad', 'SAS', 'Pirelli', 'Bank of China', 'BT', 'Jaguar', 'Lavazza']
  const sectors = ['Accounting', 'Advertising', 'Agriculture', 'Aviation', 'Banking', 'Biotech', 'Construction', 'Consumer Goods', 'Design', 'E-Commerce', 'Education', 'Energy', 'Finance', 'Healthcare', 'Hospitality', 'Insurance', 'Internet', 'Investment', 'Law', 'Logistics', 'Manufacturing', 'Media', 'Payments', 'Pharmaceuticals', 'Public Relations', 'Retail', 'SaaS', 'Security', 'Technology', 'Telecom', 'Travel', 'Utilities', 'Video Games', 'Web Design']

  return (
    <div className="min-h-screen bg-[#efefef] text-[#102f4f]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden">
          <div className="relative h-[620px] sm:h-[680px]">
            <ContentImage src={String((featured?.content as any)?.coverImage || featured?.media?.[0]?.url || '/images/home/hero-press-release.jpg')} alt={featured?.title || 'Newswire Distribution'} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/48" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(23,50,79,0.32),transparent_55%)]" />
            <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
              <div className="animate-[fadeUp_.6s_ease]">
                <p className="text-6xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-7xl md:text-8xl">
                  Industry-Leading
                  <br />
                  Newswire
                </p>
                <p className="mt-4 text-5xl font-black uppercase tracking-[-0.03em] text-[#ffcc00] sm:text-6xl">Distribution</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e2e2e2] bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-9 sm:px-6 lg:px-8 lg:justify-between">
            {['Thomson Reuters', 'Press Association', 'Acquire Media', 'Comtex'].map((name) => (
              <div key={name} className="text-center text-lg font-semibold tracking-wide text-[#5f6977]">{name}</div>
            ))}
          </div>
        </section>

        <section className="bg-[#efefef] py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-5xl font-bold uppercase tracking-tight text-[#20466d]">Services</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Database, title: 'Media Contact Database', text: 'Distribute press releases to relevant media with our large contact network.' },
                { icon: Globe2, title: 'Online Syndication', text: 'Amplify your releases through online partners, search, and news channels.' },
                { icon: Languages, title: 'Translate & Target', text: 'Adapt releases for multilingual audiences and targeted regional circuits.' },
                { icon: Newspaper, title: 'Media Monitoring', text: 'Track online, print, and broadcast mentions with cleaner reporting.' },
              ].map((item, index) => (
                <article key={item.title} className={`rounded-md border bg-[#efefef] p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(10,34,64,0.12)] ${index === 0 ? 'border-[#ff345f]' : 'border-[#cfcfcf]'}`}>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#20466d]">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-3xl font-bold uppercase leading-tight text-[#183a5f]">{item.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-[#3f4f61]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#efefef] pb-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-5xl font-bold uppercase tracking-tight text-[#20466d]">Coverage</h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative overflow-hidden">
                <ContentImage src="/home.png" alt="Coverage" intrinsicWidth={1200} intrinsicHeight={760} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 border-[10px] border-[#ff315b]/65" />
              </div>
              <div className="space-y-6 text-lg leading-9 text-[#1f2f43]">
                <div><span className="font-bold uppercase text-[#183a5f]">Global</span><p>Distribution and syndication across major countries and vertical industries.</p></div>
                <div><span className="font-bold uppercase text-[#183a5f]">North America</span><p>Comprehensive release delivery to national and local media circuits.</p></div>
                <div><span className="font-bold uppercase text-[#183a5f]">Europe</span><p>Coverage across European news agencies, financial desks, and publishers.</p></div>
                <Link href="/register" className="inline-flex items-center gap-2 rounded-md bg-[#27495f] px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#1f3d50]">
                  Start Release Distribution
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef] pb-18">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8">
            <div>
              <h2 className="text-5xl font-bold uppercase tracking-tight text-[#1e4369]">Sectors We Cover</h2>
              <p className="mt-5 text-lg leading-9 text-[#2a3f58]">Reach targeted media contacts across specialized industries and audiences.</p>
              <div className="mt-6 grid grid-cols-2 gap-x-12 gap-y-2 text-lg text-[#233952] sm:grid-cols-3">
                {sectors.map((sector) => <p key={sector}>{sector}</p>)}
              </div>
            </div>
            <div className="space-y-5">
              <div className="overflow-hidden bg-[#f6f6f6] p-3">
                <ContentImage src="/sector.png" alt="Sector coverage" intrinsicWidth={1100} intrinsicHeight={700} className="h-full w-full object-cover" />
              </div>
              <div className="bg-[#e8e8e8] p-8">
                <h3 className="text-4xl font-bold uppercase leading-tight text-[#1d4267]">Press Association Newswire Distribution</h3>
                <p className="mt-4 border-l-4 border-[#ff315b] pl-4 text-lg leading-8 text-[#1f3148]">Releases are pushed into trusted international wire systems used by newsrooms and corporate communications teams.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef] pb-18">
          <div className="mx-auto max-w-5xl bg-[#e7e7e7] px-8 py-12 text-center sm:px-12">
            <h2 className="text-5xl font-bold uppercase tracking-tight text-[#1e436a]">Trusted by Newswires</h2>
            <p className="mx-auto mt-5 max-w-4xl border-l-4 border-[#ff315b] pl-4 text-left text-lg leading-8 text-[#1f324a]">Upload text and HTML releases with our proprietary workflow and distribute instantly to newsrooms, banks, communications departments and agencies globally.</p>
          </div>
        </section>

        <PressReleasesGrid items={pressReleaseFeed} />

        {/* <section className="bg-[#efefef] pb-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold uppercase tracking-tight text-[#1e436a]"></h2>
            <div className="mt-6 grid grid-cols-2 overflow-hidden border border-[#c8c8c8] bg-white sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {clients.map((item) => (
                <div key={item} className="flex h-28 items-center justify-center border border-[#d7d7d7] text-center text-base font-semibold text-[#6d737d]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  )
}
