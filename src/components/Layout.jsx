import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../stores/auth'

export default function Layout({ children }) {
  const { user, logout } = useAuthStore()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">SecuProducts</Link>
          <nav className="flex items-center gap-3">
            <Link to="/products" className="text-sm">Products</Link>
            {!user && <Link to="/login" className="text-sm">Login</Link>}
            {user && (
              <>
                <Link to={`/${user.role}`} className="text-sm">Dashboard</Link>
                <span className="text-sm">Hi, {user.name}</span>
                <button className="text-sm underline" onClick={() => logout()}>Logout</button>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>

      <footer className="bg-white border-t py-4 mt-auto">
        <div className="container mx-auto text-sm text-center">© {new Date().getFullYear()} SecuProducts</div>
      </footer>
    </div>
  )
}
