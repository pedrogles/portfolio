import type { ReactNode } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { AppLink } from '../../../routes/Router'

interface LinkButtonProps {
  readonly children: ReactNode
  readonly to: string
  readonly variant?: 'primary' | 'secondary' | 'ghost'
  readonly className?: string
}

export function LinkButton({ children, to, variant = 'primary', className = '' }: LinkButtonProps) {
  return (
    <AppLink className={`button button--${variant} ${className}`.trim()} to={to}>
      <span>{children}</span>
      <FiArrowRight aria-hidden="true" focusable="false" />
    </AppLink>
  )
}
