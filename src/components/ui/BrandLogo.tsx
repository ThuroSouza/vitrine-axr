type BrandLogoProps = { className?: string }

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <svg
      className={className}
      viewBox="80 372 1100 496"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <image href="/logo-tecnologico-axr.png" width="1254" height="1254" />
    </svg>
  )
}
