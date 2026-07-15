import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Seo } from './components/Seo'
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
import { homeSeo } from './config/seo'
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
  return (
    <ErrorBoundary>
      <MainLayout />
    </ErrorBoundary>
  )
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
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    let frame = 0
    let attempts = 0
    let cancelled = false
    const targetId = decodeURIComponent(hash.slice(1))

    const scrollToAnchor = () => {
      const target = document.getElementById(targetId)

      if (!target) {
        return false
      }

      target.scrollIntoView({ block: 'start', behavior: 'auto' })
      return true
    }

    const tick = () => {
      if (cancelled || scrollToAnchor()) {
        return
      }

      attempts += 1

      if (attempts < 24) {
        frame = window.requestAnimationFrame(tick)
      }
    }

    frame = window.requestAnimationFrame(tick)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
    }
  }, [hash, pathname])

  return null
}

function HomePage() {
  return (
    <>
      <Seo data={homeSeo} />
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
