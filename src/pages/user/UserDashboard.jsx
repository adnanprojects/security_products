import React from 'react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'

export default function UserDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="My Subscriptions">
          <p className="text-sm text-[var(--color-muted)]">Active products and plans</p>
        </Card>
        <Card title="My Queries">
          <p className="text-sm text-[var(--color-muted)]">Track support queries and responses</p>
        </Card>
        <Card title="Quick Actions">
          <div className="flex flex-col gap-2">
            <Button as="a">Request Demo</Button>
            <Link to="/products" className="text-sm text-[var(--color-primary)] underline">Browse Products</Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
