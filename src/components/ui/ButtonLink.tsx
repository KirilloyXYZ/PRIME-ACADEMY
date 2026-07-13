import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
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
  const classNames = `button-link button-link--${variant} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {withArrow ? <ArrowRight aria-hidden="true" /> : null}
    </>
  )

  if (!isExternal) {
    return (
      <Link className={classNames} to={href} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <a className={classNames} href={href} target="_blank" rel="noreferrer" onClick={onClick}>
      {content}
    </a>
  )
}
