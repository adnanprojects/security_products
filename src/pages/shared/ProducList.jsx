import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import mockApi from '../../services/mockApi'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'

export default function ProductsList() {
  const [list, setList] = useState([])
  useEffect(() => {
    mockApi.getProducts().then(setList)
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Products</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((p) => (
          <Link key={p.id} to={'/products/' + p.id} className="block">
            <Card>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{p.category}</p>
                  <p className="mt-2 text-[var(--color-text)]">{p.summary}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge label={p.status} variant={p.status === 'active' ? 'success' : 'warning'} />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
