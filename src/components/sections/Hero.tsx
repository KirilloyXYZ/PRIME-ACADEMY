import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroTrustItems, imageAssets } from '../../content'
import { withTelegramBotStart } from '../../config/site'
import { ButtonLink } from '../ui/ButtonLink'
import { ResponsiveImage } from '../ui/ResponsiveImage'

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Онлайн-школа физики · ОГЭ · ЕГЭ · олимпиады · школьная база</div>
          <h1 className="hero-title">
            <span>Не зубри физику</span>
            <span className="hero-title__accent">собери её</span>
            <span className="hero-title__accent">в систему</span>
          </h1>
          <p className="hero-lead">
            Мы объединили вузовский подход и методики ведущих школ России, чтобы системно готовить учеников к ЕГЭ, ОГЭ,
            олимпиадам и уверенной учёбе в школе.
          </p>

          <div className="hero-actions">
            <ButtonLink href={withTelegramBotStart('hero')} variant="light">
              Записаться на бесплатную диагностику
            </ButtonLink>
            <ButtonLink href="/#courses" variant="ghost" withArrow={false}>
              Посмотреть курсы
            </ButtonLink>
          </div>

          <div className="hero-proof-row" aria-label="Факты о PRIME ACADEMY">
            {heroTrustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <Link className="scroll-cue" to="/#teachers">
            <ArrowDown aria-hidden="true" />
            посмотреть преподавателей
          </Link>
        </div>

        <div className="hero-visual" aria-label="Кирилл Алексеевич и Ирина Даниловна, преподаватели PRIME ACADEMY">
          <div className="hero-physics-layer" aria-hidden="true">
            <span className="schema-node schema-node--one"></span>
            <span className="schema-node schema-node--two"></span>
            <span className="schema-node schema-node--three"></span>
            <span className="schema-line schema-line--one"></span>
            <span className="schema-line schema-line--two"></span>
          </div>

          <article className="hero-person hero-person--kirill" aria-label="Кирилл Алексеевич, преподаватель физики">
            <div className="hero-person__media">
              <ResponsiveImage
                src={imageAssets.kirillHeroCurrentPhoto}
                alt="Кирилл Алексеевич, преподаватель физики"
                loading="eager"
                fetchPriority="high"
                sources={imageAssets.kirillHeroCurrentSources}
                width={imageAssets.kirillHeroCurrentWidth}
                height={imageAssets.kirillHeroCurrentHeight}
                sizes="(max-width: 640px) 58vw, (max-width: 920px) 52vw, 32vw"
                position={{ desktop: '50% 25%', tablet: '50% 22%', mobile: '50% 18%' }}
              />
            </div>
          </article>

          <article className="hero-person hero-person--irina" aria-label="Ирина Даниловна, преподаватель физики">
            <div className="hero-person__media">
              <ResponsiveImage
                src={imageAssets.irinaHeroCurrentPhoto}
                alt="Ирина Даниловна, преподаватель физики"
                sources={imageAssets.irinaHeroCurrentSources}
                width={imageAssets.irinaHeroCurrentWidth}
                height={imageAssets.irinaHeroCurrentHeight}
                sizes="(max-width: 640px) 58vw, (max-width: 920px) 51vw, 32vw"
                position={{ desktop: '50% 26%', tablet: '50% 22%', mobile: '50% 18%' }}
              />
            </div>
          </article>

          <div className="hero-sticker">
            <span>первый шаг</span>
            <strong>диагностика</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
