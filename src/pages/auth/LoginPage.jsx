import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/auth'
import mockApi from '../../services/mockApi'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState(null)
  const navigate = useNavigate()
  const { login } = useAuthStore()

  async function submit(e) {
    e.preventDefault()
    setErr(null)
    const res = await mockApi.login(email, password)
    if (res.error) return setErr(res.error)
    login(res.user)
    navigate(`/${res.user.role}`)
  }

  return (
    <div className="max-w-md mx-auto bg-[var(--color-surface)] p-6 rounded-[var(--radius-md)] shadow-md">
      <h2 className="text-xl font-semibold mb-4">Sign in</h2>
      {err && <div className="text-red-600 mb-2">{err}</div>}
      <form onSubmit={submit} className="space-y-3">
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="alice@example.com" />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="(demo - password not required)" />
        <Button type="submit">Login</Button>
      </form>
      <div className="mt-4 text-sm text-[var(--color-muted)]">
        Demo accounts: alice@example.com (user), bob@example.com (product-admin), carol@example.com (admin)
      </div>
    </div>
  )
}
