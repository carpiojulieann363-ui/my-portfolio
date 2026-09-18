import heroPortrait from '../assets/home-portrait.jpg'
import heroMobile from '../assets/home-mobile.jpg'

const base = import.meta.env.BASE_URL

function HomeSection() {
  return (
    <section id="home" className="section home-section">
      <div className="home-grid">
        <div className="home-text">
          <p className="home-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Open to work &middot; San Pedro, Laguna
          </p>
          <h1 className="home-name">Julie Ann B. Carpio</h1>
          <p className="home-role">
            UI/UX design &amp; encoder &mdash; building clean, simple web
            experiences.
          </p>
          <div className="home-actions">
            <a href={`${base}CV_JulieAnnCarpio.pdf`} download className="btn-primary">
              Download CV
            </a>
            <button
              className="btn-secondary"
              onClick={() =>
                document
                  .getElementById('works')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View my work
            </button>
          </div>
          <div className="home-meta">
            <span>carpiojulieann363@gmail.com</span>
            <span className="home-meta-sep" aria-hidden="true" />
            <span>Based in San Pedro, Laguna</span>
          </div>
        </div>
        <div className="home-visual">
          <picture>
            <source
              media="(max-width: 480px)"
              srcSet={heroMobile}
            />
            <img src={heroPortrait} alt="Julie Ann Carpio" className="home-cutout" />
          </picture>
        </div>
      </div>
      <button className="home-scroll" onClick={() =>
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      } aria-label="Scroll to about section">
        <span className="home-scroll-text">Scroll</span>
        <svg className="home-scroll-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  )
}

export default HomeSection