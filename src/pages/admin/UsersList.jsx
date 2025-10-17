import React, { useEffect, useState } from 'react'
import mockApi from '../../services/mockApi'
import { Link } from 'react-router-dom'
import Card from '../../components/ui/Card'

export default function UsersList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    mockApi.getUsers().then(setUsers)
  }, [])

  async function remove(id) {
    await mockApi.deleteUser(id)
    setUsers((s) => s.filter((u) => u.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <Link to="/admin/users/create" className="px-3 py-1 bg-[var(--color-primary)] text-white rounded-[var(--radius-sm)]">Create User</Link>
      </div>

      <div className="space-y-2">
        {users.map((u) => (
          <div key={u.id} className="bg-[var(--color-surface)] p-3 rounded-[var(--radius-md)] shadow-md flex justify-between items-center">
            <div>
              <div className="font-medium">{u.name}</div>
              <div className="text-sm text-[var(--color-muted)]">{u.email} • {u.role}</div>
            </div>
            <div className="flex gap-2">
              <button className="px-2 py-1 border rounded">Edit</button>
              <button onClick={() => remove(u.id)} className="px-2 py-1 border rounded text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
