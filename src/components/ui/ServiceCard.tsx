import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

type ServiceCardProps = { title: string; description: string; icon: LucideIcon; index: number }

export function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return <article className="group flex h-full flex-col rounded-xl border border-white/10 bg-axr-navy/70 p-6 transition-colors hover:border-axr-interactive/45 sm:p-7"><div className="flex items-start justify-between gap-4"><span className="flex size-12 items-center justify-center rounded-lg border border-axr-interactive/25 bg-axr-blue/10 text-axr-interactive"><Icon size={23} strokeWidth={1.8} aria-hidden="true" /></span><span className="text-xs font-medium tracking-[0.16em] text-axr-muted">0{index + 1}</span></div><h3 className="mt-8 text-xl font-semibold leading-snug tracking-tight text-white">{title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-axr-muted">{description}</p><Link to="/servicos" aria-label={`Conhecer o serviço: ${title}`} className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-axr-interactive transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-axr-interactive">Saiba mais <ArrowUpRight size={16} aria-hidden="true" /></Link></article>
}
