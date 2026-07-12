import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import type { Course } from '../content'
import { withTelegramBotStart } from '../config/site'
import { ButtonLink } from '../components/ui/ButtonLink'
import { ResponsiveImage } from '../components/ui/ResponsiveImage'

type CoursePageProps = {
  course: Course
}

export function CoursePage({ course }: CoursePageProps) {
  return (
    <section className="course-page">
      <div className="course-page__shell">
        <a className="back-link" href="/#courses">
          <ArrowLeft aria-hidden="true" />
          Назад к курсам
        </a>

        <div className="course-page__hero">
          <div className="course-page__copy">
            <span>{course.badge}</span>
            <h1>{course.title}</h1>
            <p>{course.description}</p>

            <div className="course-page__actions">
              <ButtonLink href={withTelegramBotStart(course.botStart)} variant="light">
                Записаться на бесплатную диагностику по курсу
              </ButtonLink>
              <ButtonLink href="/#courses" variant="ghost" withArrow={false}>
                Все курсы
              </ButtonLink>
            </div>
          </div>

          <div className="course-page__media">
            <ResponsiveImage src={course.image} alt={course.imageAlt} position={course.imagePosition} scale={course.imageScale} />
          </div>
        </div>

        <div className="course-page__grid">
          <article className="course-page__card course-page__card--price">
            <span>цена</span>
            <strong>{course.price}</strong>
            <p>Финальный формат и частоту занятий подбираем после диагностики.</p>
          </article>

          <article className="course-page__card">
            <span>формат</span>
            <h2>{course.format}</h2>
            <p>{course.duration}</p>
          </article>

          <article className="course-page__card course-page__card--wide">
            <span>что внутри курса</span>
            <ul>
              {course.includes.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="course-page__card course-page__card--wide">
            <span>кому подойдёт</span>
            {course.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </article>
        </div>
      </div>
    </section>
  )
}
