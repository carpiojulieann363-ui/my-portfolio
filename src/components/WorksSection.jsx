import { useRef, useState } from 'react'

const base = import.meta.env.BASE_URL

const PROJECTS = [
  {
    title: 'Ester Supermarket Inc. Ecommerce',
    desc: 'A full-featured online store built with Angular, PHP and MySQL Workbench and modern web technologies.',
    tags: ['Angular', 'PHP', 'MySQL'],
    video: `${base}Demo_Ecommerce.mp4`,
    poster: `${base}Home_Ecommerce.png`,
  },
  {
    title: 'Victoria Website',
    desc: 'A modern business platform built with HTML, Javascript, and CSS featuring interactive client tools and seamless service showcases.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    video: `${base}Demo_VSA.mp4`,
    poster: `${base}posters/poster-vsa.svg`,
  },
  {
    title: 'My Portfolio',
    desc: 'A modern personal portfolio website built with React, featuring dynamic project filtering and a responsive layout.',
    tags: ['React', 'JavaScript', 'CSS'],
    video: `${base}Demo_myportfolio.mp4`,
    poster: `${base}posters/poster-portfolio.svg`,
  },
]

const canHover = () => window.matchMedia('(hover: hover)').matches

function ProjectVideo({ title, video, poster, className }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const play = () => {
    const el = videoRef.current
    if (el && el.paused) {
      el.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  const pause = () => {
    const el = videoRef.current
    if (el && !el.paused) {
      el.pause()
      setPlaying(false)
    }
  }

  const toggle = () => (playing ? pause() : play())

  return (
    <div
      className={`work-thumb-wrap ${className}`}
      role="button"
      tabIndex={0}
      aria-label={`Play demo video: ${title}`}
      onClick={canHover() ? undefined : toggle}
      onMouseEnter={canHover() ? play : undefined}
      onMouseLeave={canHover() ? pause : undefined}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggle()
        }
      }}
    >
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        className="work-thumb"
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      <span className={`work-play${playing ? ' is-playing' : ''}`} aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </div>
  )
}

function WorksSection() {
  return (
    <section id="works" className="section works-section">
      <h2 className="section-title">Projects</h2>
      <br />
      <p className="works-intro">Projects built with creativity, passion, and modern web solutions.</p>
      <div className="works-grid">
        {PROJECTS.map(({ title, desc, tags, video, poster }) => (
          <div key={title} className="work-card">
            <ProjectVideo title={title} video={video} poster={poster} />
            <h3 className="work-title">{title}</h3>
            <p className="work-desc">{desc}</p>
            <div className="work-tags">
              {tags.map((tag) => (
                <span key={tag} className="work-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorksSection