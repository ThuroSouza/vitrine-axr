import type { PropsWithChildren } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type PrimaryButtonProps = PropsWithChildren<{ to: string; variant?: 'solid' | 'outline'; className?: string }>

export function PrimaryButton({ to, variant = 'solid', className = '', children }: PrimaryButtonProps) {
  const colors = variant === 'solid' ? 'border-axr-blue bg-axr-blue text-white hover:border-axr-interactive hover:bg-axr-interactive' : 'border-white/20 bg-white/5 text-white hover:border-white/45 hover:bg-white/10'
  return <Link to={to} className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-axr-interactive ${colors} ${className}`}>{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>
}
