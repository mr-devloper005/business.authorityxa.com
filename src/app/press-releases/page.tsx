import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { fetchTaskPosts } from '@/lib/task-data'
import { PressReleasesFilterList } from '@/components/press/press-releases-filter-list'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/press-releases',
    title: `Press Releases - ${SITE_CONFIG.name}`,
    description: `Browse all press releases published on ${SITE_CONFIG.name}.`,
    keywords: ['press releases', 'media distribution', 'announcements', SITE_CONFIG.name],
  })
}

export default async function PressReleasesPage() {
  const posts = await fetchTaskPosts('mediaDistribution', 120, { allowMockFallback: false, fresh: false, revalidate: 120 })
  const items = posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    summary: post.summary || '',
    category:
      (typeof (post.content as any)?.category === 'string' && (post.content as any).category.trim()) ||
      (Array.isArray(post.tags) && post.tags.find((tag) => typeof tag === 'string')) ||
      'General',
  }))

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Press Releases',
      description: `All releases from ${SITE_CONFIG.name}`,
      url: `${SITE_CONFIG.baseUrl}/press-releases`,
    },
  ]

  return (
    <div className="min-h-screen bg-[#efefef] text-[#17324f]">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />
      <main>
        <section className="bg-[linear-gradient(120deg,#123963,#1d4d7b)] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-center text-5xl font-bold uppercase tracking-tight sm:text-6xl">All Press Releases</h1>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-white/90">Latest announcements, product updates, and corporate communications in one stream.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PressReleasesFilterList items={items} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
