import { Outlet, useLocation } from 'react-router-dom'
import { Suspense, useEffect, useRef } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { getPageMeta } from '../../config/seo'
import { usePageMeta } from '../../hooks/usePageMeta'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(pathname)
  useEffect(() => {
    if (hash) {
      let observer: MutationObserver | null = null
      const scrollToTarget = () => {
        const target = document.getElementById(hash.slice(1))
        if (!target) return
        target.scrollIntoView()
        target.focus({ preventScroll: true })
        observer?.disconnect()
      }
      observer = new MutationObserver(scrollToTarget)
      const main = document.getElementById('conteudo')
      if (main) observer.observe(main, { childList: true, subtree: true })
      const frame = requestAnimationFrame(scrollToTarget)
      previousPath.current = pathname
      return () => {
        cancelAnimationFrame(frame)
        observer?.disconnect()
      }
    }

    window.scrollTo(0, 0)
    if (previousPath.current !== pathname) document.getElementById('conteudo')?.focus({ preventScroll: true })
    previousPath.current = pathname
  }, [pathname, hash])
  return null
}

export function AppLayout() {
  usePageMeta()
  const { pathname } = useLocation()
  return <div className="flex min-h-screen flex-col bg-axr-black text-axr-white"><ScrollManager /><a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-axr-black">Pular para o conteúdo</a><div className="sr-only" aria-live="polite" aria-atomic="true">{getPageMeta(pathname).title}</div><Header /><main id="conteudo" tabIndex={-1} className="flex flex-1 flex-col outline-none"><Suspense fallback={<div role="status" className="mx-auto w-full max-w-7xl px-5 py-24 text-axr-muted sm:px-8 lg:px-12">Carregando página…</div>}><Outlet /></Suspense></main><Footer /></div>
}
