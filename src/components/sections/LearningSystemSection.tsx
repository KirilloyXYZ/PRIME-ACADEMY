import { CheckCircle2 } from 'lucide-react'
import { learningMethodBenefits, learningStages } from '../../content'

export function LearningSystemSection() {
  return (
    <section className="page-section learning-section" id="learning">
      <div className="section-shell learning-shell">
        <div className="learning-heading">
          <span>вузовский формат для школьников</span>
          <h2>Лекция, семинар, практика — один понятный цикл обучения</h2>
          <p>
            Сначала ученик разбирается в теории, затем применяет её на живом семинаре, закрепляет в домашней работе и
            регулярно проверяет знания. На каждом этапе он получает обратную связь и понимает, что делать дальше.
          </p>
        </div>

        <div className="learning-steps" aria-label="Цикл обучения PRIME ACADEMY">
          {learningStages.map((stage) => {
            const StageIcon = stage.icon

            return (
              <article className={stage.featured ? 'learning-step learning-step--featured' : 'learning-step'} key={stage.id}>
                <div className="learning-step__top">
                  <span>{stage.number}</span>
                  <StageIcon aria-hidden="true" />
                </div>
                {stage.featured ? <strong className="learning-step__badge">Главное преимущество</strong> : null}
                <small>{stage.label}</small>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
                {stage.note ? <p className="learning-step__note">{stage.note}</p> : null}
                <code>{stage.marker}</code>
              </article>
            )
          })}
        </div>

        <aside className="learning-benefit-strip" aria-labelledby="learning-benefit-title">
          <h3 id="learning-benefit-title">Почему такой формат работает</h3>
          <div>
            {learningMethodBenefits.map((benefit) => (
              <article key={benefit.title}>
                <CheckCircle2 aria-hidden="true" />
                <strong>{benefit.title}</strong>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
