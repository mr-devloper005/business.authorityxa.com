'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

export function LoginForm() {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setIsSuccess(false)
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.')
      return
    }
    try {
      await login(email.trim(), password)
      setIsSuccess(true)
    } catch {
      setError('Unable to sign in right now. Please try again.')
    }
  }

  return (
    <div className="rounded-md border border-[#d2d8e0] bg-white p-8 shadow-[0_14px_30px_rgba(16,44,82,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6c7786]">Welcome Back</p>
      <h2 className="mt-3 text-3xl font-bold uppercase text-[#17324f]">Log In</h2>
      <form className="mt-7 space-y-4" onSubmit={onSubmit}>
        <input className="h-12 w-full rounded-md border border-[#d7dfe8] bg-[#f7f9fc] px-4 text-sm outline-none focus:border-[#1e4f7f]" placeholder="Work email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input className="h-12 w-full rounded-md border border-[#d7dfe8] bg-[#f7f9fc] px-4 text-sm outline-none focus:border-[#1e4f7f]" placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type="submit" disabled={isLoading} className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#ff315b] px-6 text-sm font-semibold uppercase tracking-[0.06em] text-white hover:bg-[#e52c53] disabled:opacity-60">
          {isLoading ? 'Signing in...' : 'Sign in'}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
      {error ? <p className="mt-4 text-sm text-[#b42318]">{error}</p> : null}
      {isSuccess ? (
        <div className="mt-5 rounded-md border border-[#b6d6ff] bg-[#edf5ff] p-4">
          <p className="text-sm font-medium text-[#123963]">Login successful. You can start publishing now.</p>
          <button type="button" onClick={() => router.push('/create/mediaDistribution')} className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#1e4f7f] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.06em] text-white hover:bg-[#173e63]">
            Create Task
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}
      <div className="mt-5 flex items-center justify-between text-sm text-[#5e6b7d]">
        <Link href="/forgot-password" className="hover:text-[#17324f]">Forgot password?</Link>
        <Link href="/register" className="font-semibold text-[#1e4f7f] hover:text-[#17324f]">Create account</Link>
      </div>
    </div>
  )
}
