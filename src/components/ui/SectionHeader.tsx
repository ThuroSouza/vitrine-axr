type SectionHeaderProps = { title: string; description?: string }

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return <div className="max-w-3xl"><h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">{title}</h2>{description && <p className="mt-5 max-w-[65ch] text-pretty text-base leading-8 text-axr-muted sm:text-lg">{description}</p>}</div>
}
