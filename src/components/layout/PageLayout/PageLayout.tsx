import type { ReactNode } from 'react'
import { SkipLink } from '../../accessibility/SkipLink'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

interface PageLayoutProps {
  readonly children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <SkipLink />
      <Header />
      {children}
      <Footer />
    </>
  )
}
