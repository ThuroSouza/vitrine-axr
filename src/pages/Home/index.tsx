import { ArrowDown, ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../../components/layout/PageContainer'
import { PrimaryButton } from '../../components/ui/PrimaryButton'
import { SectionHeader } from '../../components/ui/SectionHeader'
import { ServiceCard } from '../../components/ui/ServiceCard'
import { ProjectCard } from '../../components/ui/ProjectCard'
import { PortfolioEmptyState } from '../../components/ui/PortfolioEmptyState'
import { homeApproach, homeDifferentials, homeServices } from '../../data/home'
import { publishedProjects } from '../../data/projects'
import { contactChannels } from '../../utils/contact'

export function HomePage() {
  const { whatsappUrl, email, socialLinks } = contactChannels

  return <>
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_42%,rgba(29,78,216,0.16),transparent_34%),linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:auto,56px_56px,56px_56px]" />
      <PageContainer>
        <div className="grid gap-14 py-16 sm:py-24 lg:min-h-[670px] lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center lg:gap-14 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-axr-interactive"><span className="h-px w-7 bg-axr-interactive" /> AXR Sistemas Empresariais</p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4rem]">Tecnologia que transforma desafios em soluções.</h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-axr-muted sm:text-lg">Desenvolvemos sistemas personalizados, aplicativos e soluções digitais que simplificam processos e impulsionam empresas.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><PrimaryButton to="/servicos">Conheça nossos serviços</PrimaryButton><PrimaryButton to="/#contato" variant="outline">Solicite um orçamento</PrimaryButton></div>
            <a href="#quem-somos" className="mt-12 inline-flex min-h-11 items-center gap-3 text-sm text-axr-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive"><ArrowDown size={16} aria-hidden="true" /> Descubra a AXR</a>
          </div>
          <div className="relative hidden lg:block">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center"><span className="absolute size-[620px] rounded-full border border-axr-interactive/15" /><span className="absolute size-[540px] rounded-full border border-axr-interactive/15" /><span className="absolute -left-8 top-1/4 size-2 rounded-full bg-axr-interactive" /><span className="absolute -right-7 bottom-1/4 size-2 rounded-full bg-axr-interactive" /></div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-axr-navy/90 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.22)] lg:p-9">
              <div aria-hidden="true" className="absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-axr-interactive/70 to-transparent" />
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6"><span className="text-sm font-semibold tracking-[0.12em] text-white">AXR / SOLUÇÕES</span><span className="size-2 rounded-full bg-axr-interactive" /></div>
              <ol className="relative mt-7 space-y-7 before:absolute before:bottom-4 before:left-[1.18rem] before:top-4 before:w-px before:bg-axr-interactive/30">
                {homeApproach.map(({ number, title, description, icon: Icon }) => <li key={number} className="relative flex gap-5"><span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl border border-axr-interactive/35 bg-axr-secondary text-axr-interactive"><Icon size={18} strokeWidth={1.8} aria-hidden="true" /></span><div className="min-w-0 pt-0.5"><div className="flex items-baseline gap-3"><span className="text-xs font-semibold tabular-nums text-axr-interactive">{number}</span><span className="text-base font-semibold text-white">{title}</span></div><p className="mt-1 text-sm leading-6 text-axr-muted">{description}</p></div></li>)}
              </ol>
              <div className="mt-8 border-t border-white/10 pt-5 text-xs leading-6 text-axr-muted">Tecnologia adaptada à realidade de cada negócio.</div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>

    <section id="quem-somos" tabIndex={-1} className="py-20 outline-none sm:py-28">
      <PageContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="relative mx-auto aspect-square w-full max-w-[460px] overflow-hidden rounded-2xl border border-white/10 bg-axr-navy lg:mx-0">
            <img src="/bancada-desenvolvimento-axr.jpg" alt="" width="1254" height="1254" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-axr-black/15 via-transparent to-axr-secondary/10" />
            <img src="/retrato-axr-sem-fundo.png" alt="Retrato profissional de integrante da AXR Sistemas Empresariais em frente a uma bancada com notebook exibindo software em desenvolvimento" width="1254" height="1254" loading="lazy" decoding="async" className="absolute -right-[14%] bottom-0 h-full w-[95%] object-cover object-bottom" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-axr-navy/60 to-transparent" />
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-axr-interactive">Pessoas e tecnologia</p>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">Uma parceira tecnológica para cada etapa do seu negócio.</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-axr-muted">A AXR Sistemas Empresariais desenvolve soluções tecnológicas sob medida para organizações de diferentes portes no Brasil. Partimos das necessidades de cada cliente para criar sistemas, aplicativos e plataformas que ajudam a organizar processos e melhorar a experiência das pessoas.</p>
            <PrimaryButton to="/institucional" variant="outline" className="mt-8">Conheça a AXR</PrimaryButton>
          </div>
        </div>
      </PageContainer>
    </section>

    <section className="border-y border-white/10 bg-axr-navy/45 py-20 sm:py-28"><PageContainer><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeader title="Tecnologia que se adapta à sua operação." description="Do planejamento à experiência de uso, criamos soluções digitais alinhadas ao problema que sua empresa precisa resolver." /><Link to="/servicos" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-axr-interactive hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive">Ver todos os serviços <ArrowUpRight size={17} aria-hidden="true" /></Link></div><div className="mt-10">{homeServices.map((service) => <ServiceCard key={service.title} {...service} />)}</div></PageContainer></section>

    <section className="py-20 sm:py-28"><PageContainer><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><SectionHeader title="Cada desafio pede uma resposta própria." description="Unimos atenção ao contexto da empresa e desenvolvimento personalizado para criar ferramentas úteis no dia a dia." /><ul className="grid sm:grid-cols-2 sm:gap-x-8">{homeDifferentials.map(({ title, icon: Icon }) => <li key={title} className="flex min-h-20 items-center gap-4 border-b border-white/10 py-4"><Icon size={21} strokeWidth={1.8} className="shrink-0 text-axr-interactive" aria-hidden="true" /><span className="text-sm font-medium leading-6 text-white sm:text-base">{title}</span></li>)}</ul></div></PageContainer></section>

    <section className="py-20 sm:py-28"><PageContainer><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeader title="Projetos e soluções." description="Este espaço reúne uma prévia dos projetos autorizados para divulgação pública." /><Link to="/clientes" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-axr-interactive hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive">Acompanhe o portfólio <ArrowUpRight size={17} aria-hidden="true" /></Link></div><div className="mt-10">{publishedProjects.length > 0 ? <div className="grid gap-5 md:grid-cols-2">{publishedProjects.slice(0, 2).map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <PortfolioEmptyState />}</div></PageContainer></section>

    <section id="contato" tabIndex={-1} className="scroll-mt-8 border-t border-white/10 bg-axr-navy py-20 outline-none sm:py-28">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <SectionHeader title="Vamos transformar sua ideia em uma solução?" description="Conte sobre o desafio da sua empresa e descubra como uma solução personalizada pode apoiar sua operação." />
          <div className="rounded-xl border border-white/10 bg-axr-black/60 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">Solicite um orçamento</h3>
            <p className="mt-3 text-sm leading-7 text-axr-muted">O primeiro passo é uma conversa sobre suas necessidades.</p>
            {whatsappUrl || email ? <div className="mt-7 flex flex-col gap-3">
              {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-axr-blue px-5 text-sm font-semibold text-white hover:bg-axr-interactive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><MessageCircle size={18} aria-hidden="true" /> Conversar pelo WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a>}
              {email && <a href={`mailto:${email}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 text-sm font-semibold text-white hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><Mail size={18} aria-hidden="true" /> Enviar e-mail <ArrowUpRight size={16} aria-hidden="true" /></a>}
            </div> : <p className="mt-7 rounded-lg border border-axr-interactive/20 bg-axr-blue/10 p-4 text-sm leading-6 text-axr-white">{socialLinks.length > 0 ? 'Os canais comerciais diretos serão disponibilizados em breve. Você pode acompanhar as redes oficiais abaixo.' : 'Os canais oficiais de contato serão disponibilizados em breve. Estamos preparando este espaço para receber sua solicitação.'}</p>}
            {socialLinks.length > 0 && <div className="mt-7 border-t border-white/10 pt-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-axr-muted">Redes sociais oficiais</p><div className="mt-3 flex flex-wrap gap-x-5 gap-y-3">{socialLinks.map(({ label, url }) => <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-axr-interactive hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive">{label} <ArrowUpRight size={15} aria-hidden="true" /></a>)}</div></div>}
          </div>
        </div>
      </PageContainer>
    </section>
  </>
}
