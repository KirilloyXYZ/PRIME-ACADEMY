import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../../content'
import { withTelegramBotStart } from '../../config/site'
import { ButtonLink } from '../ui/ButtonLink'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', isOpen)

    return () => {
      document.body.classList.remove('mobile-nav-open')
    }
  }, [isOpen])

  function closeMenu() {
    setIsOpen(false)
  }

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

      <nav id="mobile-navigation" className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`} aria-label="Мобильная навигация">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href} onClick={closeMenu}>
            {item.label}
          </NavLink>
        ))}
        <ButtonLink href={withTelegramBotStart('hero')} variant="primary" onClick={closeMenu}>
          Записаться на диагностику
        </ButtonLink>
      </nav>
    </header>
  )
}
