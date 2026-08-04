export function RouteLoading() {
  return (
    <div aria-live="polite" className="route-loading" role="status">
      <span aria-hidden="true" className="route-loading__spinner" />
      Carregando página
    </div>
  )
}
