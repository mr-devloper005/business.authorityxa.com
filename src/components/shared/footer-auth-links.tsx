'use client'

import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'

export function FooterAuthLinks() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) return null

  return (
    <>
      <Link href="/login" className="hover:text-white">Login</Link>
      <Link href="/register" className="hover:text-white">Sign up </Link>
    </>
  )
}
