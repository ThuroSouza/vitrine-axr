type BrandLogoProps = { className?: string }

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <svg
      className={className}
      viewBox="64 422 1328 299"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <image href="/logo-corporativo-axr.png" width="1448" height="1086" />
    </svg>
  )
}
