import { ArrowRight, CheckCircle2, Menu, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import {
  afterRequestSteps,
  audienceCards,
  directions,
  faqItems,
  formatCards,
  heroBadges,
  learningSteps,
  navItems,
  teachers,
} from './content'
import { LeadForm } from './components/LeadForm'
import { PhotoFrame } from './components/PhotoFrame'
import { SectionHeading } from './components/SectionHeading'

function App() {
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
        <a className="button button--small" href="#lead">
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
          <div className="eyebrow">
            <Sparkles aria-hidden="true" />
            физика для тех, кто хочет понимать
          </div>
          <h1>
            Физика
            <span> без зубрежки</span>
          </h1>
          <p className="hero-lead">
            Готовим к ЕГЭ, ОГЭ, олимпиадам и школьной программе через логику, задачи и понятные связи.
          </p>

          <div className="hero-badges" aria-label="Ключевые преимущества">
            {heroBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="button button--light" href="#lead">
              Оставить заявку
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="#format">
              Как проходит обучение
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Преподаватели PRIME ACADEMY">
          <div className="formula-cloud formula-cloud--one">F = ma</div>
          <div className="formula-cloud formula-cloud--two">E = hν</div>
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
          <div className="hand-note hand-note--hero">логика &gt; зубрежка</div>
          <div className="hero-proof">
            <strong>98</strong>
            <span>баллов по физике у каждого преподавателя</span>
          </div>
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
                <a href="#lead">
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
          text="Кирилл и Ирина учатся в НИЯУ МИФИ, сдали физику на 98 и прошли олимпиадный путь. На сайте нет безликих кураторов: ты сразу видишь людей, с которыми будешь говорить."
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
                <a href="#lead">Узнать условия</a>
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
          <h2>Оставь Telegram, и мы напишем тебе лично</h2>
          <p>
            Форма нужна только для первого контакта. Мы не подключаем оплату, кабинет, cookies, CRM и лишние сервисы на
            этапе MVP.
          </p>
          <div className="lead-note">
            <ShieldCheck aria-hidden="true" />
            <span>Минимум данных: имя, Telegram, класс, направление и комментарий по желанию.</span>
          </div>
        </div>
        <LeadForm />
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
        <p>Онлайн-школа физики для ЕГЭ, ОГЭ, олимпиад и уверенной школьной базы.</p>
      </div>

      <div className="footer-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href="https://t.me/physicspace" target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          t.me/physicspace
        </a>
      </div>

      <div className="legal-links" id="legal-note">
        <a href="#legal-note">Политика обработки данных</a>
        <a href="#legal-note">Согласие на обработку данных</a>
        <a href="#legal-note">Пользовательское соглашение</a>
        <small>Юридические страницы нужно заполнить перед публикацией.</small>
      </div>
    </footer>
  )
}

export default App
