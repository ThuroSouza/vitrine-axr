type SectionHeaderProps = { eyebrow: string; title: string; description?: string }

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return <div className="max-w-3xl"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-axr-interactive">{eyebrow}</p><h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">{title}</h2>{description && <p className="mt-5 text-pretty text-base leading-8 text-axr-muted sm:text-lg">{description}</p>}</div>
}
