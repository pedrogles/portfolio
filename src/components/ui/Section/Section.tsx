import type { ReactNode } from 'react'
import { Container } from '../Container/Container'

interface SectionProps {
  readonly children: ReactNode
  readonly className?: string
  readonly id?: string
  readonly tone?: 'default' | 'muted' | 'dark'
}

export function Section({ children, className = '', id, tone = 'default' }: SectionProps) {
  return (
    <section className={`section section--${tone} ${className}`.trim()} id={id}>
      <Container>{children}</Container>
    </section>
  )
}
