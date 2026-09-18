import { useState, useEffect, useRef } from 'react'
import './LoadingIntro.css'

function LoadingIntro({ onFinish }) {
  const [dots, setDots] = useState(0)
  const [fading, setFading] = useState(false)
  const finished = useRef(false)

  useEffect(() => {
    const t = setTimeout(() => setDots((d) => (d + 1) % 4), 400)
    return () => clearTimeout(t)
  }, [dots])

  useEffect(() => {
    const t = setTimeout(() => setFading(true), 900)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!fading || finished.current) return
    finished.current = true
    const t = setTimeout(onFinish, 500)
    return () => clearTimeout(t)
  }, [fading, onFinish])

  return (
    <div className={`loading-intro${fading ? ' fade-out' : ''}`}>
      <span className="loading-intro-logo">
        JAC.{'.'.repeat(dots)}
      </span>
    </div>
  )
}

export default LoadingIntro
