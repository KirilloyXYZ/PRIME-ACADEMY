import { faqItems } from '../../content'
import { SectionHeading } from '../ui/SectionHeading'

export function FaqSection() {
  return (
    <section className="page-section faq-section" id="faq">
      <div className="section-shell faq-shell">
        <SectionHeading
          eyebrow="faq"
          title="Коротко о важном"
          text="Ответы на вопросы, которые обычно появляются перед первым сообщением в бот."
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
