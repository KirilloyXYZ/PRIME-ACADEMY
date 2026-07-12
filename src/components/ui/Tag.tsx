import type { ReactNode } from 'react'

type TagProps = {
  children: ReactNode
  tone?: 'blue' | 'cyan' | 'dark' | 'light'
}

export function Tag({ children, tone = 'blue' }: TagProps) {
  return <span className={`tag tag--${tone}`}>{children}</span>
}
