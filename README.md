# PRIME ACADEMY

Сайт онлайн-школы физики PRIME ACADEMY для направлений: ЕГЭ, ОГЭ, олимпиады, школьная физика и индивидуальная подготовка.

Основной домен: `https://primeacademy-edu.ru`.

## Стек

- Vite
- React
- TypeScript
- React Router
- Tailwind CSS
- lucide-react
- sharp для генерации производных изображений

## Требования

- Node.js 20+
- npm

## Локальный запуск

```bash
npm ci
npm run dev
```

Обычно Vite открывается на `http://localhost:5173/`.

## Проверки

```bash
npm run lint
npm run build
npm test
```

`npm run build` сначала генерирует WebP, иконки и OG-картинку, затем собирает Vite и создаёт HTML-копии для публичных маршрутов.

## Структура

- `src/App.tsx` — маршруты и общая раскладка.
- `src/content.ts` — курсы, преподаватели, FAQ и основной контент.
- `src/data/reviews.ts` — данные отзывов и ссылки на оригиналы.
- `src/config/site.ts` — единая конфигурация домена, Telegram, SEO и юридических ссылок.
- `src/config/seo.ts` — SEO-данные и JSON-LD.
- `src/components` — layout, секции и UI-компоненты.
- `src/pages` — страницы курсов, юридические страницы и 404.
- `public` — `.htaccess`, `robots.txt`, `sitemap.xml`, иконки, OG-картинка, публичные изображения.
- `scripts` — генерация ассетов, postbuild HTML и smoke-тесты.

## Маршруты

- `/`
- `/courses/ege`
- `/courses/oge`
- `/courses/olympiad`
- `/courses/school`
- `/courses/individual`
- `/privacy`
- `/personal-data-consent`
- `/marketing-consent`
- `/terms`
- `/cookies`

## Production Build

```bash
npm ci
npm run lint
npm run build
npm test
```

Готовая папка для загрузки на хостинг: `dist`.

## Timeweb

1. Выполнить `npm run build`.
2. Загрузить содержимое папки `dist` в корень сайта на виртуальном хостинге.
3. Убедиться, что в корне хостинга лежат `index.html`, `.htaccess`, `robots.txt`, `sitemap.xml`, папка `assets` и публичные изображения.
4. В панели Timeweb привязать домен `primeacademy-edu.ru` к сайту.
5. Дождаться обновления DNS.
6. Выпустить бесплатный сертификат Let’s Encrypt в панели Timeweb.
7. После успешного выпуска сертификата включить HTTPS в панели. Принудительный HTTP → HTTPS редирект лучше включать только после проверки сертификата.
8. Проверить `www.primeacademy-edu.ru`: `.htaccess` перенаправляет его на домен без `www`.

## .htaccess

Файл `public/.htaccess` копируется в `dist` при сборке. Он:

- отдаёт существующие файлы напрямую;
- не ломает JS, CSS, изображения, `robots.txt` и `sitemap.xml`;
- направляет SPA-маршруты на `index.html`;
- перенаправляет `www.primeacademy-edu.ru` на `primeacademy-edu.ru`;
- не включает принудительный HTTP → HTTPS редирект до активации SSL.

## Проверка После Деплоя

1. Открывается `https://primeacademy-edu.ru`.
2. HTTP перенаправляется на HTTPS после активации сертификата.
3. `www` перенаправляется на адрес без `www`.
4. Все страницы курсов открываются напрямую.
5. Обновление вложенной страницы не даёт 404.
6. `sitemap.xml` доступен.
7. `robots.txt` доступен и содержит ссылку на sitemap.
8. OG-превью отображается.
9. Telegram-кнопки открывают `@primephys_bot`.
10. На телефоне нет горизонтального скролла.

## Важные Заметки

- На сайте нет собственной формы, оплаты, регистрации и личного кабинета.
- Основной сценарий заявки открывает Telegram-бота `@primephys_bot`.
- Telegram-канал с материалами: `@primephys`.
- Перед подключением аналитики, пикселей, платежей или серверных форм нужно обновить юридические документы и пользовательские тексты.
