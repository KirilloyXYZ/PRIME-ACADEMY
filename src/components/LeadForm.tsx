import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const leadSchema = z.object({
  name: z.string().trim().min(2, 'Напиши имя, чтобы мы знали, как обратиться'),
  telegram: z
    .string()
    .trim()
    .regex(/^@?[A-Za-z0-9_]{5,32}$/, 'Telegram можно указать как @username или username'),
  classLevel: z.string().min(1, 'Выбери класс'),
  direction: z.string().min(1, 'Выбери направление'),
  comment: z.string().trim().max(500, 'Комментарий лучше сделать короче').optional(),
  consent: z.boolean().refine((value) => value, {
    message: 'Нужно согласие на обработку данных для связи по заявке',
  }),
  updates: z.boolean().optional(),
})

type LeadFormValues = z.infer<typeof leadSchema>

const classOptions = ['7 класс', '8 класс', '9 класс', '10 класс', '11 класс', 'Другое']

const directionOptions = ['ЕГЭ', 'ОГЭ', 'Олимпиады', 'Школьная программа', 'Пока не знаю']

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      telegram: '',
      classLevel: '',
      direction: '',
      comment: '',
      consent: false,
      updates: false,
    },
  })

  const onSubmit = (values: LeadFormValues) => {
    console.info('PRIME ACADEMY test lead:', {
      ...values,
      telegram: values.telegram.startsWith('@') ? values.telegram : `@${values.telegram}`,
    })
    setSubmitted(true)
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-grid">
        <label>
          <span>Имя</span>
          <input type="text" placeholder="Например, Кирилл" autoComplete="given-name" {...register('name')} />
          {errors.name ? <small>{errors.name.message}</small> : null}
        </label>

        <label>
          <span>Telegram username</span>
          <input type="text" placeholder="@username" autoComplete="off" {...register('telegram')} />
          {errors.telegram ? <small>{errors.telegram.message}</small> : null}
        </label>

        <label>
          <span>Класс ученика</span>
          <select {...register('classLevel')}>
            <option value="">Выбери класс</option>
            {classOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.classLevel ? <small>{errors.classLevel.message}</small> : null}
        </label>

        <label>
          <span>Направление</span>
          <select {...register('direction')}>
            <option value="">Что нужно прокачать?</option>
            {directionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.direction ? <small>{errors.direction.message}</small> : null}
        </label>
      </div>

      <label>
        <span>Комментарий</span>
        <textarea
          rows={4}
          placeholder="Можно написать цель, слабые темы или дату экзамена"
          {...register('comment')}
        />
        {errors.comment ? <small>{errors.comment.message}</small> : null}
      </label>

      <div className="checkbox-stack">
        <label className="checkbox-label">
          <input type="checkbox" {...register('consent')} />
          <span>Я соглашаюсь на обработку указанных данных для связи со мной по заявке на курс.</span>
        </label>
        {errors.consent ? <small>{errors.consent.message}</small> : null}

        <label className="checkbox-label">
          <input type="checkbox" {...register('updates')} />
          <span>Я согласен получать информационные сообщения о старте курсов и наборах.</span>
        </label>
      </div>

      <div className="form-actions">
        <button className="button button--dark" type="submit" disabled={isSubmitting}>
          <Send aria-hidden="true" />
          Оставить заявку
        </button>
        <p>Форма пока не отправляет данные на сервер. Реальную безопасную отправку подключим после согласования.</p>
      </div>

      {submitted ? (
        <div className="form-success" role="status">
          Спасибо. Заявка пока работает в тестовом режиме, но сценарий готов: в финальной версии мы подключим безопасную
          отправку и напишем тебе в Telegram.
        </div>
      ) : null}
    </form>
  )
}
