import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { learningOutputs, learningStages } from '../../content'
import { SectionHeading } from '../ui/SectionHeading'

export function LearningSystemSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStage = learningStages[activeIndex]
  const ActiveIcon = activeStage.icon

  return (
    <section className="page-section learning-section" id="learning">
      <div className="section-shell learning-shell">
        <SectionHeading
          eyebrow="как мы учим"
          title="Один маршрут: понять, закрепить, исправить"
          text="Здесь объединены методика и индивидуальный маршрут. Ученик не просто слушает объяснение, а проходит цикл: диагностика, модель темы, практика, домашка, пробник и корректировка плана."
          light
        />

        <div className="learning-lab">
          <div className="learning-tabs" role="tablist" aria-label="Этапы обучения">
            {learningStages.map((stage, index) => (
              <button
                key={stage.title}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls="learning-panel"
                className={index === activeIndex ? 'learning-tab learning-tab--active' : 'learning-tab'}
                onClick={() => setActiveIndex(index)}
              >
                <span>{stage.eyebrow}</span>
                {stage.title}
              </button>
            ))}
          </div>

          <article className="learning-panel" id="learning-panel" role="tabpanel">
            <div className="learning-panel__icon">
              <ActiveIcon aria-hidden="true" />
            </div>
            <span>{activeStage.eyebrow}</span>
            <h3>{activeStage.title}</h3>
            <p>{activeStage.text}</p>
            <code>{activeStage.marker}</code>
          </article>

          <div className="learning-output">
            <h3>Что остаётся после занятия</h3>
            <ul>
              {learningOutputs.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
