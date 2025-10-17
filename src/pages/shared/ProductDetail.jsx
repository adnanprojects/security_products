import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mockApi from '../../services/mockApi'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'

export default function ProductDetail() {
  const { id } = useParams()
  const [p, setP] = useState(null)
  const [message, setMessage] = useState('')
  const [queries, setQueries] = useState([])

  useEffect(() => {
    mockApi.getProduct(id).then(setP)
    mockApi.getQueries().then((all) => setQueries(all.filter((q) => q.productId === id)))
  }, [id])

  async function submitQuery(e) {
    e.preventDefault()
    const q = { id: 'q' + Date.now(), productId: id, from: 'guest', message, status: 'open' }
    await mockApi.addQuery(q)
    setQueries((s) => [q, ...s])
    setMessage('')
  }

  if (!p) return <div>Loading...</div>

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{p.name}</h1>
        <div className="text-sm text-[var(--color-muted)]">{p.status}</div>
      </div>

      <Card>
        <p>{p.summary}</p>
        <div className="mt-4">
          <h4 className="font-medium mb-2">Queries</h4>

          <form onSubmit={submitQuery} className="space-y-2">
            <Input label="Message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask about integration..." />
            <Button type="submit">Submit Query</Button>
          </form>

          <div className="mt-4 space-y-2">
            {queries.length === 0 && <div className="text-sm text-[var(--color-muted)]">No queries yet.</div>}
            {queries.map((q) => (
              <div key={q.id} className="bg-gray-50 p-3 rounded">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">{q.from}</div>
                  <div className="text-xs text-[var(--color-muted)]">{q.status}</div>
                </div>
                <div className="mt-1 text-sm">{q.message}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
