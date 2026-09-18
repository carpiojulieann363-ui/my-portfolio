import cutout from '../assets/profile-cutout.webp'
import heroPortrait from '../assets/home-portrait.jpg'
import heroMobile from '../assets/home-mobile.jpg'

const base = import.meta.env.BASE_URL

function HomeSection() {
  return (
    <section id="home" className="section home-section">
      <picture>
        <source
          media="(max-width: 480px)"
          srcSet={heroMobile}
        />
        <source
          media="(max-width: 1024px)"
          srcSet={heroPortrait}
        />
        <img src={cutout} alt="Julie Ann Carpio" className="home-cutout" />
      </picture>
      <div className="home-grid">
        <div className="home-text">
          <h1 className="home-name">
            <span className="home-greeting">Hi There,</span>
            I'm Julie Ann B. Carpio<br />
            <span className="home-role">UI/UX DESIGN &amp; ENCODER</span>
          </h1>
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
        </div>
      </div>
      <div className="home-decor" aria-hidden="true">
        <span className="decor-dots" />
        <span className="decor-ring decor-ring-lg" />
        <span className="decor-ring decor-ring-sm" />
        <span className="decor-slash" />
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