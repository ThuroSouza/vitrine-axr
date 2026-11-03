import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { navigation } from '../../data/navigation'
import { PageContainer } from './PageContainer'
import { contactChannels } from '../../utils/contact'

const plannedServices = ['Sistemas personalizados', 'Aplicativos', 'Sites corporativos', 'Plataformas de atendimento', 'Gestão de tarefas']

export function Footer() {
  const { whatsappUrl, email, socialLinks } = contactChannels
  const hasContact = Boolean(whatsappUrl || email || socialLinks.length)

  return (
    <footer className="border-t border-white/10 bg-axr-navy">
      <PageContainer>
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10 lg:py-20">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 text-xl font-bold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive"><span className="rounded-lg border border-axr-interactive/45 bg-axr-blue/15 px-2.5 py-1.5 text-sm">AXR</span> Sistemas</Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-axr-muted">{siteConfig.description}</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-axr-muted">{siteConfig.serviceArea}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Navegação</h2>
            <ul className="mt-5 space-y-3">{navigation.map(({ label, to }) => <li key={to}><Link className="text-sm text-axr-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive" to={to}>{label}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Soluções</h2>
            <ul className="mt-5 space-y-3">{plannedServices.map((service) => <li key={service} className="text-sm text-axr-muted">{service}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Contato</h2>
            <div className="mt-5 space-y-3 text-sm text-axr-muted">
              {whatsappUrl && <div className="space-y-1"><p>{siteConfig.contact.whatsappDisplay}</p><a className="inline-flex min-h-9 items-center gap-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive" href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14} aria-hidden="true" /></a></div>}
              {email && <a className="block break-words hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive" href={`mailto:${email}`}>{email}</a>}
              {socialLinks.map(({ label, url }) => <a className="block hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive" key={url} href={url} target="_blank" rel="noopener noreferrer">{label}</a>)}
              {!hasContact && <p className="leading-6">Canais oficiais de contato serão disponibilizados em breve.</p>}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-axr-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</span>
          <span>Tecnologia personalizada para cada negócio.</span>
        </div>
      </PageContainer>
    </footer>
  )
}
