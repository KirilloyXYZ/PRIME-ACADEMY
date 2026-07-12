import { CheckCircle2, ShieldCheck } from 'lucide-react'
import { withTelegramBotStart } from '../../config/site'
import { ButtonLink } from '../ui/ButtonLink'

export function LeadSection() {
  const steps = ['Уточним класс и цель', 'Посмотрим текущий уровень', 'Предложим подходящий курс или формат']

  return (
    <section className="lead-section" id="lead">
      <div className="section-shell lead-shell">
        <div className="lead-copy">
          <span className="lead-label">бесплатная диагностика</span>
          <h2>Разберём цель и подберём ближайший шаг</h2>
          <p>
            На диагностике понятно, какой курс подойдёт, где сейчас пробелы и с чего лучше начинать подготовку.
          </p>
          <div className="lead-note">
            <ShieldCheck aria-hidden="true" />
            <span>Обращение не является покупкой и не обязывает оплачивать занятия.</span>
          </div>
        </div>

        <article className="telegram-lead-card">
          <span className="lead-label">заявка</span>
          <h3>Бесплатная диагностика</h3>
          <ul className="lead-steps">
            {steps.map((step) => (
              <li key={step}>
                <CheckCircle2 aria-hidden="true" />
                {step}
              </li>
            ))}
          </ul>
          <div className="telegram-safety-note">
            <ShieldCheck aria-hidden="true" />
            <p>
              Откроется Telegram для связи. Не отправляйте паспортные данные, адрес, медицинскую информацию и другие
              лишние персональные данные.
            </p>
          </div>
          <ButtonLink href={withTelegramBotStart('final_cta')} variant="primary">
            Оставить заявку
          </ButtonLink>
        </article>
      </div>
    </section>
  )
}
