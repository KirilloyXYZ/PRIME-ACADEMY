import { useRef } from 'react'
import { ArrowRight, CheckCircle2, Mail, Menu, MessageCircle, ShieldCheck } from 'lucide-react'
import {
  afterRequestSteps,
  audienceCards,
  courseCards,
  directions,
  faqItems,
  heroAudienceChips,
  includedItems,
  methodSteps,
  learningSteps,
  navItems,
  pricingPlans,
  teachers,
  trialCards,
} from './content'
import { legalConfig, legalLinks } from './config/legal'
import { withTelegramBotStart } from './config/site'
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
      <TrialLessonSection />
      <TelegramMaterialsBanner />
      <PricingSection />
      <CourseCarouselSection />
      <AudienceSection />
      <MethodSection />
      <DirectionsSection />
      <LearningSection />
      <TeachersSection />
      <IncludedSection />
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
          Записаться бесплатно
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
              <span className="hero-title__word">НЕ ЗУБРИ</span>
              <span className="hero-title__word">ФИЗИКУ —</span>
            </span>
            <span className="hero-title__line hero-title__accent">
              <span className="hero-title__word">СОБЕРИ ЕЁ</span>
            </span>
            <span className="hero-title__line hero-title__accent">
              <span className="hero-title__word">В СИСТЕМУ.</span>
            </span>
          </h1>
          <p className="hero-lead">
            Онлайн-подготовка к ОГЭ, ЕГЭ, олимпиадам и школьной физике с Кириллом и Ириной.
          </p>

          <div className="hero-actions">
            <a className="button button--light" href={legalConfig.telegramContact} target="_blank" rel="noreferrer">
              Записаться бесплатно
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="#pricing">
              Посмотреть тарифы
            </a>
          </div>

          <div className="hero-chip-row" aria-label="Кому подходит">
            {heroAudienceChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Преподаватели PRIME ACADEMY">
          <div className="hero-physics-layer" aria-hidden="true">
            <span className="schema-node schema-node--one"></span>
            <span className="schema-node schema-node--two"></span>
            <span className="schema-node schema-node--three"></span>
            <span className="schema-line schema-line--one"></span>
            <span className="schema-line schema-line--two"></span>
            <span className="orbit-line orbit-line--one"></span>
          </div>
          <div className="hero-glow" aria-hidden="true"></div>
          <PhotoFrame
            src="./images/kirill-hero.jpg"
            alt="Кирилл Кузнецов, преподаватель физики"
            name="Кирилл"
            note="преподаватель PRIME ACADEMY"
            className="hero-photo hero-photo--kirill"
            imagePosition="center 35%"
            loading="eager"
          />
          <PhotoFrame
            src="./images/ira-hero.jpg"
            alt="Ирина Данилова, преподаватель физики"
            name="Ирина"
            note="преподаватель PRIME ACADEMY"
            className="hero-photo hero-photo--ira"
            imagePosition="center 30%"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

function TrialLessonSection() {
  return (
    <section className="page-section trial-section" id="trial">
      <div className="section-shell trial-shell">
        <div className="trial-copy">
          <SectionHeading
            eyebrow="бесплатный старт"
            title="Первое индивидуальное занятие — бесплатно"
            text="Познакомимся, посмотрим уровень, найдём пробелы и покажем, как будет строиться подготовка. Без оплаты и обязательств."
          />
          <a className="button button--dark" href={legalConfig.telegramContact} target="_blank" rel="noreferrer">
            Записаться на бесплатное занятие
            <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="trial-card-grid">
          {trialCards.map((card) => {
            const Icon = card.icon
            return (
              <article className="trial-card" key={card.title}>
                <Icon aria-hidden="true" />
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

function TelegramMaterialsBanner() {
  return (
    <section className="materials-section">
      <div className="section-shell">
        <div className="materials-banner">
          <div>
            <span className="lead-label">telegram-канал</span>
            <h2>Бесплатный урок и материалы по физике</h2>
            <p>Разборы, схемы, пробники и полезные материалы для ОГЭ, ЕГЭ и олимпиад.</p>
          </div>
          <a className="button button--light" href={legalConfig.telegramChannel} target="_blank" rel="noreferrer">
            Telegram-канал
            <ArrowRight aria-hidden="true" />
          </a>
          <span className="paper-plane paper-plane--one" aria-hidden="true"></span>
          <span className="paper-plane paper-plane--two" aria-hidden="true"></span>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section className="page-section page-section--tinted" id="pricing">
      <div className="section-shell">
        <SectionHeading
          eyebrow="тарифы"
          title="Выбери формат подготовки"
          text="Можно заниматься индивидуально, идти на курс с семинарами или учиться по лекциям с проверкой домашних заданий."
        />

        <div className="pricing-grid">
          {pricingPlans.map((plan) => {
            const Icon = plan.icon
            return (
              <article className={`pricing-card ${plan.highlighted ? 'pricing-card--featured' : ''}`} key={plan.title}>
                <div className="pricing-card__image">
                  <img src={plan.image} alt="" loading="lazy" />
                  <span>{plan.badge}</span>
                </div>
                <div className="pricing-card__body">
                  <Icon aria-hidden="true" />
                  <h3>{plan.title}</h3>
                  <strong className="pricing-price">{plan.price}</strong>
                  <p>{plan.description}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {plan.teacherOptions ? (
                    <div className="teacher-pick" aria-label="Выбор преподавателя">
                      {plan.teacherOptions.map((option) => (
                        <a key={option.name} href={withTelegramBotStart(option.botStart)} target="_blank" rel="noreferrer">
                          <img src={option.image} alt="" loading="lazy" />
                          <span>{option.name}</span>
                        </a>
                      ))}
                    </div>
                  ) : null}

                  <a className="button button--dark" href={withTelegramBotStart(plan.botStart)} target="_blank" rel="noreferrer">
                    Записаться бесплатно
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CourseCarouselSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollCourses(direction: 'prev' | 'next') {
    const track = trackRef.current
    if (!track) {
      return
    }

    track.scrollBy({
      left: direction === 'next' ? 380 : -380,
      behavior: 'smooth',
    })
  }

  return (
    <section className="page-section courses-section" id="courses">
      <div className="section-shell">
        <div className="carousel-heading">
          <SectionHeading
            eyebrow="курсы"
            title="Курсы PRIME ACADEMY"
            text="Выбери направление подготовки. После клика бот уточнит класс, цель и удобный формат."
          />
          <div className="carousel-controls" aria-label="Навигация по курсам">
            <button type="button" onClick={() => scrollCourses('prev')} aria-label="Предыдущие курсы">
              ‹
            </button>
            <button type="button" onClick={() => scrollCourses('next')} aria-label="Следующие курсы">
              ›
            </button>
          </div>
        </div>

        <div className="course-track" ref={trackRef}>
          {courseCards.map((course) => (
            <article className="course-card" key={course.title}>
              <div className="course-card__media">
                <img src={course.image} alt="" loading="lazy" style={{ objectPosition: course.imagePosition }} />
                <span>{course.badge}</span>
              </div>
              <div className="course-card__body">
                <h3>{course.title}</h3>
                <strong>{course.price}</strong>
                <div className="course-tags">
                  {course.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href={withTelegramBotStart(course.botStart)} target="_blank" rel="noreferrer">
                  Записаться
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
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
          title="Если физика пока выглядит как хаос — соберём её в систему"
          text="Ученик должен видеть не набор формул, а карту: что известно, что нужно найти и какая идея ведёт к решению."
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
                <span className="card-signal">{card.signal}</span>
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

function MethodSection() {
  return (
    <section className="page-section page-section--method" id="method">
      <div className="section-shell">
        <SectionHeading
          eyebrow="методика"
          title="Как мы разбираем задачу"
          text="Не подставляем формулу наугад. Сначала строим модель, потом выбираем закон и только после этого считаем."
          light
        />

        <div className="method-map" aria-label="Схема разбора физической задачи">
          <article className="method-terminal method-terminal--input">
            <span>Условие</span>
            <strong>текст → схема</strong>
            <p>Выделяем процесс, величины и вопрос задачи.</p>
          </article>

          <div className="method-rail">
            {methodSteps.map((step, index) => (
              <article className="method-node" key={step.title}>
                <span className="method-node__number">0{index + 1}</span>
                <span className="method-node__formula">{step.formula}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <article className="method-terminal method-terminal--output">
            <span>Ответ + проверка</span>
            <strong>размерность + смысл</strong>
            <p>Финальный ответ должен быть не только посчитан, но и понятен.</p>
          </article>
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
          title="Четыре трека подготовки. Один принцип: понять физику до сути."
          text="После короткой диагностики подбираем маршрут под класс, цель и уровень ученика."
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
                <div className="direction-signal" aria-hidden="true">
                  {direction.signal}
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
                  Записаться бесплатно
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
          text="Не прыгаем сразу в варианты. Сначала находим пробелы, потом ведём ученика по понятному маршруту."
          light
        />

        <div className="roadmap">
          {learningSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <article className="roadmap-step" key={step.title}>
                <div className="roadmap-number">0{index + 1}</div>
                <span className="roadmap-signal">{step.signal}</span>
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
          title="Те, кто сам прошёл сильную физику и умеет объяснять её человеческим языком"
          text="Кирилл и Ирина учатся в НИЯУ МИФИ, сдали физику на 98 и прошли олимпиадный путь. На старте занятия ведут лично Кирилл и Ирина: ученик сразу видит людей, с которыми будет говорить."
        />

        <div className="teachers-grid">
          {teachers.map((teacher) => (
            <article className="teacher-card" key={teacher.name}>
              <PhotoFrame
                src={teacher.image}
                alt={`${teacher.name}, ${teacher.role.toLowerCase()}`}
                name={teacher.name}
                note="преподаватель PRIME ACADEMY"
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

                <a className="teacher-cta" href={withTelegramBotStart(teacher.botStart)} target="_blank" rel="noreferrer">
                  {teacher.ctaLabel}
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function IncludedSection() {
  return (
    <section className="page-section page-section--tinted" id="included">
      <div className="section-shell">
        <SectionHeading
          eyebrow="внутри обучения"
          title="Не просто лекции — система подготовки"
          text="В каждом формате есть структура: теория, практика, домашние задания, обратная связь и регулярная проверка результата."
        />

        <div className="included-grid">
          {includedItems.map((item) => {
            const Icon = item.icon
            return (
              <article className="included-card" key={item.title}>
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
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
          eyebrow="старт"
          title="Как начать обучение"
          text="Выбери формат, нажми кнопку и ответь на несколько вопросов в Telegram-боте. Мы посмотрим заявку и предложим ближайший шаг."
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

        <div className="after-cta">
          <a className="button button--dark" href={legalConfig.telegramContact} target="_blank" rel="noreferrer">
            Записаться бесплатно
            <ArrowRight aria-hidden="true" />
          </a>
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
          <span className="lead-label">запись</span>
          <h2>Запишись на бесплатное занятие в Telegram-боте</h2>
          <p>Ответь на несколько вопросов: класс, цель, направление и удобное время. Мы посмотрим заявку и предложим ближайший шаг.</p>
          <div className="lead-note">
            <ShieldCheck aria-hidden="true" />
            <span>Запись проходит через Telegram-бот PRIME ACADEMY без формы и оплаты на сайте.</span>
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
          text="Ответы на вопросы, которые обычно возникают перед первым сообщением."
        />
        <div className="faq-note">
          Первое сообщение не обязывает оплачивать занятия.
        </div>

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
        <a href={legalConfig.telegramChannel} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          Telegram-канал с материалами
        </a>
        <a href={legalConfig.telegramContact} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          Запись через Telegram-бот
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
          Информация на сайте не является публичной офертой. Условия обучения уточняются после заявки.
        </small>
      </div>
    </footer>
  )
}

export default App
