import { useEffect } from 'react'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { teachers, type Course } from '../content'
import { withTelegramBotStart } from '../config/site'
import { ButtonLink } from '../components/ui/ButtonLink'
import { ResponsiveImage } from '../components/ui/ResponsiveImage'

type CoursePageProps = {
  course: Course
}

export function CoursePage({ course }: CoursePageProps) {
  useEffect(() => {
    document.title = `${course.title} — PRIME ACADEMY`
    setMetaDescription(`${course.title}: ${course.short} ${course.teacherLine}`)
  }, [course])

  return (
    <section className="course-page">
      <div className="course-page__shell">
        <Link className="back-link" to="/#courses">
          <ArrowLeft aria-hidden="true" />
          Назад к курсам
        </Link>

        <div className="course-page__hero">
          <div className="course-page__copy">
            <span>{course.badge}</span>
            <h1>{course.title}</h1>
            <p>{course.audience}</p>

            <div className="course-page__facts" aria-label="Кратко о курсе">
              <div>
                <strong>{course.pricePrefix || 'цена'}</strong>
                <b>{course.priceValue}</b>
                <small>{course.pricePeriod}</small>
              </div>
              <div>
                <strong>формат</strong>
                <b>{course.format}</b>
                <small>{course.duration}</small>
              </div>
              <div>
                <strong>цель</strong>
                <b>{course.goal}</b>
              </div>
            </div>

            <div className="course-page__actions">
              <ButtonLink href={withTelegramBotStart(course.botStart)} variant="primary" className="course-page__diagnostic-button">
                Записаться на диагностику
                <small>Бесплатно</small>
              </ButtonLink>
              <ButtonLink href="/#courses" variant="ghost" withArrow={false}>
                Все курсы
              </ButtonLink>
            </div>
          </div>

          <div className="course-page__media">
            <ResponsiveImage
              src={course.image}
              alt={course.imageAlt}
              position={course.imagePosition}
              scale={course.imageScale}
              loading="eager"
            />
          </div>
        </div>

        <div className="course-page__intro-grid">
          <InfoCard title="Кому подходит" items={course.suitableFor} />
          <InfoCard title="Что входит" items={course.includes} />
          <article className="course-page__card course-page__card--accent">
            <span>два преподавателя</span>
            <h2>Не выбор между ними, а часть системы</h2>
            <p>{course.teacherLine}</p>
            <ul>
              {course.teacherRoles.map((role) => (
                <li key={role}>
                  <CheckCircle2 aria-hidden="true" />
                  {role}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <section className="course-page__seminar" aria-labelledby="course-seminar-title">
          <div>
            <span>{course.seminar.enabled ? 'живые семинары' : 'живой разбор'}</span>
            <h2 id="course-seminar-title">
              {course.seminar.enabled ? 'Главное в курсе — живые семинары' : 'Главное в формате — разбор до понимания'}
            </h2>
            <p>{course.seminar.difference}</p>
            {course.giftNote ? <strong>{course.giftNote}</strong> : null}
          </div>

          <div className="seminar-steps">
            <article>
              <span>до</span>
              <p>{course.seminar.before}</p>
            </article>
            <article>
              <span>во время</span>
              <p>{course.seminar.during}</p>
            </article>
            <article>
              <span>после</span>
              <p>{course.seminar.after}</p>
            </article>
          </div>
        </section>

        <section className="course-page__program" aria-labelledby="course-program-title">
          <div className="course-page__section-head">
            <span>программа</span>
            <h2 id="course-program-title">Что будем проходить</h2>
            <p>Не стена тем, а модули с понятным навыком и контрольной точкой.</p>
          </div>

          <div className="program-list">
            {course.program.map((module, index) => (
              <details key={module.title} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {module.title}
                </summary>
                <div>
                  <p>
                    <strong>Темы:</strong> {module.topics.join(', ')}.
                  </p>
                  <p>
                    <strong>Навык:</strong> {module.skill}.
                  </p>
                  <p>
                    <strong>Контроль:</strong> {module.checkpoint}.
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="course-page__duo" aria-labelledby="course-duo-title">
          <div className="course-page__section-head">
            <span>команда</span>
            <h2 id="course-duo-title">Курс ведут оба преподавателя</h2>
            <p>Кирилл Алексеевич и Ирина Даниловна работают в одной программе PRIME ACADEMY, чтобы ученик видел и логику задачи, и структуру темы.</p>
          </div>

          <div className="course-teacher-grid">
            {teachers.map((teacher) => (
              <article key={teacher.id}>
                <div>
                  <ResponsiveImage src={teacher.image} alt={teacher.imageAlt} position={teacher.imagePosition} />
                </div>
                <span>{teacher.role}</span>
                <h3>{teacher.name}</h3>
                <p>{teacher.quote}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="course-page__result" aria-labelledby="course-result-title">
          <div>
            <span>результат без обещаний магии</span>
            <h2 id="course-result-title">Что должно измениться в мышлении ученика</h2>
            <p>Мы не гарантируем конкретный балл. Показываем навыки, которые можно развивать и проверять на задачах.</p>
          </div>
          <ul>
            {course.outcomes.map((outcome) => (
              <li key={outcome}>
                <CheckCircle2 aria-hidden="true" />
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        <section className="course-page__final" aria-labelledby="course-final-title">
          <div>
            <span>{course.badge}</span>
            <h2 id="course-final-title">{course.title}</h2>
            <p>{course.short}</p>
            <div className="course-page__price-line">
              {course.pricePrefix ? <span>{course.pricePrefix}</span> : null}
              <strong>{course.priceValue}</strong>
              <small>{course.pricePeriod}</small>
            </div>
          </div>

          <div className="course-page__faq">
            {course.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
            <ButtonLink href={withTelegramBotStart(course.botStart)} variant="primary" className="course-page__diagnostic-button">
              Записаться на диагностику
              <small>Бесплатно</small>
            </ButtonLink>
          </div>
        </section>
      </div>
    </section>
  )
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="course-page__card">
      <span>{title}</span>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <CheckCircle2 aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

function setMetaDescription(content: string) {
  let meta = document.querySelector('meta[name="description"]')

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    document.head.append(meta)
  }

  meta.setAttribute('content', content)
}
