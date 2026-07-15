import { CheckCircle2 } from 'lucide-react'
import { teachers } from '../../content'
import { ResponsiveImage } from '../ui/ResponsiveImage'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'

export function TeachersSection() {
  return (
    <section className="page-section teachers-section" id="teachers">
      <div className="section-shell">
        <SectionHeading
          eyebrow="преподаватели"
          title="Те, кто будет объяснять тебе физику"
        />

        <div className="teacher-showcase">
          {teachers.map((teacher) => (
            <article className="teacher-profile" key={teacher.id}>
              <div className="teacher-profile__media">
                <ResponsiveImage
                  src={teacher.image}
                  alt={teacher.imageAlt}
                  position={teacher.imagePosition}
                  scale={teacher.imageScale}
                  sources={teacher.imageSources}
                  width={teacher.imageWidth}
                  height={teacher.imageHeight}
                  sizes="(max-width: 920px) calc(100vw - 40px), 44vw"
                />
              </div>

              <div className="teacher-profile__content">
                <span className="teacher-role">{teacher.role}</span>
                <h3>{teacher.name}</h3>
                <p className="teacher-quote">{teacher.quote}</p>

                <div className="teacher-tags">
                  {teacher.facts.map((fact) => (
                    <Tag key={fact}>{fact}</Tag>
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
