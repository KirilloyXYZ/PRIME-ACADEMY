import { materialsHighlights } from '../../content'
import { legalConfig } from '../../config/legal'
import { ButtonLink } from '../ui/ButtonLink'

export function MaterialsBanner() {
  return (
    <section className="materials-section" id="materials">
      <div className="section-shell">
        <div className="materials-banner">
          <div>
            <span className="lead-label">telegram-канал</span>
            <h2>Бесплатные материалы по физике</h2>
            <p>Разборы задач, схемы и конспекты, по которым можно заранее понять наш подход к объяснению физики.</p>
            <div className="materials-tags">
              {materialsHighlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <ButtonLink href={legalConfig.telegramChannel} variant="light">
            Перейти к материалам
          </ButtonLink>
          <span className="paper-plane paper-plane--one" aria-hidden="true"></span>
          <span className="paper-plane paper-plane--two" aria-hidden="true"></span>
        </div>
      </div>
    </section>
  )
}
