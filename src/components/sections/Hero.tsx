import { heroTrustItems, imageAssets } from '../../content'
import { withTelegramBotStart } from '../../config/site'
import { ButtonLink } from '../ui/ButtonLink'
import { ResponsiveImage } from '../ui/ResponsiveImage'

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">ОГЭ · ЕГЭ · олимпиады · школьная физика</div>
          <h1 className="hero-title">
            <span>Не зубри физику</span>
            <span className="hero-title__accent">собери её</span>
            <span className="hero-title__accent">в систему</span>
          </h1>
          <p className="hero-lead">
            Кирилл и Ирина объясняют сложные темы через модели, связи и задачи. Сначала понимаем, где ученик
            теряется, потом строим маршрут подготовки.
          </p>

          <div className="hero-actions">
            <ButtonLink href={withTelegramBotStart('hero')} variant="light">
              Записаться на бесплатную диагностику
            </ButtonLink>
            <ButtonLink href="#courses" variant="ghost" withArrow={false}>
              Посмотреть курсы
            </ButtonLink>
          </div>

          <div className="hero-proof-row" aria-label="Факты о PRIME ACADEMY">
            {heroTrustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Кирилл и Ирина, преподаватели PRIME ACADEMY">
          <div className="hero-physics-layer" aria-hidden="true">
            <span className="schema-node schema-node--one"></span>
            <span className="schema-node schema-node--two"></span>
            <span className="schema-node schema-node--three"></span>
            <span className="schema-line schema-line--one"></span>
            <span className="schema-line schema-line--two"></span>
          </div>

          <article className="hero-person hero-person--kirill" aria-label="Кирилл Кузнецов, преподаватель физики">
            <div className="hero-person__media">
              <ResponsiveImage
                src={imageAssets.kirillHeroCurrentPhoto}
                alt="Кирилл Кузнецов, преподаватель физики"
                loading="eager"
                position={{ desktop: '50% 25%', tablet: '50% 22%', mobile: '50% 18%' }}
              />
            </div>
          </article>

          <article className="hero-person hero-person--irina" aria-label="Ирина Данилова, преподаватель физики">
            <div className="hero-person__media">
              <ResponsiveImage
                src={imageAssets.irinaHeroCurrentPhoto}
                alt="Ирина Данилова, преподаватель физики"
                loading="eager"
                position={{ desktop: '50% 26%', tablet: '50% 22%', mobile: '50% 18%' }}
              />
            </div>
          </article>

          <div className="hero-sticker">
            <span>первое занятие</span>
            <strong>бесплатно</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
