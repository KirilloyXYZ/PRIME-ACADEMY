import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()

const sourceImages = [
  'src/assets/images/ira-hero-current.jpg',
  'src/assets/images/irina-casual-course.jpg',
  'src/assets/images/irina-studio-teacher.jpg',
  'src/assets/images/kirill-board-course.jpg',
  'src/assets/images/kirill-hero-current.jpg',
  'src/assets/images/kirill-studio-course.jpg',
]

await Promise.all(
  sourceImages.map(async (relativePath) => {
    const source = path.join(root, relativePath)
    const target = source.replace(/\.jpg$/i, '.webp')

    await sharp(source).webp({ quality: 82 }).toFile(target)
  }),
)

const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#070714"/>
  <text x="72" y="332" fill="#73e2ff" font-family="Arial Black, Arial, sans-serif" font-size="236" font-weight="900">P</text>
  <text x="260" y="332" fill="#ffffff" font-family="Arial Black, Arial, sans-serif" font-size="236" font-weight="900">A</text>
</svg>`

const publicDir = path.join(root, 'public')
await mkdir(publicDir, { recursive: true })

await sharp(Buffer.from(iconSvg)).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'))
await sharp(Buffer.from(iconSvg)).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'))
await sharp(Buffer.from(iconSvg)).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png'))

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#070714"/>
  <circle cx="1020" cy="120" r="210" fill="#073bff" opacity="0.82"/>
  <circle cx="108" cy="536" r="190" fill="#73e2ff" opacity="0.18"/>
  <text x="84" y="154" fill="#73e2ff" font-family="Arial Black, Arial, sans-serif" font-size="42" font-weight="900">PRIME ACADEMY</text>
  <text x="84" y="302" fill="#ffffff" font-family="Arial Black, Arial, sans-serif" font-size="86" font-weight="900">Физика без зубрёжки</text>
  <text x="88" y="390" fill="#f1eeff" font-family="Segoe UI, Arial, sans-serif" font-size="38" font-weight="700">ЕГЭ · ОГЭ · олимпиады · школьная база</text>
  <text x="88" y="470" fill="#ffffff" opacity="0.9" font-family="Segoe UI, Arial, sans-serif" font-size="30">Не зубри физику. Собери её в систему.</text>
  <path d="M826 420h220" stroke="#73e2ff" stroke-width="10" stroke-linecap="round"/>
  <path d="M936 310v220" stroke="#73e2ff" stroke-width="10" stroke-linecap="round"/>
</svg>`

await sharp(Buffer.from(ogSvg)).png().toFile(path.join(publicDir, 'og-image.png'))
