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
        <div className="grid min-h-[670px] items-center gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-axr-interactive"><span className="h-px w-7 bg-axr-interactive" /> AXR Sistemas Empresariais</p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.4rem]">Tecnologia que transforma desafios em soluções.</h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-axr-muted sm:text-lg">Desenvolvemos sistemas personalizados, aplicativos e soluções digitais que simplificam processos e impulsionam empresas.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><PrimaryButton to="/servicos">Conheça nossos serviços</PrimaryButton><PrimaryButton to="/#contato" variant="outline">Solicite um orçamento</PrimaryButton></div>
            <a href="#quem-somos" className="mt-14 inline-flex items-center gap-3 text-sm text-axr-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive"><ArrowDown size={16} aria-hidden="true" /> Descubra a AXR</a>
          </div>
          <div aria-hidden="true" className="relative hidden min-h-[430px] items-center justify-center lg:flex"><div className="absolute size-[400px] rounded-full border border-axr-interactive/15" /><div className="absolute size-[310px] rounded-full border border-axr-interactive/20" /><div className="absolute size-[220px] rounded-full border border-axr-interactive/25" /><div className="relative flex size-36 items-center justify-center rounded-3xl border border-axr-interactive/50 bg-axr-navy text-4xl font-bold tracking-[-0.08em] text-white shadow-[0_0_70px_rgba(29,78,216,0.16)]">AXR</div><span className="absolute left-[8%] top-[20%] size-2 rounded-full bg-axr-interactive" /><span className="absolute right-[10%] bottom-[20%] size-2 rounded-full bg-axr-interactive" /></div>
        </div>
      </PageContainer>
    </section>

    <section id="quem-somos" tabIndex={-1} className="py-20 sm:py-28"><PageContainer><div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-axr-interactive">01 / Quem somos</p><div className="mt-6 h-px max-w-24 bg-axr-interactive/60" /></div><div><h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">Uma parceira tecnológica para cada etapa do seu negócio.</h2><p className="mt-7 max-w-2xl text-base leading-8 text-axr-muted">A AXR Sistemas Empresariais desenvolve soluções tecnológicas sob medida para organizações de diferentes portes no Brasil. Partimos das necessidades de cada cliente para criar sistemas, aplicativos e plataformas que ajudam a organizar processos e melhorar a experiência das pessoas.</p><PrimaryButton to="/institucional" variant="outline" className="mt-8">Conheça a AXR</PrimaryButton></div></div></PageContainer></section>

    <section className="border-y border-white/10 bg-axr-navy/45 py-20 sm:py-28"><PageContainer><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeader eyebrow="02 / Nossas soluções" title="Tecnologia que se adapta à sua operação." description="Do planejamento à experiência de uso, criamos soluções digitais alinhadas ao problema que sua empresa precisa resolver." /><Link to="/servicos" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-axr-interactive hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive">Ver todos os serviços <ArrowUpRight size={17} aria-hidden="true" /></Link></div><div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{homeServices.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}</div></PageContainer></section>

    <section className="py-20 sm:py-28"><PageContainer><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><SectionHeader eyebrow="03 / Diferenciais" title="Cada desafio pede uma resposta própria." description="Unimos atenção ao contexto da empresa e desenvolvimento personalizado para criar ferramentas úteis no dia a dia." /><ul className="grid gap-3 sm:grid-cols-2">{homeDifferentials.map(({ title, icon: Icon }) => <li key={title} className="flex min-h-24 items-center gap-4 rounded-xl border border-white/10 bg-axr-navy/50 p-5"><span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-axr-blue/10 text-axr-interactive"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span><span className="text-sm font-medium leading-6 text-white">{title}</span></li>)}</ul></div></PageContainer></section>

    <section className="border-y border-white/10 bg-axr-navy/45 py-20 sm:py-28"><PageContainer><SectionHeader eyebrow="04 / Nossa abordagem" title="Da necessidade à solução." description="Projetos personalizados começam com uma compreensão clara do trabalho que a tecnologia precisa apoiar." /><div className="mt-12 grid gap-4 md:grid-cols-3">{homeApproach.map(({ number, title, description, icon: Icon }) => <div key={number} className="rounded-xl border border-white/10 bg-axr-black/50 p-6 sm:p-8"><div className="flex items-center justify-between text-axr-interactive"><Icon size={24} strokeWidth={1.7} aria-hidden="true" /><span className="text-xs tracking-[0.2em]">{number}</span></div><h3 className="mt-9 text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-axr-muted">{description}</p></div>)}</div></PageContainer></section>

    <section className="py-20 sm:py-28"><PageContainer><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeader eyebrow="05 / Projetos em destaque" title="Projetos e soluções." description="Este espaço reúne uma prévia dos projetos autorizados para divulgação pública." /><Link to="/clientes" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-axr-interactive hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive">Acompanhe o portfólio <ArrowUpRight size={17} aria-hidden="true" /></Link></div><div className="mt-10">{publishedProjects.length > 0 ? <div className="grid gap-5 md:grid-cols-2">{publishedProjects.slice(0, 2).map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <PortfolioEmptyState />}</div></PageContainer></section>

    <section id="contato" tabIndex={-1} className="scroll-mt-8 border-t border-white/10 bg-axr-navy py-20 outline-none sm:py-28">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <SectionHeader eyebrow="06 / Vamos conversar" title="Vamos transformar sua ideia em uma solução?" description="Conte sobre o desafio da sua empresa e descubra como uma solução personalizada pode apoiar sua operação." />
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
