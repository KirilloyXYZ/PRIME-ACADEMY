import { ArrowLeft, BookOpenCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { siteConfig } from '../config/site'

export function NotFoundPage() {
  return (
    <section className="not-found-page">
      <Seo
        data={{
          title: `Страница не найдена — ${siteConfig.name}`,
          description: 'Страница PRIME ACADEMY не найдена. Вернитесь на главную или выберите подходящий курс.',
          path: '/404',
          robots: 'noindex, follow',
        }}
      />
      <div className="not-found-card">
        <span>404</span>
        <h1>Страница не найдена</h1>
        <p>Похоже, ссылка изменилась или раздел ещё не добавлен. Можно вернуться на главную или сразу открыть курсы.</p>
        <div className="not-found-actions">
          <Link className="button button--dark" to="/">
            <ArrowLeft aria-hidden="true" />
            На главную
          </Link>
          <Link className="button button--light" to="/#courses">
            <BookOpenCheck aria-hidden="true" />
            К курсам
          </Link>
        </div>
      </div>
    </section>
  )
}
