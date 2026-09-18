import { useRef, useState, useEffect, useCallback } from 'react'

const base = import.meta.env.BASE_URL
const coarsePointer =
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

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

function ProjectVideo({ title, video, poster }) {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)
  const hoverPlayAt = useRef(0)
  const reducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const [playing, setPlaying] = useState(false)
  const [errored, setErrored] = useState(false)

  const attemptPlay = useCallback((el) => {
    if (!el) return
    el.play()
      .then(() => setPlaying(true))
      .catch((err) => {
        if (err && (err.name === 'NotAllowedError' || err.name === 'AbortError')) return
        setErrored(true)
      })
  }, [])

  const play = useCallback(() => {
    const el = videoRef.current
    if (el && el.paused && !errored) attemptPlay(el)
  }, [attemptPlay, errored])

  const pause = useCallback(() => {
    const el = videoRef.current
    if (el && !el.paused) el.pause()
  }, [])

  const retry = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    setErrored(false)
    el.load()
    attemptPlay(el)
  }, [attemptPlay])

  const toggle = useCallback(() => {
    if (errored) {
      retry()
      return
    }
    const el = videoRef.current
    if (el && el.paused) play()
    else pause()
  }, [errored, retry, play, pause])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap || coarsePointer || reducedMotion.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            play()
          } else {
            pause()
          }
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(wrap)
    return () => {
      observer.disconnect()
      pause()
    }
  }, [play, pause])

  const handleWrapClick = () => {
    if (Date.now() - hoverPlayAt.current < 300) {
      hoverPlayAt.current = 0
      return
    }
    toggle()
  }

  return (
    <div
      ref={wrapRef}
      className="work-thumb-wrap"
      role="group"
      aria-label={`Demo video: ${title}`}
      onMouseEnter={() => {
        hoverPlayAt.current = Date.now()
        play()
      }}
      onMouseLeave={pause}
      onClick={handleWrapClick}
    >
      <video
        ref={videoRef}
        src={video}
        preload="metadata"
        muted
        loop
        playsInline
        poster={poster}
        className="work-thumb"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => setErrored(true)}
      />
      {errored ? (
        <div className="work-error" role="alert">
          <span className="work-error-text">Couldn't load video</span>
          <button type="button" className="work-retry" onClick={retry}>
            Retry
          </button>
        </div>
      ) : (
        <button
          type="button"
          className={`work-play${playing ? ' is-playing' : ''}`}
          aria-label={playing ? `Pause demo: ${title}` : `Play demo: ${title}`}
          onClick={(e) => {
            e.stopPropagation()
            toggle()
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  )
}

function WorksSection() {
  return (
    <section id="works" className="section works-section">
      <p className="section-eyebrow">( 03 ) &mdash; projects</p>
      <h2 className="section-title">Projects</h2>
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