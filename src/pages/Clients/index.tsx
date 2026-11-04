import { useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../../components/layout/PageContainer'
import { PortfolioPreviewCard } from '../../components/ui/PortfolioPreviewCard'
import { portfolioPreviews } from '../../data/portfolioPreviews'

type CategoryFilter = 'Todos' | (typeof portfolioPreviews)[number]['category']

export function ClientsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Todos')
  const categories = [...new Set(portfolioPreviews.map((preview) => preview.category))]
  const visibleProjects = selectedCategory === 'Todos'
    ? portfolioPreviews
    : portfolioPreviews.filter((preview) => preview.category === selectedCategory)

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 py-16 sm:py-24">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_30%,rgba(23,37,84,0.48),transparent_48%)]" />
        <PageContainer>
          <div className="max-w-4xl">
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">Projetos e Soluções</h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-axr-muted sm:text-lg">Conheça quatro tipos de solução apresentados com identidades próprias. As telas abaixo são prévias ilustrativas, sem dados de clientes.</p>
            <a href="#portfolio" className="mt-9 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-axr-interactive hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive">Explorar portfólio <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </PageContainer>
      </section>

      <section id="portfolio" tabIndex={-1} className="scroll-mt-8 py-20 sm:py-28">
        <PageContainer>
          <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">Soluções em destaque</h2>
            <p className="text-sm text-axr-muted" aria-live="polite">{visibleProjects.length} {visibleProjects.length === 1 ? 'solução' : 'soluções'}</p>
          </div>

          <div className="mt-8" aria-label="Filtrar projetos por categoria">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-axr-muted">Categorias</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Categorias de projetos">
              {(['Todos', ...categories] as CategoryFilter[]).map((category) => <button key={category} type="button" onClick={() => setSelectedCategory(category)} aria-pressed={selectedCategory === category} className={`min-h-11 rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-axr-interactive ${selectedCategory === category ? 'border-axr-blue bg-axr-blue text-white' : 'border-white/15 bg-white/5 text-axr-muted hover:border-white/35 hover:text-white'}`}>{category}</button>)}
            </div>
          </div>

          <div className="mt-10" aria-live="polite">
            <div className="grid gap-5 md:grid-cols-2">{visibleProjects.map((preview) => <PortfolioPreviewCard key={preview.name} preview={preview} />)}</div>
          </div>
        </PageContainer>
      </section>

      <section className="border-t border-white/10 bg-axr-navy/45 py-16 sm:py-20">
        <PageContainer><div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Tem um desafio para resolver?</h2><p className="mt-3 max-w-xl text-sm leading-7 text-axr-muted">A AXR desenvolve soluções adaptadas às necessidades de cada negócio.</p></div><Link to="/#contato" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-axr-blue px-6 text-sm font-semibold text-white hover:bg-axr-interactive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-axr-interactive">Vamos conversar <ArrowUpRight size={17} aria-hidden="true" /></Link></div></PageContainer>
      </section>
    </>
  )
}
