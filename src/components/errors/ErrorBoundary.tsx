import { Component, type ReactNode } from 'react'
import { LinkButton } from '../ui/LinkButton/LinkButton'

interface ErrorBoundaryProps {
  readonly children: ReactNode
}

interface ErrorBoundaryState {
  readonly hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  public componentDidCatch(): void {
    // A interface apresenta um estado seguro sem enviar dados a serviços externos.
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <main className="error-page" id="main-content" tabIndex={-1}>
          <div className="container error-page__content">
            <p className="eyebrow">Falha inesperada</p>
            <h1>Não foi possível exibir esta página.</h1>
            <p>Recarregue o site ou volte para o início para continuar navegando.</p>
            <LinkButton to="/">Voltar ao início</LinkButton>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}
