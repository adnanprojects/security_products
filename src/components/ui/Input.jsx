import React from 'react'

export default function Input({ label, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm text-[var(--color-muted)]">{label}</label>}
      <input {...props} className="border border-[var(--color-border)] rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-primary)] outline-none" />
    </div>
  )
}
