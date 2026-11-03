import { FolderOpen } from 'lucide-react'

type PortfolioEmptyStateProps = { filtered?: boolean }

export function PortfolioEmptyState({ filtered = false }: PortfolioEmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-white/15 bg-axr-navy/35 px-6 py-12 text-center sm:px-10 sm:py-16">
      <div className="mx-auto flex size-14 items-center justify-center rounded-xl border border-white/10 bg-axr-blue/10 text-axr-interactive"><FolderOpen size={24} strokeWidth={1.7} aria-hidden="true" /></div>
      <h3 className="mt-6 text-xl font-semibold text-white">{filtered ? 'Nenhum projeto nesta categoria' : 'Nenhum projeto publicado ainda'}</h3>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-axr-muted">{filtered ? 'Selecione outra categoria para explorar os projetos disponíveis.' : 'Os cases serão exibidos aqui quando estiverem cadastrados e liberados para apresentação pública.'}</p>
    </div>
  )
}
