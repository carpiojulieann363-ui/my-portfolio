import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'works', label: 'Works' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const handler = () => setMenuOpen(false)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [menuOpen])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    for (const { id } of NAV_ITEMS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <span className="nav-logo">JAC.</span>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={(e) => { e.stopPropagation(); setMenuOpen((m) => !m) }}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link ${active === id ? 'active' : ''}`}
                onClick={() => handleClick(id)}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="nav-toggle-item">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
