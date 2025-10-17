import React from 'react'

export default function Select({ label, options = [], className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm text-[var(--color-muted)]">{label}</label>}
      <select {...props} className="border border-[var(--color-border)] rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-primary)] outline-none">
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}
