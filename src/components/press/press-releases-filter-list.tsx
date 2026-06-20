'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

type ReleaseItem = {
  id: string
  slug: string
  title: string
  summary: string
  category: string
}

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full release for complete details.'
  return value.length > 220 ? value.slice(0, 217).trimEnd() + '...' : value
}

export function PressReleasesFilterList({ items }: { items: ReleaseItem[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = useMemo(() => {
    const predefined = CATEGORY_OPTIONS.map((option) => option.name)
    const existing = Array.from(new Set(items.map((item) => item.category).filter(Boolean)))
    const existingSet = new Set(predefined.map((name) => name.toLowerCase()))
    const dynamic = existing.filter((name) => !existingSet.has(name.toLowerCase()))
    return ['All', ...predefined, ...dynamic]
  }, [items])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => {
      const categoryMatch =
        category === 'All' ||
        normalizeCategory(item.category || '') === normalizeCategory(category)
      const queryMatch = !q || item.title.toLowerCase().includes(q) || item.summary.toLowerCase().includes(q)
      return categoryMatch && queryMatch
    })
  }, [items, query, category])

  return (
    <>
      <div className="mb-5 grid gap-4 rounded-md border border-[#d2d8e0] bg-white p-4 md:grid-cols-[1fr_260px]">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title or description"
          className="h-11 w-full rounded-md border border-[#d7dfe8] bg-[#f7f9fc] px-4 text-sm outline-none focus:border-[#1e4f7f]"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="h-11 w-full rounded-md border border-[#d7dfe8] bg-[#f7f9fc] px-3 text-sm outline-none focus:border-[#1e4f7f]"
        >
          {categories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-3xl font-bold uppercase text-[#1e436a]">All Releases</h2>
        <span className="text-sm text-[#5d6a7b]">{filtered.length} matching posts</span>
      </div>

      <div className="max-h-[78vh] space-y-4 overflow-y-auto pr-2">
        {filtered.map((post) => (
          <Link key={post.id} href={`/press-releases/${post.slug}`} className="block rounded-md border border-[#d2d8e0] bg-white p-4 shadow-[0_8px_24px_rgba(15,41,75,0.07)] transition hover:border-[#9fb3ca] hover:shadow-[0_12px_28px_rgba(15,41,75,0.1)]">
            <article>
              <h3 className="text-2xl font-bold uppercase leading-8 text-[#1c3f66]">{post.title}</h3>
              <p className="mt-3 text-base leading-8 text-[#43556b]">{excerpt(post.summary)}</p>
            </article>
          </Link>
        ))}
      </div>
    </>
  )
}
