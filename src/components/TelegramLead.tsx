import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react'
import { legalConfig } from '../config/legal'

export function TelegramLead() {
  return (
    <div className="telegram-lead-card">
      <div className="telegram-lead-card__top">
        <span>telegram-бот</span>
        <MessageCircle aria-hidden="true" />
      </div>

      <h3>Как оставить заявку</h3>
      <p className="telegram-lead-card__intro">
        Нажми кнопку ниже и открой Telegram-бот PRIME ACADEMY. Бот уточнит класс, цель подготовки и формат:
        индивидуально, курс с семинарами или курс без семинаров.
      </p>
      <p className="telegram-lead-card__intro">
        После этого мы свяжемся с тобой и предложим бесплатное пробное занятие или подходящий старт курса.
      </p>

      <div className="telegram-safety-note">
        <ShieldCheck aria-hidden="true" />
        <p>
          Не отправляйте паспортные данные, адрес, медицинскую информацию и другие лишние персональные данные. Если
          ученику меньше 14 лет, первый контакт лучше сделать родителю или законному представителю.
        </p>
      </div>

      <div className="telegram-lead-actions">
        <a className="button button--dark" href={legalConfig.telegramContact} target="_blank" rel="noreferrer">
          Записаться бесплатно
          <ArrowRight aria-hidden="true" />
        </a>
        <a className="button button--outline" href={legalConfig.telegramChannel} target="_blank" rel="noreferrer">
          Telegram-канал
        </a>
      </div>

      <p className="telegram-lead-card__fineprint">
        Обращение не является покупкой и не обязывает оплачивать занятия.
      </p>
    </div>
  )
}
