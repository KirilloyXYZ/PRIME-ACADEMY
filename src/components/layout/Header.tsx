import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems } from '../../content'
import { withTelegramBotStart } from '../../config/site'
import { ButtonLink } from '../ui/ButtonLink'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', isOpen)

    return () => {
      document.body.classList.remove('mobile-nav-open')
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const nav = navRef.current
    const focusable = () =>
      Array.from(nav?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []).filter(
        (item) => !item.hasAttribute('disabled') && item.getAttribute('aria-hidden') !== 'true',
      )

    const focusFirstItem = window.requestAnimationFrame(() => {
      focusable()[0]?.focus()
    })

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        window.requestAnimationFrame(() => buttonRef.current?.focus())
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const items = focusable()
      const first = items[0]
      const last = items.at(-1)

      if (!first || !last) {
        event.preventDefault()
        return
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.cancelAnimationFrame(focusFirstItem)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  function closeMenu() {
    setIsOpen(false)
  }

  const mobileTabIndex = isOpen ? undefined : -1

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="PRIME ACADEMY">
        <span>PRIME</span>
        <strong>ACADEMY</strong>
      </Link>

      <nav className="desktop-nav" aria-label="Основная навигация">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="header-actions">
        <ButtonLink href={withTelegramBotStart('hero')} variant="primary" className="header-cta">
          Записаться на диагностику
        </ButtonLink>
        <button
          ref={buttonRef}
          className="mobile-menu"
          type="button"
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        ref={navRef}
        id="mobile-navigation"
        className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}
        aria-label="Мобильная навигация"
        aria-hidden={!isOpen}
      >
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href} onClick={closeMenu} tabIndex={mobileTabIndex}>
            {item.label}
          </NavLink>
        ))}
        <ButtonLink href={withTelegramBotStart('hero')} variant="primary" onClick={closeMenu} tabIndex={mobileTabIndex}>
          Записаться на диагностику
        </ButtonLink>
      </nav>
    </header>
  )
}
