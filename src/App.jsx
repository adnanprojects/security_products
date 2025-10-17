import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import UserDashboard from './pages/user/UserDashboard'
import ProductAdminDashboard from './pages/productAdmin/ProductAdminDashboard'
import AdminDashboard from './pages/admin/AdminDashborad'
import ProductsList from './pages/shared/ProducList'
import ProductDetail from './pages/shared/ProductDetail'
import UsersList from './pages/admin/UsersList'
import CreateUserDialog from './pages/admin/CreatingUserDialog'
import { useAuthStore } from './stores/auth'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  const { user } = useAuthStore()

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={user ? `/${user.role}` : '/login'} replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Shared product routes (protected) */}
        <Route element={<ProtectedRoute allowedRoles={['user', 'product-admin', 'admin']} />}>
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>

        {/* User */}
        <Route element={<ProtectedRoute allowedRoles={['user']} />}>
          <Route path="/user" element={<UserDashboard />} />
        </Route>

        {/* Product Admin */}
        <Route element={<ProtectedRoute allowedRoles={['product-admin']} />}>
          <Route path="/product-admin" element={<ProductAdminDashboard />} />
        </Route>

        {/* Admin */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UsersList />} />
          <Route path="/admin/users/create" element={<CreateUserDialog />} />
        </Route>

        <Route path="*" element={<div className="p-6">Page not found</div>} />
      </Routes>
    </Layout>
  )
}
