import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { courses, teachers, type Course, type Teacher } from '../../content'
import { ButtonLink } from '../ui/ButtonLink'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { SectionHeading } from '../ui/SectionHeading'

const teacherById = new Map(teachers.map((teacher) => [teacher.id, teacher]))

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
          />
        </div>

        <div className="course-track" ref={trackRef}>
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} priority={index === 0} />
          ))}
        </div>

        <div className="course-slider-footer">
          <span>{courses.length} направлений</span>
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

type CourseCardProps = {
  course: Course
  priority?: boolean
}

function CourseCard({ course, priority = false }: CourseCardProps) {
  const courseTeachers = course.teacherIds
    .map((teacherId) => teacherById.get(teacherId))
    .filter((teacher): teacher is Teacher => Boolean(teacher))
  const teacherNames = courseTeachers.map((teacher) => teacher.name.split(' ')[0]).join(' · ')

  return (
    <article className="course-card">
      <div className={`course-card__teachers-media course-card__teachers-media--${courseTeachers.length}`}>
        {courseTeachers.map((teacher) => {
          const imageConfig = course.teacherImagePositions[teacher.id]

          return (
            <div className={`course-card__teacher-panel course-card__teacher-panel--${teacher.id}`} key={teacher.id}>
              <ResponsiveImage
                src={teacher.image}
                alt={teacher.imageAlt}
                position={imageConfig?.imagePosition ?? teacher.imagePosition}
                scale={imageConfig?.imageScale ?? teacher.imageScale}
                sources={teacher.imageSources}
                width={teacher.imageWidth}
                height={teacher.imageHeight}
                sizes="(max-width: 920px) 45vw, 320px"
                loading={priority ? 'eager' : 'lazy'}
                fetchPriority={priority ? 'high' : undefined}
                className={`course-card__teacher-image course-card__teacher-image--${teacher.id}`}
              />
            </div>
          )
        })}
      </div>

      <div className="course-card__body">
        <span className="course-card__eyebrow">{course.cardEyebrow}</span>
        <h3>{course.title}</h3>
        <p>{course.cardDescription}</p>

        <ul className="course-card__features">
          {course.cardFeatures.slice(0, 3).map((feature) => (
            <li key={feature}>
              <Check aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {courseTeachers.length ? (
          <div className="course-card__teachers">
            <div className="course-card__avatars" aria-hidden="true">
              {courseTeachers.map((teacher) => {
                const imageConfig = course.teacherImagePositions[teacher.id]

                return (
                  <ResponsiveImage
                    key={teacher.id}
                    src={teacher.image}
                    alt=""
                    position={imageConfig?.avatarPosition ?? imageConfig?.imagePosition ?? teacher.imagePosition}
                    scale={imageConfig?.avatarScale ?? teacher.imageScale}
                    sources={teacher.imageSources}
                    width={teacher.imageWidth}
                    height={teacher.imageHeight}
                    sizes="36px"
                    className="course-card__avatar-image"
                  />
                )
              })}
            </div>
            <span>{teacherNames}</span>
          </div>
        ) : null}

        <div className="course-card__footer">
          <strong className="course-card__price">{course.price}</strong>
          <ButtonLink href={`/courses/${course.id}`} variant="primary" className="course-card__link">
            Посмотреть программу
          </ButtonLink>
        </div>
      </div>
    </article>
  )
}
