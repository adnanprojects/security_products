import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/ui/Card'

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/admin/users"><Card>Manage Users</Card></Link>
        <Card>System Logs</Card>
        <Card>Settings</Card>
      </div>
    </div>
  )
}
