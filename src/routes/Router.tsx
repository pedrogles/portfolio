import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
} from 'react'

interface AppLocation {
  readonly hash: string
  readonly pathname: string
}

interface RouterContextValue extends AppLocation {
  readonly navigate: (to: string) => void
}

interface RouterProviderProps {
  readonly children: ReactNode
  readonly initialUrl?: string
}

type AppLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  readonly to: string
}

const RouterContext = createContext<RouterContextValue | null>(null)

function parseLocation(url: string): AppLocation {
  const parsed = new URL(url, 'https://portfolio.local')
  return { hash: parsed.hash, pathname: parsed.pathname }
}

function browserLocation(): AppLocation {
  return parseLocation(`${window.location.pathname}${window.location.search}${window.location.hash}`)
}

export function RouterProvider({ children, initialUrl }: RouterProviderProps) {
  const [location, setLocation] = useState<AppLocation>(() =>
    initialUrl
      ? parseLocation(initialUrl)
      : typeof window === 'undefined' ? parseLocation('/') : browserLocation(),
  )

  useEffect(() => {
    function handlePopState() {
      setLocation(browserLocation())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((to: string) => {
    const destination = new URL(to, window.location.origin)
    const nextUrl = `${destination.pathname}${destination.search}${destination.hash}`
    window.history.pushState(null, '', nextUrl)
    setLocation(parseLocation(nextUrl))
  }, [])

  const value = useMemo(() => ({ ...location, navigate }), [location, navigate])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useAppLocation(): RouterContextValue {
  const context = useContext(RouterContext)
  if (!context) throw new Error('useAppLocation deve ser usado dentro de RouterProvider.')
  return context
}

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(function AppLink(
  { onClick, target, to, ...props },
  ref,
) {
  const { navigate } = useAppLocation()

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)

    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
      || (target && target !== '_self')
    ) return

    const destination = new URL(to, window.location.origin)
    if (destination.origin !== window.location.origin) return

    event.preventDefault()
    navigate(to)
  }

  return <a {...props} href={to} onClick={handleClick} ref={ref} target={target} />
})
