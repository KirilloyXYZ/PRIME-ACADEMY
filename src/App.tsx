import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { CoursesSection } from './components/sections/CoursesSection'
import { FaqSection } from './components/sections/FaqSection'
import { Hero } from './components/sections/Hero'
import { LeadSection } from './components/sections/LeadSection'
import { LearningSystemSection } from './components/sections/LearningSystemSection'
import { MaterialsBanner } from './components/sections/MaterialsBanner'
import { ProofSection } from './components/sections/ProofSection'
import { TeachersSection } from './components/sections/TeachersSection'
import { courses } from './content'
import type { Course } from './content'
import { CoursePage } from './pages/CoursePage'
import { LegalPage, type LegalPageKey } from './pages/LegalPage'
import { NotFoundPage } from './pages/NotFoundPage'

const legalPageKeys = new Set<LegalPageKey>([
  'privacy',
  'personal-data-consent',
  'marketing-consent',
  'terms',
  'cookies',
])

function App() {
  const path = normalizePath(window.location.pathname)

  if (isLegalPage(path)) {
    return (
      <main>
        <HeaderAndLegal pageKey={path.slice(1) as LegalPageKey} />
      </main>
    )
  }

  const course = getCourseFromPath(path)

  if (course) {
    return (
      <main>
        <Header />
        <CoursePage course={course} />
        <Footer />
      </main>
    )
  }

  if (path !== '/') {
    return (
      <main>
        <Header />
        <NotFoundPage />
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />
      <Hero />
      <ProofSection />
      <TeachersSection />
      <CoursesSection />
      <LearningSystemSection />
      <MaterialsBanner />
      <LeadSection />
      <FaqSection />
      <Footer />
    </main>
  )
}

function HeaderAndLegal({ pageKey }: { pageKey: LegalPageKey }) {
  return (
    <>
      <Header />
      <LegalPage pageKey={pageKey} />
      <Footer />
    </>
  )
}

function normalizePath(pathname: string) {
  if (!pathname || pathname === '/index.html') {
    return '/'
  }

  return pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
}

function isLegalPage(path: string) {
  return legalPageKeys.has(path.slice(1) as LegalPageKey)
}

function getCourseFromPath(path: string): Course | undefined {
  const match = path.match(/^\/courses\/([^/]+)$/)

  if (!match) {
    return undefined
  }

  return courses.find((course) => course.id === match[1])
}

export default App
