import React from 'react'
import clsx from 'clsx'


export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 px-4 py-2'
  const styles = {
    primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-sm',
    secondary: 'bg-[var(--color-secondary)] text-white hover:opacity-90',
    outline: 'border border-[var(--color-border)] text-[var(--color-text)] hover:bg-gray-50',
    danger: 'bg-[var(--color-error)] text-white hover:bg-red-700'
  }
  return (
    <button {...props} className={clsx(base, styles[variant], className)}>
      {children}
    </button>
  )
}
