import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../stores/auth'

export default function ProtectedRoute({ allowedRoles = [] }) {
  const { user } = useAuthStore()
  if (!user) return <Navigate to="/login" replace />
  if (allowedRoles.length && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />
  return <Outlet />
}