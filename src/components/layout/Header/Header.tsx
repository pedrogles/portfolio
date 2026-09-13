import { useEffect, useRef, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../../../assets/logo/pg.svg'
import { navigation } from '../../../content/navigation'
import { AppLink, useAppLocation } from '../../../routes/Router'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useAppLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!isOpen) return undefined

    document.body.classList.add('navigation-open')
    const focusFrame = window.requestAnimationFrame(() => firstLinkRef.current?.focus())

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return

      event.preventDefault()
      menuButtonRef.current?.focus()
      setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.body.classList.remove('navigation-open')
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <header className="site-header">
      <div className="container site-header__content">
        <AppLink aria-label="Pedro Gabriel — página inicial" className="brand" to="/">
          <img alt="" aria-hidden="true" height="39" src={logo} width="46" />
          <span>
            Pedro Gabriel
            <small>Desenvolvedor de Software</small>
          </span>
        </AppLink>

        <button
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          className="menu-button"
          onClick={() => setIsOpen((open) => !open)}
          ref={menuButtonRef}
          type="button"
        >
          {isOpen ? <FiX aria-hidden="true" focusable="false" /> : <FiMenu aria-hidden="true" focusable="false" />}
        </button>

        <nav
          aria-label="Navegação principal"
          className={`primary-navigation ${isOpen ? 'primary-navigation--open' : ''}`}
          id="primary-navigation"
        >
          <ul>
            {navigation.map((item, index) => (
              <li key={item.path}>
                <AppLink
                  aria-current={
                    item.end
                      ? pathname === item.path ? 'page' : undefined
                      : pathname === item.path || pathname.startsWith(`${item.path}/`) ? 'page' : undefined
                  }
                  aria-label={item.ariaLabel}
                  className={
                    (item.end ? pathname === item.path : pathname === item.path || pathname.startsWith(`${item.path}/`))
                      ? 'primary-navigation__link primary-navigation__link--active'
                      : 'primary-navigation__link'
                  }
                  onClick={() => setIsOpen(false)}
                  ref={index === 0 ? firstLinkRef : undefined}
                  to={item.path}
                >
                  {item.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
