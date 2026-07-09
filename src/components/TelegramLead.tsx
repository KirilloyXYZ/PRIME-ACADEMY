import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react'
import { legalConfig } from '../config/legal'

export function TelegramLead() {
  return (
    <div className="telegram-lead-card">
      <div className="telegram-lead-card__top">
        <span>без формы на сайте</span>
        <MessageCircle aria-hidden="true" />
      </div>

      <h3>Как оставить заявку</h3>
      <ol>
        <li>Нажми кнопку ниже и открой Telegram Кирилла.</li>
        <li>Напиши класс, цель подготовки и направление: ЕГЭ, ОГЭ, олимпиады или школьная физика.</li>
        <li>Кирилл ответит лично, уточнит уровень и расскажет формат, расписание и условия.</li>
      </ol>

      <div className="telegram-safety-note">
        <ShieldCheck aria-hidden="true" />
        <p>
          Не отправляйте паспортные данные, адрес, медицинскую информацию и другие лишние персональные данные. Если
          ученику меньше 14 лет, обращение должен отправить родитель или законный представитель.
        </p>
      </div>

      <div className="telegram-lead-actions">
        <a className="button button--dark" href={legalConfig.telegramContact} target="_blank" rel="noreferrer">
          Оставить заявку
          <ArrowRight aria-hidden="true" />
        </a>
        <a className="button button--outline" href={legalConfig.telegramChannel} target="_blank" rel="noreferrer">
          Telegram-канал
        </a>
      </div>

      <p className="telegram-lead-card__fineprint">
        Заявка не является покупкой и не обязывает оплачивать занятия. Сайт не принимает оплату, не создает личный
        кабинет и не отправляет персональные данные через форму.
      </p>
    </div>
  )
}
