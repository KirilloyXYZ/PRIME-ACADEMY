import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { legalConfig } from '../config/legal'

export type LegalPageKey = 'privacy' | 'personal-data-consent' | 'marketing-consent' | 'terms' | 'cookies'

type LegalPageData = {
  title: string
  version: string
  intro: string
  sections: Array<{
    title: string
    paragraphs?: string[]
    items?: string[]
  }>
}

const commonOperator = `${legalConfig.operatorFullName}, статус: ${legalConfig.operatorStatus}, город: ${legalConfig.operatorCity}.`

const legalPages: Record<LegalPageKey, LegalPageData> = {
  privacy: {
    title: 'Политика обработки персональных данных',
    version: legalConfig.privacyVersion,
    intro:
      'Документ описывает, какие данные могут обрабатываться при обращении по вопросам репетиторских занятий PRIME ACADEMY.',
    sections: [
      {
        title: '1. Оператор',
        paragraphs: [
          `Оператор персональных данных: ${commonOperator}`,
          `Email для обращений: ${legalConfig.operatorEmail}. Ответственный за обращения: ${legalConfig.personalDataContactName}.`,
        ],
      },
      {
        title: '2. Какие данные могут обрабатываться',
        items: [
          'имя или способ обращения, если пользователь сам сообщает его в Telegram;',
          'Telegram username или иные контактные данные, которые пользователь сам отправляет в Telegram-контакт PRIME ACADEMY;',
          'класс ученика, цель подготовки, направление занятий и комментарии по обучению;',
          'сведения, необходимые для обсуждения формата, стоимости и расписания занятий.',
        ],
      },
      {
        title: '3. Что не входит в работу сайта',
        items: [
          'оплата и расписание обсуждаются индивидуально после личного общения;',
          'сайт не требует регистрации для просмотра информации;',
          'первый контакт проходит через Telegram-контакт PRIME ACADEMY по инициативе пользователя;',
          'cookies, рекламные пиксели и системы аналитики не используются.',
        ],
      },
      {
        title: '4. Цели обработки',
        items: [
          'ответить на обращение пользователя в Telegram-контакте PRIME ACADEMY;',
          'уточнить уровень, класс, направление и цель подготовки;',
          'обсудить формат, расписание, стоимость и условия репетиторских занятий;',
          'вести дальнейшую коммуникацию по вопросу занятий, если пользователь продолжает общение.',
        ],
      },
      {
        title: '5. Несовершеннолетние',
        paragraphs: [
          'Если ученику меньше 14 лет, обращение должен отправить родитель или законный представитель. Если ученик 14-17 лет пишет самостоятельно, условия и оплату занятий рекомендуется согласовать с родителем или законным представителем.',
        ],
      },
      {
        title: '6. Лишние данные',
        paragraphs: [
          'Не отправляйте паспортные данные, адрес, медицинскую информацию, сведения о документах и другие лишние персональные данные. Для первого контакта достаточно класса, цели подготовки и направления.',
        ],
      },
      {
        title: '7. Сроки и права пользователя',
        paragraphs: [
          `Пользователь может обратиться по вопросам персональных данных на ${legalConfig.operatorEmail}. Оператор рассматривает обращения в сроки, предусмотренные применимым законодательством.`,
          'Пользователь может попросить уточнить, ограничить или удалить данные, если их дальнейшая обработка не требуется для коммуникации или исполнения договоренностей.',
        ],
      },
    ],
  },
  'personal-data-consent': {
    title: 'Согласие на обработку персональных данных',
    version: legalConfig.consentVersion,
    intro:
      'Это согласие применяется, когда пользователь сам открывает Telegram-контакт PRIME ACADEMY по ссылке с сайта и сообщает данные для связи и обсуждения занятий.',
    sections: [
      {
        title: '1. Кому дается согласие',
        paragraphs: [`Согласие дается оператору: ${commonOperator}`],
      },
      {
        title: '2. Какие данные пользователь может передать',
        items: [
          'имя;',
          'Telegram username или иной контакт, который пользователь сам сообщает;',
          'класс ученика;',
          'направление подготовки: ЕГЭ, ОГЭ, олимпиады или школьная программа;',
          'цель занятий и учебный комментарий без лишних персональных данных.',
        ],
      },
      {
        title: '3. Цели обработки',
        items: [
          'связь с пользователем по обращению;',
          'обсуждение формата, стоимости, расписания и условий занятий;',
          'подготовка индивидуального предложения по репетиторским занятиям.',
        ],
      },
      {
        title: '4. Важные ограничения',
        paragraphs: [
          'Обращение в Telegram-контакт не является покупкой и не обязывает оплачивать занятия.',
          'Стоимость, формат и расписание обсуждаются индивидуально после обращения.',
        ],
      },
      {
        title: '5. Отзыв согласия',
        paragraphs: [
          `Согласие можно отозвать, написав на ${legalConfig.operatorEmail} или в Telegram-контакт ${legalConfig.telegramContactLabel}.`,
        ],
      },
    ],
  },
  'marketing-consent': {
    title: 'Согласие на получение информационных сообщений',
    version: legalConfig.marketingConsentVersion,
    intro:
      'Документ описывает согласие на получение информационных сообщений о старте наборов, материалах и новостях PRIME ACADEMY.',
    sections: [
      {
        title: '1. Каналы сообщений',
        paragraphs: [
          `Информационные сообщения могут публиковаться в Telegram-канале ${legalConfig.telegramChannelLabel}. Пользователь самостоятельно подписывается на канал и может отписаться в любой момент.`,
        ],
      },
      {
        title: '2. Что может входить в сообщения',
        items: [
          'информация о наборах и форматах занятий;',
          'полезные материалы по физике;',
          'новости проекта PRIME ACADEMY;',
          'организационные сообщения по подготовке.',
        ],
      },
      {
        title: '3. Канал без автоматических рассылок',
        paragraphs: [
          'Сайт не подключает email-рассылки, SMS-рассылки, push-уведомления, рекламные пиксели или системы аналитики.',
        ],
      },
    ],
  },
  terms: {
    title: 'Пользовательское соглашение',
    version: legalConfig.termsVersion,
    intro:
      'Соглашение описывает условия использования сайта PRIME ACADEMY как информационного сайта о репетиторских занятиях по физике.',
    sections: [
      {
        title: '1. Статус сайта',
        paragraphs: [
          'Сайт носит информационный характер и помогает пользователю связаться с проектом PRIME ACADEMY для обсуждения репетиторских занятий по физике.',
          'Сайт не является образовательной платформой и не выдает документы об образовании.',
        ],
      },
      {
        title: '2. Не публичная оферта',
        paragraphs: [
          'Информация на сайте не является публичной офертой. Условия занятий, стоимость, расписание и формат обсуждаются индивидуально после обращения в Telegram-контакт.',
          'Обращение в Telegram-контакт не является покупкой и не обязывает пользователя оплачивать занятия.',
        ],
      },
      {
        title: '3. Результаты обучения',
        paragraphs: [
          'PRIME ACADEMY не гарантирует конкретный балл, поступление или победу в олимпиаде. Результат зависит от стартового уровня, регулярности занятий и самостоятельной работы ученика.',
        ],
      },
      {
        title: '4. Оплата',
        paragraphs: [
          'На сайте нет оплаты, банковских карт и онлайн-кассы. Любые вопросы оплаты обсуждаются индивидуально вне сайта после личного общения.',
        ],
      },
      {
        title: '5. Контакты',
        paragraphs: [
          `Основной контакт: ${legalConfig.telegramContactLabel}. Telegram-канал проекта: ${legalConfig.telegramChannelLabel}. Email: ${legalConfig.operatorEmail}.`,
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookies и аналитика',
    version: '1.0',
    intro:
      'На сайте PRIME ACADEMY не подключены рекламные пиксели и системы веб-аналитики.',
    sections: [
      {
        title: '1. Cookies',
        paragraphs: [
          'Файлы cookies для аналитики, рекламы, ретаргетинга, авторизации или хранения обращений не подключены.',
        ],
      },
      {
        title: '2. Аналитика',
        paragraphs: [
          'На сайте не подключены Яндекс.Метрика, Google Analytics, VK Pixel и другие аналитические или рекламные инструменты.',
        ],
      },
      {
        title: '3. Будущие изменения',
        paragraphs: [
          'Если cookies, аналитика или рекламные пиксели будут подключаться в будущем, документы сайта нужно обновить до публикации таких изменений.',
        ],
      },
    ],
  },
}

type LegalPageProps = {
  pageKey: LegalPageKey
}

export function LegalPage({ pageKey }: LegalPageProps) {
  const page = legalPages[pageKey]

  return (
    <section className="legal-page">
      <div className="legal-shell">
        <Link className="back-link" to="/">
          <ArrowLeft aria-hidden="true" />
          На главную
        </Link>
        <span className="legal-eyebrow">версия {page.version}</span>
        <h1>{page.title}</h1>
        <p className="legal-intro">{page.intro}</p>

        <div className="legal-meta">
          <span>Дата вступления в силу: {legalConfig.effectiveDate}</span>
          {legalConfig.siteDomain ? <span>Домен: {legalConfig.siteDomain}</span> : null}
        </div>

        <div className="legal-sections">
          {page.sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

