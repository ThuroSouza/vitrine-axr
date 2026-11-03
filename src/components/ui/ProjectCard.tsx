import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../types/project'

type ProjectCardProps = { project: Project }

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-axr-navy/70 transition-colors hover:border-axr-interactive/45">
      <Link to={`/clientes/${project.slug}`} className="block overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-axr-interactive" aria-label={`Conhecer projeto: ${project.name}`}>
        <img src={project.coverImage.src} alt={project.coverImage.alt} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" />
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap gap-2 text-xs font-medium"><span className="rounded-md border border-axr-interactive/25 bg-axr-blue/10 px-2.5 py-1 text-axr-interactive">{project.category}</span><span className="rounded-md border border-white/10 px-2.5 py-1 text-axr-muted">{project.status}</span></div>
        <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{project.name}</h3>
        {project.clientName && <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-axr-muted">{project.clientName}</p>}
        <p className="mt-4 flex-1 text-sm leading-7 text-axr-muted">{project.summary}</p>
        <Link to={`/clientes/${project.slug}`} className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-axr-interactive hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-axr-interactive">Conhecer projeto <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </article>
  )
}
