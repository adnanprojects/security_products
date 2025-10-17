// Simple in-memory mock API to simulate auth, products and queries
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

let users = [
  { id: 'u1', name: 'Alice', email: 'alice@example.com', role: 'user' },
  { id: 'u2', name: 'Bob', email: 'bob@example.com', role: 'product-admin' },
  { id: 'u3', name: 'Carol', email: 'carol@example.com', role: 'admin' }
]

let products = [
  { id: 'p1', name: 'SecureFileVault', category: 'Encryption', status: 'active', summary: 'File encryption and DRM' },
  { id: 'p2', name: 'QueryShield', category: 'DLP', status: 'beta', summary: 'Query and log management' }
]

let queries = [
  { id: 'q1', productId: 'p1', from: 'alice@example.com', message: 'How to integrate with SSO?', status: 'open' }
]

const mockApi = {
  login: async (email, password) => {
    await sleep(300)
    const u = users.find((x) => x.email === email)
    if (!u) return { error: 'User not found. Try alice@example.com / bob@example.com / carol@example.com' }
    return { user: u }
  },
  getProducts: async () => {
    await sleep(200)
    return products
  },
  getProduct: async (id) => {
    await sleep(120)
    return products.find((p) => p.id === id)
  },
  addProduct: async (product) => {
    products.push(product)
    return product
  },
  getUsers: async () => {
    await sleep(200)
    return users
  },
  createUser: async (u) => {
    users.push(u)
    return u
  },
  deleteUser: async (id) => {
    users = users.filter((x) => x.id !== id)
    return { ok: true }
  },
  getQueries: async () => {
    await sleep(200)
    return queries
  },
  addQuery: async (q) => {
    queries.push(q)
    return q
  }
}

export default mockApi
