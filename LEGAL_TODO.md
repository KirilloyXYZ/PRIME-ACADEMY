# LEGAL TODO Before Public Launch

This file lists legal and operational decisions that must be checked before publishing PRIME ACADEMY.

## Required Fields To Fill

- `siteDomain`: replace `TODO_DOMAIN` in `src/config/legal.ts`.
- `effectiveDate`: replace `TODO_EFFECTIVE_DATE` in `src/config/legal.ts`.
- `operatorInn`: currently `TODO_INN`. Decide whether Kirill's INN must be shown publicly for the selected legal model and hosting/payment scenario.
- `public/sitemap.xml`: replace `TODO_DOMAIN`.

## Current Operator Data

- Operator full name: Кузнецов Кирилл Алексеевич.
- Operator status: самозанятый.
- Operator city: Москва.
- Operator email: `kirilkuznecov0018@gmail.com`.
- Personal Telegram contact: `https://t.me/Total_victories`.
- Telegram channel: `https://t.me/physicspace`.

## Current MVP Mode

The project uses Mode A:

- the site does not collect lead data through a form;
- the main CTA opens Kirill's Telegram;
- the user writes to Kirill manually;
- the site does not create a personal account;
- the site does not accept online payments;
- the site does not use cookies, analytics, pixels, CRM, Firebase, Supabase, Google Forms, Airtable, Notion, Tally, or Typeform.

## Do Not Connect Without Updating Documents

- lead form submission;
- backend;
- Telegram Bot API;
- database;
- CRM;
- online payment;
- analytics;
- cookies;
- advertising pixels;
- email/SMS/push mailing systems.

## Mode B Warning

If the owner wants automatic form submission to Telegram later, that is Mode B. Before implementation, prepare a separate technical and legal plan:

- backend or Telegram bot architecture;
- server location;
- whether leads are stored;
- consent timestamp and consent version storage;
- logging policy;
- personal data policy update;
- Roskomnadzor notification check;
- security and spam protection.

## Minor Users

- If the student is under 14, the parent or legal representative should contact Kirill.
- If the student is 14-17, payment and conditions should be agreed with a parent or legal representative.

## Claims To Recheck

- Kirill scored 98 in physics.
- Irina scored 98 in physics.
- Kirill and Irina are MEPhI students.
- Kirill and Irina are physics olympiad prize winners.
- All photos can be used publicly and commercially.
- No guaranteed score, admission, or olympiad result is promised.
