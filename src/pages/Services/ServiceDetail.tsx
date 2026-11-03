import type { LucideIcon } from 'lucide-react'

type ServiceDetailProps = {
  id: string
  number: string
  title: string
  description: string
  detail: string
  icon: LucideIcon
  possibilities?: readonly string[]
  note?: string
}

export function ServiceDetail({ id, number, title, description, detail, icon: Icon, possibilities, note }: ServiceDetailProps) {
  return (
    <article id={id} className="scroll-mt-8 grid gap-8 border-t border-white/10 py-10 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        <div className="flex items-center gap-4 text-axr-interactive">
          <span className="flex size-12 items-center justify-center rounded-xl border border-axr-interactive/25 bg-axr-blue/10"><Icon size={23} strokeWidth={1.8} aria-hidden="true" /></span>
          <span className="text-xs font-semibold tracking-[0.2em]">{number} / 05</span>
        </div>
        <h3 className="mt-6 max-w-md text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">{title}</h3>
      </div>
      <div>
        <p className="max-w-xl text-base leading-8 text-axr-white">{description}</p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-axr-muted">{detail}</p>
        {possibilities && <ul className="mt-7 grid gap-2 sm:grid-cols-2">{possibilities.map((possibility) => <li key={possibility} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-axr-white"><span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-axr-interactive" />{possibility}</li>)}</ul>}
        {note && <p className="mt-5 max-w-xl border-l-2 border-axr-interactive/70 pl-4 text-xs leading-6 text-axr-muted">{note}</p>}
      </div>
    </article>
  )
}
