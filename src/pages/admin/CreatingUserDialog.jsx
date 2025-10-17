import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import mockApi from '../../services/mockApi'
import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

export default function CreateUserDialog() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('user')
  const navigate = useNavigate()

  async function submit(e) {
    e.preventDefault()
    const newUser = { id: 'u' + Date.now(), name, email, role }
    await mockApi.createUser(newUser)
    navigate('/admin/users')
  }

  return (
    <Card>
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-3">Create User</h2>
        <form onSubmit={submit} className="space-y-3">
          <Input label="Full name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Select label="Role" value={role} onChange={(e) => setRole(e.target.value)} options={[
            { value: 'user', label: 'User' },
            { value: 'product-admin', label: 'Product Admin' },
            { value: 'admin', label: 'Admin' }
          ]} />
          <div className="flex gap-2">
            <Button type="submit">Create</Button>
            <Button variant="outline" onClick={() => navigate('/admin/users')}>Cancel</Button>
          </div>
        </form>
      </div>
    </Card>
  )
}
