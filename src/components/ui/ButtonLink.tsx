import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'light' | 'ghost'
  className?: string
  withArrow?: boolean
  onClick?: () => void
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  withArrow = true,
  onClick,
}: ButtonLinkProps) {
  const isExternal = href.startsWith('http')

  return (
    <a
      className={`button-link button-link--${variant} ${className}`}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      onClick={onClick}
    >
      <span>{children}</span>
      {withArrow ? <ArrowRight aria-hidden="true" /> : null}
    </a>
  )
}
