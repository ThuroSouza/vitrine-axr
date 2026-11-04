import type { PortfolioPreview } from '../../data/portfolioPreviews'

export function PortfolioPreviewCard({ preview }: { preview: PortfolioPreview }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-axr-navy/70 transition-colors hover:border-white/25">
      <div className="overflow-hidden bg-axr-black">
        <img
          src={preview.image}
          alt={preview.alt}
          loading="lazy"
          decoding="async"
          width="1280"
          height="720"
          className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.015] motion-reduce:transition-none"
        />
      </div>
      <div className="p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: preview.accent }}>{preview.category}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{preview.name}</h3>
        <p className="mt-3 text-sm leading-7 text-axr-muted">{preview.description}</p>
        <p className="mt-6 border-t border-white/10 pt-4 text-xs text-axr-muted">Prévia visual ilustrativa</p>
      </div>
    </article>
  )
}
