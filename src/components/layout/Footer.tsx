import { Mail, MessageCircle } from 'lucide-react'
import { navItems } from '../../content'
import { legalConfig, legalLinks } from '../../config/legal'

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand brand--footer" href="/">
          <span>PRIME</span>
          <strong>ACADEMY</strong>
        </a>
        <p>
          Авторская онлайн-школа физики: ОГЭ, ЕГЭ, олимпиады и школьная база без механической зубрёжки.
        </p>
      </div>

      <nav className="footer-links" aria-label="Разделы сайта">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="footer-links">
        <a href={legalConfig.telegramContact} target="_blank" rel="noreferrer">
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
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <small>Информация на сайте не является публичной офертой. Условия обучения уточняются после заявки.</small>
      </div>
    </footer>
  )
}
