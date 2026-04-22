import { ArrowUpRight } from 'lucide-react'

export function CtaButton({
  href,
  children,
  variant = 'primary',
  className = '',
  target = '_blank',
  rel = 'noreferrer',
}) {
  const baseClassName =
    variant === 'primary'
      ? 'cta-primary'
      : 'cta-secondary'

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseClassName} ${className}`.trim()}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4" />
    </a>
  )
}