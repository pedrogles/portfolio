import type { ReactNode } from 'react'
import { FiExternalLink } from 'react-icons/fi'

interface ExternalLinkProps {
  readonly children: ReactNode
  readonly href: string
  readonly ariaLabel?: string
  readonly className?: string
  readonly opensNewTab?: boolean
}

export function ExternalLink({
  children,
  href,
  ariaLabel,
  className = '',
  opensNewTab = true,
}: ExternalLinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      className={`external-link ${className}`.trim()}
      href={href}
      rel={opensNewTab ? 'noopener noreferrer' : undefined}
      target={opensNewTab ? '_blank' : undefined}
    >
      <span>{children}</span>
      {opensNewTab ? <FiExternalLink aria-hidden="true" focusable="false" /> : null}
      {opensNewTab ? <span className="sr-only"> (abre em nova guia)</span> : null}
    </a>
  )
}
