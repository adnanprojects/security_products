import React from 'react'
import clsx from 'clsx'

export default function Badge({ label, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-gray-200 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800'
  }
  return <span className={clsx('text-xs font-medium px-2 py-1 rounded-full', variants[variant], className)}>{label}</span>
}
