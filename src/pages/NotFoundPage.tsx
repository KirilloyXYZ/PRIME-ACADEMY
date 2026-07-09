import { ArrowLeft } from 'lucide-react'

export function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="not-found-card">
        <span>404</span>
        <h1>Страница не найдена</h1>
        <p>Похоже, ссылка изменилась или страница еще не добавлена. Вернись на главную и выбери нужный раздел.</p>
        <a className="button button--dark" href="/">
          <ArrowLeft aria-hidden="true" />
          На главную
        </a>
      </div>
    </section>
  )
}
