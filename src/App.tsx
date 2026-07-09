import { ArrowRight, CheckCircle2, Mail, Menu, MessageCircle, ShieldCheck } from 'lucide-react'
import {
  afterRequestSteps,
  audienceCards,
  directions,
  faqItems,
  formatCards,
  learningSteps,
  navItems,
  teachers,
} from './content'
import { legalConfig, legalLinks } from './config/legal'
import { LegalPage, type LegalPageKey } from './pages/LegalPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PhotoFrame } from './components/PhotoFrame'
import { SectionHeading } from './components/SectionHeading'
import { TelegramLead } from './components/TelegramLead'

const legalPageKeys = new Set<LegalPageKey>([
  'privacy',
  'personal-data-consent',
  'marketing-consent',
  'terms',
  'cookies',
])

const heroAudienceChips = ['9–11 класс', 'ОГЭ / ЕГЭ', 'олимпиады', 'школьная база']

function App() {
  const path = normalizePath(window.location.pathname)

  if (isLegalPage(path)) {
    return (
      <main>
        <Header />
        <LegalPage pageKey={path.slice(1) as LegalPageKey} />
        <Footer />
      </main>
    )
  }

  if (path !== '/') {
    return (
      <main>
        <Header />
        <NotFoundPage />
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />
      <Hero />
      <AudienceSection />
      <DirectionsSection />
      <LearningSection />
      <TeachersSection />
      <FormatSection />
      <AfterRequestSection />
      <LeadSection />
      <FaqSection />
      <Footer />
    </main>
  )
}

function normalizePath(pathname: string) {
  if (!pathname || pathname === '/index.html') {
    return '/'
  }

  return pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
}

function isLegalPage(path: string) {
  return legalPageKeys.has(path.slice(1) as LegalPageKey)
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="PRIME ACADEMY">
        <span>PRIME</span>
        <strong>ACADEMY</strong>
      </a>

      <nav className="desktop-nav" aria-label="Основная навигация">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="button button--small" href={legalConfig.telegramContact} target="_blank" rel="noreferrer">
          Оставить заявку
        </a>
        <button className="mobile-menu" type="button" aria-label="Меню">
          <Menu aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">ОГЭ • ЕГЭ • ОЛИМПИАДЫ • ШКОЛЬНАЯ ФИЗИКА</div>
          <h1 className="hero-title">
            <span className="hero-title__line">
              <span className="hero-title__word">НЕ УЧИ</span>
              <span className="hero-title__word">ФИЗИКУ.</span>
            </span>
            <span className="hero-title__line hero-title__accent">
              <span className="hero-title__word">ПОЙМИ</span>
              <span className="hero-title__word">ЕЁ.</span>
            </span>
          </h1>
          <p className="hero-lead">
            Секрет не в сотне формул, а в понимании связей. Показываем, откуда всё берётся, как думать в задачах и как
            перестать теряться в темах.
          </p>

          <div className="hero-actions">
            <a className="button button--light" href={legalConfig.telegramContact} target="_blank" rel="noreferrer">
              Оставить заявку в Telegram
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button--ghost" href={legalConfig.telegramChannel} target="_blank" rel="noreferrer">
              Telegram-канал
            </a>
          </div>

          <div className="hero-chip-row" aria-label="Кому подходит">
            {heroAudienceChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Преподаватели PRIME ACADEMY">
          <div className="hero-glow" aria-hidden="true"></div>
          <PhotoFrame
            src="./images/kirill-hero.jpg"
            alt="Кирилл Алексеевич, преподаватель физики"
            name="Кирилл"
            note="положи фото в public/images/kirill-hero.jpg"
            className="hero-photo hero-photo--kirill"
            imagePosition="center 35%"
            loading="eager"
          />
          <PhotoFrame
            src="./images/ira-hero.jpg"
            alt="Ирина Даниловна, преподаватель физики"
            name="Ирина"
            note="положи фото в public/images/ira-hero.jpg"
            className="hero-photo hero-photo--ira"
            imagePosition="center 30%"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

function AudienceSection() {
  return (
    <section className="page-section" id="audience">
      <div className="section-shell">
        <SectionHeading
          eyebrow="кому подойдет"
          title="Если физика пока выглядит как хаос, мы соберем ее в систему"
          text="Ученик должен видеть не набор формул, а карту: что известно, что нужно найти и какая идея ведет к решению."
        />

        <div className="card-grid card-grid--four">
          {audienceCards.map((card) => {
            const Icon = card.icon
            return (
              <article className="info-card" key={card.title}>
                <div className="card-icon">
                  <Icon aria-hidden="true" />
                </div>
                <span className="card-tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function DirectionsSection() {
  return (
    <section className="page-section page-section--tinted" id="directions">
      <div className="section-shell">
        <SectionHeading
          eyebrow="направления"
          title="Четыре трека подготовки. Один принцип: понять физику до сути"
          text="Все направления доступны сразу, но после заявки мы поможем выбрать маршрут под класс, цель и уровень."
        />

        <div className="direction-grid">
          {directions.map((direction) => {
            const Icon = direction.icon
            return (
              <article className="direction-card" key={direction.title}>
                <div className="direction-card__top">
                  <Icon aria-hidden="true" />
                  <span>{direction.accent}</span>
                </div>
                <h3>{direction.title}</h3>
                <p>{direction.audience}</p>
                <ul>
                  {direction.includes.map((item) => (
                    <li key={item}>
                      <CheckCircle2 aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={legalConfig.telegramContact} target="_blank" rel="noreferrer">
                  Оставить заявку
                  <ArrowRight aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function LearningSection() {
  return (
    <section className="page-section page-section--dark" id="format">
      <div className="section-shell">
        <SectionHeading
          eyebrow="формат"
          title="Как проходит обучение"
          text="Не прыгаем сразу в варианты. Сначала собираем уровень, потом ведем ученика по понятному маршруту."
          light
        />

        <div className="roadmap">
          {learningSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <article className="roadmap-step" key={step.title}>
                <div className="roadmap-number">0{index + 1}</div>
                <Icon aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TeachersSection() {
  return (
    <section className="page-section" id="teachers">
      <div className="section-shell">
        <SectionHeading
          eyebrow="преподаватели"
          title="Те, кто сам прошел сильную физику и умеет объяснять ее человеческим языком"
          text="Кирилл и Ирина учатся в НИЯУ МИФИ, сдали физику на 98 и прошли олимпиадный путь. На MVP занятия ведут лично Кирилл и Ирина: ты сразу видишь людей, с которыми будешь говорить."
        />

        <div className="teachers-grid">
          {teachers.map((teacher) => (
            <article className="teacher-card" key={teacher.name}>
              <PhotoFrame
                src={teacher.image}
                alt={`${teacher.name}, ${teacher.role.toLowerCase()}`}
                name={teacher.name}
                note={`добавь фото в ${teacher.image}`}
                className="teacher-photo"
                imagePosition={teacher.imagePosition}
              />

              <div className="teacher-content">
                <span>{teacher.role}</span>
                <h3>{teacher.name}</h3>
                <p className="teacher-quote">{teacher.quote}</p>

                <div className="teacher-facts">
                  {teacher.facts.map((fact) => (
                    <strong key={fact}>{fact}</strong>
                  ))}
                </div>

                <ul>
                  {teacher.strengths.map((strength) => (
                    <li key={strength}>
                      <CheckCircle2 aria-hidden="true" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FormatSection() {
  return (
    <section className="page-section page-section--tinted" id="pricing">
      <div className="section-shell">
        <SectionHeading
          eyebrow="форматы"
          title="Без цен на витрине: сначала цель, потом условия"
          text="Для MVP не добавляем оплату и кнопку Купить. Условия, расписание и стоимость обсуждаются после заявки в Telegram."
        />

        <div className="card-grid card-grid--three">
          {formatCards.map((card) => {
            const Icon = card.icon
            return (
              <article className="format-card" key={card.title}>
                <Icon aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <ul>
                  {card.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <a href={legalConfig.telegramContact} target="_blank" rel="noreferrer">
                  Узнать условия
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AfterRequestSection() {
  return (
    <section className="page-section">
      <div className="section-shell">
        <SectionHeading
          eyebrow="после заявки"
          title="Понятный сценарий без кабинетов, корзин и автопродаж"
          text="Ученик оставляет Telegram, а дальше мы вручную связываемся и спокойно объясняем формат."
        />

        <div className="after-grid">
          {afterRequestSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <article className="after-step" key={step.title}>
                <span>{index + 1}</span>
                <Icon aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function LeadSection() {
  return (
    <section className="lead-section" id="lead">
      <div className="section-shell lead-shell">
        <div className="lead-copy">
          <span className="lead-label">заявка</span>
          <h2>Напиши Кириллу в Telegram, чтобы обсудить подготовку</h2>
          <p>
            Для быстрого MVP сайт не собирает данные через форму. Первый контакт проходит в Telegram: так проще,
            быстрее и безопаснее для запуска.
          </p>
          <div className="lead-note">
            <ShieldCheck aria-hidden="true" />
            <span>Сайт не принимает оплату, не создает личный кабинет, не использует cookies и не отправляет заявки.</span>
          </div>
        </div>
        <TelegramLead />
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="page-section" id="faq">
      <div className="section-shell faq-shell">
        <SectionHeading
          eyebrow="faq"
          title="Коротко о важном"
          text="Ответы на вопросы, которые обычно возникают перед первой заявкой."
        />

        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand brand--footer" href="#top">
          <span>PRIME</span>
          <strong>ACADEMY</strong>
        </a>
        <p>
          Онлайн-подготовка и репетиторские занятия по физике для ЕГЭ, ОГЭ, олимпиад и уверенной школьной базы.
        </p>
      </div>

      <div className="footer-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href="https://t.me/physicspace" target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          {legalConfig.telegramChannelLabel}
        </a>
        <a href={legalConfig.telegramContact} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          {legalConfig.telegramContactLabel}
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
        <small>
          Информация на сайте не является публичной офертой. Условия занятий обсуждаются индивидуально.
          <br />
          TODO перед публикацией: заполнить домен, дату документов и ИНН при необходимости.
        </small>
      </div>
    </footer>
  )
}

export default App
