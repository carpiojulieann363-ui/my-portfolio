import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import LoadingIntro from './components/LoadingIntro'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import WorksSection from './components/WorksSection'
import TimelineSection from './components/TimelineSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'
import './App.css'

function App() {
  const [loading, setLoading] = useState(() => {
    if (typeof window === 'undefined') return true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return !sessionStorage.getItem('intro:seen')
  })

  useEffect(() => {
    if (!loading) {
      const el = document.getElementById('home')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [loading])

  const finishIntro = () => {
    sessionStorage.setItem('intro:seen', '1')
    setLoading(false)
  }

  return (
    <>
      {loading && <LoadingIntro onFinish={finishIntro} />}
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}

export default App
