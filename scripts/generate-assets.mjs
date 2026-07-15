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

const ogPrimeAcademySvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070714"/>
      <stop offset="52%" stop-color="#10135c"/>
      <stop offset="100%" stop-color="#32128f"/>
    </linearGradient>
    <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#73e2ff" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#73e2ff" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="70" height="70" patternUnits="userSpaceOnUse">
      <path d="M70 0H0V70" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>
    </pattern>
    <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="22" stdDeviation="24" flood-color="#02030d" flood-opacity="0.34"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.82"/>
  <circle cx="1070" cy="60" r="300" fill="#073bff" opacity="0.45"/>
  <circle cx="980" cy="520" r="360" fill="url(#cyanGlow)"/>
  <circle cx="120" cy="560" r="230" fill="#73e2ff" opacity="0.09"/>

  <g transform="translate(80 82)">
    <rect x="0" y="0" width="198" height="46" rx="23" fill="#ffffff" opacity="0.1"/>
    <circle cx="25" cy="23" r="7" fill="#73e2ff"/>
    <text x="47" y="30" fill="#ffffff" opacity="0.9" font-family="Segoe UI, Arial, sans-serif" font-size="18" font-weight="800">PHYSICS SYSTEM</text>

    <text x="0" y="138" fill="#73e2ff" font-family="Arial Black, Arial, sans-serif" font-size="78" font-weight="900">PRIME</text>
    <text x="304" y="138" fill="#ffffff" font-family="Arial Black, Arial, sans-serif" font-size="78" font-weight="900">ACADEMY</text>

    <text x="0" y="229" fill="#ffffff" font-family="Arial Black, Arial, sans-serif" font-size="42" font-weight="900">Онлайн-подготовка по физике</text>
    <text x="2" y="294" fill="#dfe9ff" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="800">ЕГЭ · ОГЭ · Олимпиады · Школьная программа</text>

    <rect x="0" y="354" width="610" height="2" rx="1" fill="#73e2ff" opacity="0.72"/>
    <text x="0" y="419" fill="#ffffff" opacity="0.86" font-family="Segoe UI, Arial, sans-serif" font-size="25" font-weight="600">Вузовский подход и методики ведущих школ России</text>
  </g>

  <g transform="translate(850 130) scale(0.82)" filter="url(#softShadow)">
    <rect x="0" y="0" width="326" height="326" rx="34" fill="#ffffff" opacity="0.1"/>
    <rect x="1" y="1" width="324" height="324" rx="33" fill="none" stroke="#ffffff" stroke-opacity="0.16"/>
    <circle cx="163" cy="163" r="82" fill="none" stroke="#73e2ff" stroke-opacity="0.9" stroke-width="4"/>
    <ellipse cx="163" cy="163" rx="130" ry="46" fill="none" stroke="#ffffff" stroke-opacity="0.45" stroke-width="3" transform="rotate(-24 163 163)"/>
    <ellipse cx="163" cy="163" rx="130" ry="46" fill="none" stroke="#ffffff" stroke-opacity="0.32" stroke-width="3" transform="rotate(24 163 163)"/>
    <circle cx="163" cy="163" r="12" fill="#ffffff"/>
    <circle cx="70" cy="98" r="9" fill="#73e2ff"/>
    <circle cx="254" cy="213" r="9" fill="#73e2ff"/>
    <text x="82" y="288" fill="#ffffff" font-family="Arial Black, Arial, sans-serif" font-size="62" font-weight="900">PA</text>
  </g>
</svg>`

await sharp(Buffer.from(ogPrimeAcademySvg))
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(path.join(publicDir, 'og-prime-academy.png'))
