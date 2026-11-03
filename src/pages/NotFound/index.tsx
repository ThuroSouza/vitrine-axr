import { Link } from 'react-router-dom'
import { PageContainer } from '../../components/layout/PageContainer'

export function NotFoundPage() {
  return <section className="flex flex-1 items-center py-24"><PageContainer><p className="text-sm font-semibold tracking-[0.2em] text-axr-interactive">ERRO 404</p><h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Página não encontrada.</h1><p className="mt-5 text-axr-muted">O endereço informado não corresponde a uma página deste site.</p><Link to="/" className="mt-8 inline-flex rounded-lg bg-axr-blue px-5 py-3 font-semibold text-white hover:bg-axr-interactive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Voltar ao início</Link></PageContainer></section>
}
