import { proofItems } from '../../content'
import { SectionHeading } from '../ui/SectionHeading'

export function ProofSection() {
  return (
    <section className="page-section proof-section" id="proof">
      <div className="section-shell proof-shell">
        <div>
          <SectionHeading
            eyebrow="почему нам можно доверить физику"
            title="Без громких обещаний. Только понятная система"
            text="Мы не продаём магию и не обещаем результат без работы. Вместо этого показываем процесс: диагностика, план, практика, проверка и корректировка."
          />
          <div className="proof-equation" aria-hidden="true">
            <span>условие</span>
            <span>→</span>
            <span>схема</span>
            <span>→</span>
            <span>закон</span>
            <span>→</span>
            <span>задача</span>
          </div>
        </div>

        <div className="proof-board">
          <div className="proof-list">
            {proofItems.map((item) => {
              const Icon = item.icon
              return (
                <article className="proof-item" key={item.title}>
                  <Icon aria-hidden="true" />
                  <span>{item.accent}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>

          <div className="solution-note" aria-label="Фрагмент разбора задачи">
            <span>фрагмент разбора</span>
            <code>что происходит? → какой закон работает? → как оформить решение?</code>
            <p>Формула появляется после понимания модели, а не вместо него.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
