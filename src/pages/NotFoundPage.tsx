import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="not-found-card">
        <span>404</span>
        <h1>Страница не найдена</h1>
        <p>Похоже, ссылка изменилась или страница еще не добавлена. Вернись на главную и выбери нужный раздел.</p>
        <Link className="button button--dark" to="/">
          <ArrowLeft aria-hidden="true" />
          На главную
        </Link>
      </div>
    </section>
  )
}
