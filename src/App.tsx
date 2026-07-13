import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { CoursesSection } from './components/sections/CoursesSection'
import { FaqSection } from './components/sections/FaqSection'
import { Hero } from './components/sections/Hero'
import { LeadSection } from './components/sections/LeadSection'
import { LearningSystemSection } from './components/sections/LearningSystemSection'
import { MaterialsBanner } from './components/sections/MaterialsBanner'
import { ReviewsSection } from './components/sections/ReviewsSection'
import { TeachersSection } from './components/sections/TeachersSection'
import { courses } from './content'
import { CoursePage } from './pages/CoursePage'
import { LegalPage, type LegalPageKey } from './pages/LegalPage'
import { NotFoundPage } from './pages/NotFoundPage'

const legalPageKeys: LegalPageKey[] = [
  'privacy',
  'personal-data-consent',
  'marketing-consent',
  'terms',
  'cookies',
]

function App() {
  return <MainLayout />
}

function MainLayout() {
  return (
    <main>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {courses.map((course) => (
          <Route key={course.id} path={`courses/${course.id}`} element={<CoursePage course={course} />} />
        ))}
        {legalPageKeys.map((pageKey) => (
          <Route key={pageKey} path={pageKey} element={<LegalPage pageKey={pageKey} />} />
        ))}
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  )
}

function ScrollToTop() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    const currentHash = hash || window.location.hash

    if (!currentHash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const scrollToAnchor = () => {
      const targetId = decodeURIComponent(currentHash.slice(1))
      const target = document.getElementById(targetId)
      target?.scrollIntoView({ block: 'start', behavior: 'auto' })
    }

    const frame = window.requestAnimationFrame(scrollToAnchor)
    const timers = [0, 80, 220, 500, 900, 1600, 2600].map((delay) => window.setTimeout(scrollToAnchor, delay))
    window.addEventListener('load', scrollToAnchor, { once: true })

    return () => {
      window.cancelAnimationFrame(frame)
      timers.forEach((timer) => window.clearTimeout(timer))
      window.removeEventListener('load', scrollToAnchor)
    }
  }, [hash, pathname])

  return null
}

function HomePage() {
  useEffect(() => {
    document.title = 'PRIME ACADEMY — физика без зубрёжки'
    const meta = document.querySelector('meta[name="description"]')
    meta?.setAttribute(
      'content',
      'PRIME ACADEMY: онлайн-школа физики с живыми семинарами, двумя преподавателями и подготовкой без механической зубрёжки.',
    )
  }, [])

  return (
    <>
      <Hero />
      <TeachersSection />
      <MaterialsBanner />
      <CoursesSection />
      <LearningSystemSection />
      <ReviewsSection />
      <LeadSection />
      <FaqSection />
    </>
  )
}

export default App
