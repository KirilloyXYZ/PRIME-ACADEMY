export const TELEGRAM_BOT_URL = 'https://t.me/primephys_bot'
export const TELEGRAM_BOT_LABEL = '@primephys_bot'
export const TELEGRAM_CHANNEL_URL = 'https://t.me/primephys'
export const TELEGRAM_CHANNEL_LABEL = '@primephys'

export function withTelegramBotStart(payload: string) {
  return `${TELEGRAM_BOT_URL}?start=${encodeURIComponent(payload)}`
}
