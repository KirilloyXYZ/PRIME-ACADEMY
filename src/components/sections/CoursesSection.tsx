import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { courses } from '../../content'
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
          <div className="course-controls" aria-label="Листать курсы">
            <button type="button" onClick={() => scrollCourses('prev')} aria-label="Предыдущие курсы">
              <ArrowLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollCourses('next')} aria-label="Следующие курсы">
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="course-track" ref={trackRef}>
          {courses.map((course) => (
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
                  {course.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{course.title}</h3>
                <p>{course.short}</p>
                <strong>{course.price}</strong>
                <ButtonLink href={`/courses/${course.id}`} variant="primary" className="course-card__link" withArrow={false}>
                  Подробнее
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
