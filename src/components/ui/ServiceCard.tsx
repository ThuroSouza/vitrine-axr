import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

type ServiceCardProps = { id: string; title: string; description: string; icon: LucideIcon }

export function ServiceCard({ id, title, description, icon: Icon }: ServiceCardProps) {
  return <article className="group grid gap-4 border-b border-white/10 py-6 transition-colors first:border-t hover:border-axr-interactive/40 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:py-7">
    <span className="flex size-12 items-center justify-center rounded-xl border border-axr-interactive/20 bg-axr-blue/10 text-axr-interactive transition-colors group-hover:border-axr-interactive/50"><Icon size={23} strokeWidth={1.8} aria-hidden="true" /></span>
    <div className="min-w-0 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
      <h3 className="text-xl font-semibold leading-snug tracking-[-0.025em] text-white sm:text-2xl">{title}</h3>
      <p className="mt-2 max-w-xl text-base leading-7 text-axr-muted lg:mt-0">{description}</p>
    </div>
    <Link to={`/servicos#${id}`} aria-label={`Conhecer o serviço: ${title}`} className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-axr-interactive transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-axr-interactive">Saiba mais <ArrowUpRight size={16} aria-hidden="true" /></Link>
  </article>
}
