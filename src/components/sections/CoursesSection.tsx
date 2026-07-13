import { useRef } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { courses, teachers } from '../../content'
import { ButtonLink } from '../ui/ButtonLink'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { SectionHeading } from '../ui/SectionHeading'

export function CoursesSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollCourses(direction: 'prev' | 'next') {
    const track = trackRef.current
    if (!track) {
      return
    }

    track.scrollBy({
      left: direction === 'next' ? 390 : -390,
      behavior: 'smooth',
    })
  }

  return (
    <section className="page-section courses-section" id="courses">
      <div className="section-shell">
        <div className="courses-heading">
          <SectionHeading
            eyebrow="курсы"
            title="Выбери курс, а детали подберём на диагностике"
            text="Курсы разделены по цели: экзамен, олимпиада, школьная база или индивидуальный маршрут. В карточке сразу видны цена, формат и что внутри."
          />
        </div>

        <div className="course-track" ref={trackRef}>
          {courses.map((course, index) => (
            <article className="course-card" key={course.id}>
              <div className="course-card__media">
                <ResponsiveImage
                  src={course.image}
                  alt={course.imageAlt}
                  position={course.imagePosition}
                  scale={course.imageScale}
                />
                <span>{course.badge}</span>
              </div>
              <div className="course-card__body">
                <div className="course-card__tags">
                  {course.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{course.title}</h3>
                <p>{course.short}</p>
                <ul className="course-card__inside">
                  {course.highlights.slice(0, 3).map((item) => (
                    <li key={item}>
                      <CheckCircle2 aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="course-card__teachers">
                  <div aria-hidden="true">
                    {teachers.map((teacher) => (
                      <ResponsiveImage key={teacher.id} src={teacher.image} alt="" position={teacher.imagePosition} />
                    ))}
                  </div>
                  <span>{course.teacherLine}</span>
                </div>
                <div className="course-card__price">
                  {course.pricePrefix ? <span>{course.pricePrefix}</span> : null}
                  <strong>{course.priceValue}</strong>
                  <small>{course.pricePeriod}</small>
                </div>
                <ButtonLink href={`/courses/${course.id}`} variant="primary" className="course-card__link" withArrow={false}>
                  Посмотреть программу
                </ButtonLink>
              </div>
              <span className="course-card__count" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
            </article>
          ))}
        </div>

        <div className="course-slider-footer">
          <span>01 / {String(courses.length).padStart(2, '0')}</span>
          <div className="course-controls" aria-label="Листать курсы">
            <button type="button" onClick={() => scrollCourses('prev')} aria-label="Предыдущие курсы">
              <ArrowLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollCourses('next')} aria-label="Следующие курсы">
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
