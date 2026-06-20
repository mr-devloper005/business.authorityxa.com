'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ContentImage } from '@/components/shared/content-image'

type PressReleaseItem = {
  id: string
  slug: string
  title: string
  image: string
}

function shortTitle(value: string) {
  return value.length > 96 ? value.slice(0, 93).trimEnd() + '...' : value
}

export function PressReleasesGrid({ items }: { items: PressReleaseItem[] }) {
  const [visibleCount, setVisibleCount] = useState(3)
  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount])
  const canLoadMore = visibleCount < items.length

  return (
    <section className="bg-[#efefef] pb-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-5xl font-bold uppercase tracking-tight text-[#1e436a]">Press Releases</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {visibleItems.map((post) => (
            <article key={post.id} className="group">
              <div className="relative h-52 overflow-hidden">
                <ContentImage src={post.image} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-4 text-xl font-bold uppercase leading-7 text-[#1f3f62]">{shortTitle(post.title)}</h3>
              <Link href={`/press-releases/${post.slug}`} className="mt-2 inline-flex text-sm font-semibold text-[#1f5ea6] hover:text-[#173f74]">
                Read more
              </Link>
            </article>
          ))}
        </div>

        {canLoadMore ? (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + 3)}
              className="rounded-md bg-[#27495f] px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#1f3d50]"
            >
              Load more
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
