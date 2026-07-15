import { Mail, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navItems } from '../../content'
import { legalConfig, legalLinks } from '../../config/legal'
import { withTelegramBotStart } from '../../config/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand brand--footer" to="/">
          <span>PRIME</span>
          <strong>ACADEMY</strong>
        </Link>
        <p>
          Авторская онлайн-школа физики: ОГЭ, ЕГЭ, олимпиады и школьная база без механической зубрёжки.
        </p>
      </div>

      <nav className="footer-links" aria-label="Разделы сайта">
        {navItems.map((item) => (
          <Link key={item.href} to={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="footer-links">
        <a href={withTelegramBotStart('footer')} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          Оставить заявку
        </a>
        <a href={legalConfig.telegramChannel} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          Telegram-канал с материалами
        </a>
        <a href={`mailto:${legalConfig.operatorEmail}`}>
          <Mail aria-hidden="true" />
          {legalConfig.operatorEmail}
        </a>
      </div>

      <div className="legal-links">
        {legalLinks.map((link) => (
          <Link key={link.href} to={link.href}>
            {link.label}
          </Link>
        ))}
        <small>Информация на сайте не является публичной офертой. Условия обучения уточняются после заявки.</small>
      </div>
    </footer>
  )
}
