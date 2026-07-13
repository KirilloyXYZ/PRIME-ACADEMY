export type Review = {
  id: string
  authorName: string
  authorType?: 'student' | 'parent'
  categoryLabel?: string
  result?: string
  resultNote?: string
  excerpt: string
  originalImage: string
  imageAlt: string
  featured?: boolean
  layout?: 'large' | 'medium' | 'small' | 'wide'
  consentConfirmed: boolean
}

const originalPath = '/reviews/originals/'

export const reviews: Review[] = [
  {
    id: 'li-larina-ege-94',
    authorName: 'Ли Ларина',
    authorType: 'student',
    categoryLabel: 'ЕГЭ по физике',
    result: '70 → 94 балла',
    resultNote: 'Индивидуальный результат ученицы',
    excerpt:
      'Очень хороший репетитор по физике, изначально очень боялась, но атмосфера на уроках дружелюбная, понятно объясняет. С 70 баллов за два месяца подняла меня, и за ЕГЭ по физике я получила 94 балла.',
    originalImage: `${originalPath}review-3.jpg`,
    imageAlt: 'Оригинальный скриншот отзыва Ли Лариной о подготовке к ЕГЭ по физике',
    featured: true,
    layout: 'large',
    consentConfirmed: true,
  },
  {
    id: 'elena-ege-parent',
    authorName: 'Елена',
    authorType: 'parent',
    categoryLabel: 'ЕГЭ по физике',
    result: '94 балла',
    resultNote: 'Результат сына автора отзыва',
    excerpt:
      'Кирилл готовил моего сына к ЕГЭ по физике. С первых занятий стало понятно, что материал объясняется очень доступно и системно. За несколько месяцев удалось закрыть пробелы, отработать сложные задания и сильно поднять уверенность.',
    originalImage: `${originalPath}review-7.jpg`,
    imageAlt: 'Оригинальный скриншот отзыва Елены о подготовке сына к ЕГЭ по физике',
    layout: 'medium',
    consentConfirmed: true,
  },
  {
    id: 'alina-olympiad',
    authorName: 'Алина',
    authorType: 'student',
    categoryLabel: 'Олимпиадная физика',
    result: 'Победитель олимпиады',
    excerpt:
      'Кирилл готовил меня к олимпиаде по физике почти с нуля. Очень понятно объяснял сложные темы, давал сильные задачи и всегда разбирал ошибки до конца.',
    originalImage: `${originalPath}review-6.jpg`,
    imageAlt: 'Оригинальный скриншот отзыва Алины об олимпиадной подготовке по физике',
    layout: 'small',
    consentConfirmed: true,
  },
  {
    id: 'maria-olympiad-math',
    authorName: 'Мария',
    authorType: 'student',
    categoryLabel: 'Олимпиадная математика',
    result: '1 место',
    excerpt:
      'Очень благодарна Кириллу за подготовку к олимпиаде по математике. На занятиях было много нестандартных задач, полезных идей и подробных разборов.',
    originalImage: `${originalPath}review-4.jpg`,
    imageAlt: 'Оригинальный скриншот отзыва Марии об олимпиадной подготовке по математике',
    layout: 'small',
    consentConfirmed: true,
  },
  {
    id: 'darya-oge',
    authorName: 'Дарья',
    authorType: 'student',
    categoryLabel: 'ОГЭ',
    result: '3 месяца с нуля',
    excerpt: 'Лучший репетитор! Всё идеально объясняет, подготовила с ОГЭ за 3 месяца с нуля. Теперь я умная, спасибо большое.',
    originalImage: `${originalPath}review-2.jpg`,
    imageAlt: 'Оригинальный скриншот отзыва Дарьи о подготовке к ОГЭ',
    layout: 'small',
    consentConfirmed: true,
  },
  {
    id: 'irinka-parent-progress',
    authorName: 'Иринка',
    authorType: 'parent',
    categoryLabel: 'Физика ОГЭ/ЕГЭ/ВПР',
    excerpt:
      'Очень грамотный репетитор, быстро нашёл подход к моему сыну, высокая подготовленность материала и доступная интерактивная подача. А главное я вижу результат занятий, это восторг.',
    originalImage: `${originalPath}review-5.jpg`,
    imageAlt: 'Оригинальный скриншот отзыва родителя о занятиях по физике',
    layout: 'wide',
    consentConfirmed: true,
  },
  {
    id: 'liza-school-physics',
    authorName: 'Лиза',
    categoryLabel: 'Школьная физика',
    excerpt:
      'Раньше были проблемы с физикой в школе, но благодаря понятным объяснениям и терпению стало гораздо легче понимать материал. Успеваемость улучшилась, оценки стабильно хорошие.',
    originalImage: `${originalPath}review-1.jpg`,
    imageAlt: 'Оригинальный скриншот отзыва Лизы о занятиях по школьной физике',
    layout: 'wide',
    consentConfirmed: true,
  },
]
