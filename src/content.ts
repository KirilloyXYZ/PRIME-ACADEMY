import {
  BadgeCheck,
  BookOpenCheck,
  BrainCircuit,
  ClipboardCheck,
  PenLine,
  Target,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import irinaHeroCurrentPhoto from './assets/images/ira-hero-current.jpg'
import irinaCasualPhoto from './assets/images/irina-casual-course.jpg'
import currentIrinaTeacherPhoto from './assets/images/irina-studio-teacher.jpg'
import kirillBoardPhoto from './assets/images/kirill-board-course.jpg'
import kirillHeroCurrentPhoto from './assets/images/kirill-hero-current.jpg'
import kirillStudioCoursePhoto from './assets/images/kirill-studio-course.jpg'

export type ResponsiveImagePosition = {
  desktop?: string
  tablet?: string
  mobile?: string
}

export type NavItem = {
  label: string
  href: string
}

export type Teacher = {
  id: 'kirill' | 'irina'
  name: string
  role: string
  image: string
  imageAlt: string
  imagePosition: ResponsiveImagePosition
  imageScale?: number
  facts: string[]
  quote: string
  strengths: string[]
}

export type Course = {
  id: 'ege' | 'oge' | 'olympiad' | 'school' | 'individual'
  title: string
  badge: string
  price: string
  short: string
  description: string
  format: string
  duration: string
  image: string
  imageAlt: string
  imagePosition: ResponsiveImagePosition
  imageScale?: number
  tags: string[]
  includes: string[]
  details: string[]
  botStart: string
}

export type LearningStage = {
  title: string
  eyebrow: string
  text: string
  marker: string
  icon: LucideIcon
}

export type ProofItem = {
  title: string
  text: string
  accent: string
  icon: LucideIcon
}

export type FaqItem = {
  question: string
  answer: string
}

export const navItems: NavItem[] = [
  { label: 'Курсы', href: '/#courses' },
  { label: 'Как мы учим', href: '/#learning' },
  { label: 'Преподаватели', href: '/#teachers' },
  { label: 'Материалы', href: '/#materials' },
  { label: 'FAQ', href: '/#faq' },
]

export const heroTrustItems = ['студенты НИЯУ МИФИ', 'ОГЭ / ЕГЭ / олимпиады', 'занятия ведут лично', 'без зубрёжки']

export const proofItems: ProofItem[] = [
  {
    title: 'Сначала диагностика',
    text: 'Смотрим цель, текущий уровень и типичные ошибки. После этого курс не выглядит случайным набором тем.',
    accent: 'старт без хаоса',
    icon: Target,
  },
  {
    title: 'Домашка возвращается в разбор',
    text: 'Ошибки из домашних заданий становятся темой следующего занятия, а не просто красной отметкой.',
    accent: 'проверка ДЗ',
    icon: ClipboardCheck,
  },
  {
    title: 'Пробники показывают динамику',
    text: 'Регулярно проверяем, какие темы уже держатся, а что нужно пересобрать в маршруте.',
    accent: 'контроль прогресса',
    icon: BadgeCheck,
  },
  {
    title: 'Занятия ведут авторы',
    text: 'На старте ученик видит Кирилла и Ирину, а не безликую платформу с неизвестными преподавателями.',
    accent: 'личный формат',
    icon: Users,
  },
]

export const teachers: Teacher[] = [
  {
    id: 'kirill',
    name: 'Кирилл Кузнецов',
    role: 'Репетитор по физике',
    image: kirillStudioCoursePhoto,
    imageAlt: 'Кирилл Кузнецов, преподаватель физики PRIME ACADEMY',
    imagePosition: {
      desktop: '50% 34%',
      tablet: '50% 30%',
      mobile: '50% 28%',
    },
    facts: ['98 баллов по физике', 'студент НИЯУ МИФИ', 'олимпиадный опыт', 'объясняет через модели'],
    quote: 'Физика начинается там, где формула перестаёт быть набором букв.',
    strengths: [
      'разбирает условие до понятной схемы',
      'показывает связь между законом, формулой и задачей',
      'ведёт к пониманию, а не к механическому заучиванию',
      'помогает выстроить маршрут подготовки',
    ],
  },
  {
    id: 'irina',
    name: 'Ирина Данилова',
    role: 'Репетитор по физике',
    image: currentIrinaTeacherPhoto,
    imageAlt: 'Ирина Данилова, преподаватель физики PRIME ACADEMY',
    imagePosition: {
      desktop: '50% 24%',
      tablet: '50% 22%',
      mobile: '50% 20%',
    },
    facts: ['98 баллов по физике', 'студентка НИЯУ МИФИ', 'олимпиадный опыт', 'структурирует сложные темы'],
    quote: 'Сложная тема становится понятной, когда у неё появляется структура.',
    strengths: [
      'объясняет простым языком без потери смысла',
      'помогает закрывать пробелы в школьной базе',
      'держит темп подготовки и регулярность',
      'собирает сложные темы в понятные блоки',
    ],
  },
]

export const courses: Course[] = [
  {
    id: 'ege',
    title: 'ЕГЭ по физике',
    badge: '10–11 класс',
    price: 'от 3 500 ₽ / месяц',
    short: 'Системная подготовка к экзамену: теория, задачи, домашка и пробники.',
    description:
      'Собираем кодификатор в понятный маршрут: от базовых моделей до развёрнутых решений и оформления второй части.',
    format: 'курс или индивидуальный маршрут',
    duration: 'учебный год или интенсив',
    image: kirillHeroCurrentPhoto,
    imageAlt: 'Кирилл на учебной фотосессии PRIME ACADEMY',
    imagePosition: {
      desktop: '47% 28%',
      tablet: '48% 24%',
      mobile: '50% 18%',
    },
    tags: ['ЕГЭ', 'пробники', 'ДЗ с проверкой'],
    includes: ['разбор кодификатора', 'задачи первой и второй части', 'оформление решений', 'ежемесячные пробники'],
    details: [
      'Подходит, если нужно идти по понятной системе, а не прыгать между темами.',
      'После диагностики выбираем формат: индивидуально, курс с разборами или самостоятельный курс с проверкой.',
    ],
    botStart: 'goal_ege',
  },
  {
    id: 'oge',
    title: 'ОГЭ по физике',
    badge: '9 класс',
    price: 'от 3 500 ₽ / месяц',
    short: 'Закрываем школьную базу, эксперименты, типовые задачи и оформление.',
    description:
      'Убираем страх перед формулами через понятные модели: что происходит, какие величины важны и какой закон нужен.',
    format: 'курс или индивидуальная подготовка',
    duration: 'от диагностики до экзамена',
    image: currentIrinaTeacherPhoto,
    imageAlt: 'Ирина Данилова в учебном образе PRIME ACADEMY',
    imagePosition: {
      desktop: '50% 18%',
      tablet: '50% 18%',
      mobile: '50% 14%',
    },
    tags: ['ОГЭ', 'школьная база', 'практика'],
    includes: ['базовая теория', 'экспериментальные задания', 'типовые ловушки', 'тренировка вариантов'],
    details: [
      'Подходит, если физика кажется набором случайных формул.',
      'На занятиях ученик учится видеть процесс, а не только искать подходящую формулу.',
    ],
    botStart: 'goal_oge',
  },
  {
    id: 'olympiad',
    title: 'Олимпиадная физика',
    badge: 'углублённый уровень',
    price: 'от 2 500 ₽ / занятие',
    short: 'Задачи глубже школьного учебника: идеи решений, оценки и выводы.',
    description:
      'Работаем с мышлением: как увидеть физическую модель, сделать оценку, вывести связь и не потеряться в нестандартной задаче.',
    format: 'индивидуально или мини-группа',
    duration: 'по цели и уровню',
    image: kirillBoardPhoto,
    imageAlt: 'Преподаватель объясняет физическую задачу у доски',
    imagePosition: {
      desktop: '54% 34%',
      tablet: '54% 30%',
      mobile: '58% 28%',
    },
    tags: ['олимпиады', 'сложные задачи', 'мышление'],
    includes: ['идеи решений', 'физические оценки', 'нестандартные задачи', 'аккуратный вывод'],
    details: [
      'Подходит ученикам, которым хочется понимать физику глубже школьного формата.',
      'Олимпиады не обещаем как гарантированный результат, но даём сильную систему разбора задач.',
    ],
    botStart: 'goal_olympiad',
  },
  {
    id: 'school',
    title: 'Школьная физика',
    badge: '7–11 класс',
    price: 'от 2 500 ₽ / занятие',
    short: 'Помогаем с текущими темами, контрольными, домашкой и пробелами.',
    description:
      'Собираем школьные темы в связанную картину: закон, модель, пример, задача, проверка. Без ощущения, что всё нужно просто выучить.',
    format: 'индивидуальный маршрут',
    duration: 'по запросу ученика',
    image: irinaCasualPhoto,
    imageAlt: 'Ирина в повседневном учебном кадре',
    imagePosition: {
      desktop: '48% 35%',
      tablet: '48% 30%',
      mobile: '50% 25%',
    },
    tags: ['школа', 'пробелы', 'контрольные'],
    includes: ['объяснение темы', 'разбор домашки', 'подготовка к контрольным', 'укрепление базы'],
    details: [
      'Подходит, если ученик теряется на уроках или не понимает, откуда берутся формулы.',
      'Формат и преподавателя подбираем после диагностики по уровню, цели и расписанию.',
    ],
    botStart: 'goal_school',
  },
  {
    id: 'individual',
    title: 'Индивидуальная подготовка',
    badge: 'личный маршрут',
    price: '2 500 ₽ / занятие',
    short: 'Точечная работа с пробелами, темпом и задачами конкретного ученика.',
    description:
      'После диагностики выбираем преподавателя и собираем маршрут: что закрыть сейчас, что тренировать каждую неделю и как проверять прогресс.',
    format: 'один на один',
    duration: 'гибко по расписанию',
    image: kirillStudioCoursePhoto,
    imageAlt: 'Кирилл Кузнецов на учебной фотосессии PRIME ACADEMY',
    imagePosition: {
      desktop: '50% 34%',
      tablet: '50% 30%',
      mobile: '50% 26%',
    },
    tags: ['индивидуально', 'ДЗ', 'пробники'],
    includes: ['личный план', 'разбор ошибок', 'проверка домашки', 'подбор преподавателя школой'],
    details: [
      'Подходит, если нужна точная работа с текущими пробелами или нестандартная цель.',
      'Преподавателя для индивидуальных занятий подбираем мы: по уровню, задаче, темпу и свободному расписанию.',
    ],
    botStart: 'format_individual',
  },
]

export const learningStages: LearningStage[] = [
  {
    title: 'Диагностика',
    eyebrow: '01 / старт',
    text: 'Смотрим цель, уровень и типичные ошибки. Так становится понятно, какой курс или формат даст больше пользы.',
    marker: 'цель → уровень → план',
    icon: Target,
  },
  {
    title: 'Понятная модель темы',
    eyebrow: '02 / смысл',
    text: 'Разбираем, что происходит в задаче: процесс, величины, связь между законом и формулой.',
    marker: 'процесс → закон → формула',
    icon: BrainCircuit,
  },
  {
    title: 'Практика и домашка',
    eyebrow: '03 / закрепление',
    text: 'Решаем задачи разного уровня, даём домашку и возвращаем ошибки в следующий разбор.',
    marker: 'задача → ошибка → разбор',
    icon: PenLine,
  },
  {
    title: 'Пробники и корректировка',
    eyebrow: '04 / прогресс',
    text: 'Пробники показывают, какие темы держатся, а какие нужно усилить в следующей неделе.',
    marker: 'проверка → новый шаг',
    icon: BookOpenCheck,
  },
]

export const learningOutputs = [
  'понятный конспект по теме',
  'домашнее задание с проверкой',
  'разбор ошибок без воды',
  'следующий шаг в маршруте',
]

export const materialsHighlights = ['разборы задач', 'схемы и конспекты', 'материалы к экзаменам']

export const faqItems: FaqItem[] = [
  {
    question: 'Можно ли сначала попробовать бесплатно?',
    answer:
      'Да. Начинаем с бесплатной диагностики: смотрим цель, уровень и подбираем ближайший шаг.',
  },
  {
    question: 'Сколько стоят занятия?',
    answer:
      'Индивидуальное занятие стоит 2 500 ₽. Курсы с проверкой и разборами начинаются от 3 500 ₽ в месяц. Точный формат подбираем после диагностики.',
  },
  {
    question: 'Можно ли выбрать Кирилла или Ирину?',
    answer:
      'Для индивидуального формата преподавателя подбираем мы: учитываем цель, уровень, темп, расписание и то, кто лучше подходит под задачу ученика.',
  },
  {
    question: 'Чем курс отличается от индивидуальных занятий?',
    answer:
      'Курс даёт готовую систему по направлению: лекции, практика, домашка и проверка. Индивидуальные занятия точнее подстраиваются под конкретные пробелы ученика.',
  },
  {
    question: 'Что входит в проверку домашних заданий?',
    answer:
      'Мы смотрим ход решения, оформление и типичные ошибки. После проверки становится понятно, что закрепилось, а что нужно пересобрать.',
  },
  {
    question: 'Как проходят пробники?',
    answer:
      'Раз в месяц ученик пишет пробник в формате онлайн-экзамена. Это помогает видеть динамику и заранее усиливать слабые темы.',
  },
  {
    question: 'Как происходит оплата?',
    answer:
      'На сайте оплаты нет. После заявки мы уточняем формат, отвечаем на вопросы и объясняем дальнейшие шаги.',
  },
  {
    question: 'Гарантируете ли вы конкретный балл?',
    answer:
      'Нет. Мы не обещаем конкретный балл без работы ученика. Мы даём систему, практику, проверку, обратную связь и понятный маршрут.',
  },
]

export const imageAssets = {
  kirillHeroCurrentPhoto,
  irinaHeroCurrentPhoto,
}
