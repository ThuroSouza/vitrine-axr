import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../../data/navigation'
import { BrandLogo } from '../ui/BrandLogo'
import { PageContainer } from './PageContainer'

export function Header() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="relative z-30 border-b border-white/10 bg-axr-black/95">
      <PageContainer>
        <div className="flex min-h-20 items-center justify-between gap-4 py-3 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <Link to="/" aria-label="AXR Sistemas — página inicial" className="inline-flex shrink-0 items-center rounded-lg bg-axr-white px-2 py-1.5 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-axr-interactive">
            <BrandLogo className="h-[52px] w-[116px] sm:h-[62px] sm:w-[138px] lg:h-[68px] lg:w-[151px]" />
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center justify-self-center gap-1 lg:flex">
            {navigation.map(({ label, to }) => (
              <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `inline-flex min-h-12 items-center whitespace-nowrap rounded-lg px-3 py-2 text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive xl:px-3.5 xl:text-lg ${isActive ? 'bg-white/8 text-white' : 'text-axr-muted hover:bg-white/5 hover:text-white'}`}>
                {label}
              </NavLink>
            ))}
          </nav>

          <Link to="/#contato" className="hidden min-h-12 items-center gap-2 whitespace-nowrap rounded-lg border border-axr-blue bg-axr-blue px-4 text-base font-semibold text-white transition-colors hover:bg-axr-interactive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:inline-flex xl:text-lg">
            Contato <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          <button ref={menuButton} type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-controls="menu-mobile" aria-expanded={open} onClick={() => setOpen(!open)} className="inline-flex size-11 items-center justify-center rounded-lg border border-white/15 text-white hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive lg:hidden">
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </PageContainer>

        <nav id="menu-mobile" hidden={!open} aria-label="Navegação para dispositivos móveis" className="max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-white/10 bg-axr-navy lg:hidden">
          <PageContainer>
            <div className="flex flex-col gap-1 py-4">
              {navigation.map(({ label, to }) => (
                <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `inline-flex min-h-12 items-center rounded-lg px-4 py-3 text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-axr-interactive ${isActive ? 'bg-white/10 text-white' : 'text-axr-muted hover:bg-white/5 hover:text-white'}`}>
                  {label}
                </NavLink>
              ))}
              <Link to="/#contato" onClick={() => setOpen(false)} className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-axr-blue px-4 py-3 text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">Contato</Link>
            </div>
          </PageContainer>
        </nav>
    </header>
  )
}
