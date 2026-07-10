import {
  Atom,
  BadgeCheck,
  BrainCircuit,
  ClipboardCheck,
  FlaskConical,
  GraduationCap,
  MessageCircle,
  Orbit,
  PenLine,
  Route,
  Send,
  Sparkles,
  Target,
  Trophy,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import irinaHeroCurrentPhoto from './assets/images/ira-hero-current.jpg'
import irinaCasualPhoto from './assets/images/irina-casual-course.jpg'
import currentIrinaTeacherPhoto from './assets/images/irina-studio-teacher.jpg'
import kirillBoardPhoto from './assets/images/kirill-board-course.jpg'
import kirillCampusPhoto from './assets/images/kirill-campus-teacher.jpg'
import kirillHeroCurrentPhoto from './assets/images/kirill-hero-current.jpg'
import kirillStudioCoursePhoto from './assets/images/kirill-studio-course.jpg'

export {
  currentIrinaTeacherPhoto,
  irinaCasualPhoto,
  irinaHeroCurrentPhoto,
  kirillBoardPhoto,
  kirillCampusPhoto as kirillTeacherPhoto,
  kirillHeroCurrentPhoto,
  kirillStudioCoursePhoto,
}

export type CardItem = {
  title: string
  text: string
  tag?: string
  icon: LucideIcon
  signal: string
}

export type DirectionItem = {
  title: string
  audience: string
  includes: string[]
  accent: string
  icon: LucideIcon
  signal: string
}

export type Teacher = {
  name: string
  role: string
  image: string
  imagePosition: string
  facts: string[]
  quote: string
  strengths: string[]
  ctaLabel: string
  botStart: string
}

export type MethodStep = {
  title: string
  text: string
  formula: string
}

export type TrialCard = {
  title: string
  text: string
  icon: LucideIcon
}

export type PricingPlan = {
  title: string
  badge: string
  price: string
  description: string
  features: string[]
  icon: LucideIcon
  image: string
  highlighted?: boolean
  teacherOptions?: Array<{
    name: string
    image: string
    botStart: string
  }>
  botStart: string
}

export type CourseCard = {
  title: string
  badge: string
  price: string
  tags: string[]
  image: string
  imagePosition?: string
  botStart: string
}

export type IncludedItem = {
  title: string
  text: string
  icon: LucideIcon
}

export const navItems = [
  { label: 'Направления', href: '/#directions' },
  { label: 'Методика', href: '/#method' },
  { label: 'Тарифы', href: '/#pricing' },
  { label: 'Преподаватели', href: '/#teachers' },
  { label: 'Бесплатно', href: '/#trial' },
  { label: 'FAQ', href: '/#faq' },
]

export const heroAudienceChips = [
  'Пробное занятие бесплатно',
  'Индивидуально от 2 500 ₽',
  'Курсы от 3 500 ₽ / месяц',
  'Проверка ДЗ и куратор',
]

export const trialCards: TrialCard[] = [
  {
    title: 'Диагностика уровня',
    text: 'Понимаем, где проблема: теория, математика, оформление или страх задач.',
    icon: Target,
  },
  {
    title: 'Мини-разбор темы',
    text: 'Показываем, как объясняем физику через связи, а не через зубрёжку.',
    icon: BrainCircuit,
  },
  {
    title: 'План подготовки',
    text: 'После занятия предлагаем подходящий формат: индивидуально, курс с семинарами или курс без семинаров.',
    icon: Route,
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Индивидуальные занятия',
    badge: 'Пробное занятие бесплатно',
    price: '2 500 ₽ / занятие',
    description: 'Личный маршрут под уровень, цель и темп ученика. Можно заниматься с Кириллом или Ириной.',
    features: [
      'индивидуальный план',
      'проверка домашних заданий',
      'бесплатный доступ к лекциям',
      'куратор на связи',
      'ежемесячный пробник в формате онлайн-экзамена',
      'скидка 10% при покупке больше одного занятия',
    ],
    icon: Sparkles,
    image: kirillBoardPhoto,
    teacherOptions: [
      {
        name: 'С Кириллом',
        image: kirillBoardPhoto,
        botStart: 'kirill_individual',
      },
      {
        name: 'С Ириной',
        image: irinaCasualPhoto,
        botStart: 'irina_individual',
      },
    ],
    botStart: 'individual_trial',
  },
  {
    title: 'Курс с семинарами',
    badge: 'Самый полный формат',
    price: '5 500 ₽ / месяц',
    description: 'Лекции, домашние задания и два семинара в неделю в маленьких группах.',
    features: [
      'доступ ко всем лекциям',
      '2 семинара в неделю',
      'маленькие группы',
      'домашние задания с проверкой',
      'куратор на связи',
      'ежемесячный пробник в формате онлайн-экзамена',
    ],
    icon: Users,
    image: kirillStudioCoursePhoto,
    highlighted: true,
    botStart: 'seminars_course',
  },
  {
    title: 'Курс без семинаров',
    badge: 'Самостоятельный темп',
    price: '3 500 ₽ / месяц',
    description: 'Для тех, кто хочет доступ к лекциям, домашкам, проверке и куратору, но без регулярных семинаров.',
    features: [
      'доступ ко всем лекциям',
      'домашние задания с проверкой',
      'куратор на связи',
      'ежемесячный пробник в формате онлайн-экзамена',
    ],
    icon: PenLine,
    image: irinaCasualPhoto,
    botStart: 'self_course',
  },
]

export const courseCards: CourseCard[] = [
  {
    title: 'Индивидуально с Кириллом',
    badge: 'индивидуально',
    price: '2 500 ₽ / занятие',
    tags: ['личный план', 'ДЗ', 'лекции', 'пробник'],
    image: kirillBoardPhoto,
    imagePosition: 'center 42%',
    botStart: 'kirill_individual',
  },
  {
    title: 'Индивидуально с Ириной',
    badge: 'индивидуально',
    price: '2 500 ₽ / занятие',
    tags: ['личный план', 'ДЗ', 'лекции', 'пробник'],
    image: irinaCasualPhoto,
    imagePosition: 'center 34%',
    botStart: 'irina_individual',
  },
  {
    title: 'ЕГЭ по физике',
    badge: 'ЕГЭ',
    price: 'от 3 500 ₽ / месяц',
    tags: ['лекции', 'семинары', 'ДЗ', 'пробники'],
    image: kirillStudioCoursePhoto,
    imagePosition: 'center 34%',
    botStart: 'ege_course',
  },
  {
    title: 'ОГЭ по физике',
    badge: 'ОГЭ',
    price: 'от 3 500 ₽ / месяц',
    tags: ['база', 'практика', 'ДЗ', 'куратор'],
    image: currentIrinaTeacherPhoto,
    imagePosition: 'center 28%',
    botStart: 'oge_course',
  },
  {
    title: 'Олимпиадная физика',
    badge: 'олимпиады',
    price: 'от 3 500 ₽ / месяц',
    tags: ['сложные задачи', 'идеи', 'выводы', 'оценки'],
    image: kirillCampusPhoto,
    imagePosition: 'center 44%',
    botStart: 'olympiad_course',
  },
  {
    title: 'Школьная физика',
    badge: 'база',
    price: 'от 3 500 ₽ / месяц',
    tags: ['пробелы', 'контрольные', 'ДЗ', 'объяснение'],
    image: irinaHeroCurrentPhoto,
    imagePosition: 'center 35%',
    botStart: 'school_base_course',
  },
]

export const audienceCards: CardItem[] = [
  {
    title: 'ОГЭ / 9 класс',
    text: 'Разбираем школьную базу, формат ОГЭ и типичные ловушки в задачах.',
    tag: 'экзамен',
    icon: ClipboardCheck,
    signal: 'измерение',
  },
  {
    title: 'ЕГЭ / 10-11 класс',
    text: 'Собираем маршрут подготовки: теория, практика, домашки и разбор ошибок.',
    tag: 'система',
    icon: Target,
    signal: 'график + вектор',
  },
  {
    title: 'Олимпиады / сложные задачи',
    text: 'Тренируем нестандартное мышление, физические оценки и аккуратный вывод.',
    tag: 'глубина',
    icon: Trophy,
    signal: 'ΔE = 0',
  },
  {
    title: 'Школьная физика / база',
    text: 'Закрываем пробелы, убираем страх формул и показываем связи между темами.',
    tag: 'карта тем',
    icon: BrainCircuit,
    signal: 'тема → закон',
  },
]

export const methodSteps: MethodStep[] = [
  {
    title: 'Читаем условие',
    text: 'Отделяем физику от лишних слов и замечаем ключевые величины.',
    formula: 'величины',
  },
  {
    title: 'Выписываем дано',
    text: 'Фиксируем известные величины, единицы и ограничения задачи.',
    formula: '[Н], [м], [с]',
  },
  {
    title: 'Ищем цель',
    text: 'Понимаем, что нужно найти и какой ответ будет иметь смысл.',
    formula: 'что найти',
  },
  {
    title: 'Строим модель',
    text: 'Выбираем схему: тело, сила, поле, график, траектория или процесс.',
    formula: 'модель',
  },
  {
    title: 'Выбираем закон',
    text: 'Подбираем не формулу наугад, а физический принцип под модель.',
    formula: 'F = ma',
  },
  {
    title: 'Проверяем ответ',
    text: 'Сверяем размерность, знак, порядок величины и физический смысл.',
    formula: 'проверка',
  },
]

export const directions: DirectionItem[] = [
  {
    title: 'ЕГЭ по физике',
    audience: '10-11 классам, которым нужна системная подготовка без хаоса.',
    includes: ['разбор кодификатора', 'типовые задания', 'вторая часть', 'план подготовки'],
    accent: 'экзамен как маршрут',
    icon: GraduationCap,
    signal: 'v(t)',
  },
  {
    title: 'ОГЭ по физике',
    audience: '9 классам, которым нужно уверенно закрыть экзамен и школьную базу.',
    includes: ['формулы без зубрёжки', 'эксперименты', 'практика вариантов', 'ошибки в оформлении'],
    accent: 'база без паники',
    icon: Atom,
    signal: 'p = F/S',
  },
  {
    title: 'Олимпиадная физика',
    audience: 'Тем, кто хочет идти глубже школьного учебника.',
    includes: ['нестандартные задачи', 'идеи решений', 'физические оценки', 'логика вывода'],
    accent: 'мышление шире шаблона',
    icon: Orbit,
    signal: 'ΔE = 0',
  },
  {
    title: 'Школьная программа',
    audience: 'Ученикам, которым физика кажется набором случайных формул.',
    includes: ['закрытие пробелов', 'подготовка к контрольным', 'домашние задания', 'объяснение простым языком'],
    accent: 'темы становятся картой',
    icon: FlaskConical,
    signal: 'тема → закон → задача',
  },
]

export const learningSteps = [
  {
    title: 'Диагностика уровня',
    text: 'Понимаем, где пробел: теория, математика, оформление или страх задач.',
    icon: Target,
    signal: 'уровень',
  },
  {
    title: 'Теория через логику',
    text: 'Не диктуем конспект, а показываем причинно-следственные связи и физический смысл.',
    icon: BrainCircuit,
    signal: 'модель',
  },
  {
    title: 'Практика на задачах',
    text: 'Идём от базовых моделей к экзаменационным и олимпиадным ситуациям.',
    icon: PenLine,
    signal: 'практика',
  },
  {
    title: 'Домашки и обратная связь',
    text: 'Ученик получает практику, а преподаватель видит ошибки и корректирует маршрут.',
    icon: Route,
    signal: 'обратная связь',
  },
]

export const teachers: Teacher[] = [
  {
    name: 'Кирилл Кузнецов',
    role: 'Репетитор по физике',
    image: kirillCampusPhoto,
    imagePosition: 'center 54%',
    facts: ['98 баллов по физике', 'студент НИЯУ МИФИ', 'олимпиадный опыт', 'индивидуальные занятия'],
    quote: 'Физика начинается там, где формула перестаёт быть набором букв.',
    strengths: [
      'разбирает задачу до деталей',
      'ведёт к пониманию, а не заучиванию',
      'объясняет сложное через связи',
      'помогает выстроить маршрут подготовки',
    ],
    ctaLabel: 'Записаться к Кириллу',
    botStart: 'kirill_teacher',
  },
  {
    name: 'Ирина Данилова',
    role: 'Репетитор по физике',
    image: currentIrinaTeacherPhoto,
    imagePosition: 'center 25%',
    facts: ['98 баллов по физике', 'студентка НИЯУ МИФИ', 'олимпиадный опыт', 'индивидуальные занятия'],
    quote: 'Сложная тема становится понятной, когда у неё появляется структура.',
    strengths: [
      'объясняет сложные вещи простым языком',
      'помогает выстроить систему',
      'готовит к ЕГЭ, ОГЭ и олимпиадам',
      'поддерживает темп и мотивацию',
    ],
    ctaLabel: 'Записаться к Ирине',
    botStart: 'irina_teacher',
  },
]

export const includedItems: IncludedItem[] = [
  {
    title: 'Лекции',
    text: 'Доступ к материалам, которые объясняют темы через модели, связи и задачи.',
    icon: BrainCircuit,
  },
  {
    title: 'Домашние задания',
    text: 'Задания проверяются, а ошибки превращаются в точки роста.',
    icon: ClipboardCheck,
  },
  {
    title: 'Куратор',
    text: 'Можно задавать вопросы по темам, домашкам и организации подготовки.',
    icon: MessageCircle,
  },
  {
    title: 'Пробники',
    text: 'Раз в месяц пишем пробник в формате онлайн-экзамена, чтобы отслеживать динамику.',
    icon: Target,
  },
  {
    title: 'Семинары',
    text: 'На тарифе с семинарами проходят 2 занятия в неделю в маленьких группах.',
    icon: Users,
  },
  {
    title: 'Индивидуальный план',
    text: 'На индивидуальных занятиях маршрут строится под конкретного ученика.',
    icon: Route,
  },
]

export const afterRequestSteps = [
  {
    title: 'Выбираешь формат',
    text: 'Индивидуально, курс с семинарами или курс без семинаров.',
    icon: Send,
  },
  {
    title: 'Отвечаешь в Telegram-боте',
    text: 'Бот спросит класс, цель, направление и удобное время.',
    icon: MessageCircle,
  },
  {
    title: 'Проходишь бесплатное занятие',
    text: 'На пробном занятии смотрим уровень, пробелы и подходящий темп.',
    icon: BadgeCheck,
  },
  {
    title: 'Начинаешь подготовку',
    text: 'После пробного занятия выбираешь формат, расписание и старт обучения.',
    icon: Route,
  },
]

export const faqItems = [
  {
    question: 'Можно ли сначала попробовать бесплатно?',
    answer:
      'Да. Первое индивидуальное занятие бесплатное: знакомимся, смотрим уровень и понимаем, какой формат подойдёт.',
  },
  {
    question: 'Сколько стоят занятия?',
    answer:
      'Индивидуальное занятие стоит 2 500 ₽. Курс с семинарами — 5 500 ₽ в месяц. Курс без семинаров — 3 500 ₽ в месяц.',
  },
  {
    question: 'Чем курс с семинарами отличается от курса без семинаров?',
    answer:
      'В курсе с семинарами есть 2 занятия в неделю в маленьких группах. В курсе без семинаров остаются лекции, домашние задания с проверкой, куратор и ежемесячный пробник.',
  },
  {
    question: 'Что входит в индивидуальные занятия?',
    answer:
      'Индивидуальный план, проверка домашних заданий, доступ к лекциям, куратор и ежемесячный пробник.',
  },
  {
    question: 'Как проходит пробник?',
    answer:
      'Раз в месяц ученики пишут пробник в формате онлайн-экзамена. Это помогает отслеживать динамику и видеть, какие темы нужно усилить.',
  },
  {
    question: 'Кто такой куратор?',
    answer: 'Куратор помогает с вопросами по обучению, домашним заданиям и организации подготовки.',
  },
  {
    question: 'Как происходит оплата?',
    answer:
      'На сайте оплаты нет. После заявки в Telegram-боте мы уточняем формат, отвечаем на вопросы и объясняем дальнейшие шаги.',
  },
  {
    question: 'Можно ли выбрать Кирилла или Ирину?',
    answer: 'Да, для индивидуальных занятий можно выбрать преподавателя, если есть свободные места в расписании.',
  },
  {
    question: 'Есть ли скидка?',
    answer: 'Да, на индивидуальные занятия действует скидка 10% при покупке больше одного занятия.',
  },
  {
    question: 'Гарантируете ли вы конкретный балл?',
    answer:
      'Мы не обещаем магический результат без работы ученика. Мы даём систему, практику, проверку, обратную связь и понятный маршрут подготовки.',
  },
]
