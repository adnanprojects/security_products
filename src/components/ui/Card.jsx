import React from 'react'

export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-[var(--color-surface)] p-4 rounded-[var(--radius-md)] shadow-md ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  )
}
