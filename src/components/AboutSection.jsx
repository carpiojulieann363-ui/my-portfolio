const base = import.meta.env.BASE_URL

function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="about-grid">
        <div className="about-content">
          <p className="section-eyebrow">( 01 ) &mdash; about</p>
          <h2 className="about-title">About Me</h2>
          <p className="about-lead">
            IT graduate &amp; frontend designer-encoder based in San Pedro,
            Laguna.
          </p>
          <p className="about-body">
            I build clean web experiences with React, Angular, JavaScript, and
            CSS. During my on-the-job training at <strong>Breighton Land
            Inc.</strong>, I gained hands-on experience in system development,
            programming, data management, and troubleshooting.
          </p>
          <p className="about-body">
            As a fresh graduate, I'm eager to apply what I've learned and keep
            growing as an IT professional.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">3</span>
              <span className="about-stat-label">Projects built</span>
            </div>
          </div>
        </div>
        <div className="about-images">
          <img src={`${base}10.jpg`} alt="Julie Ann Carpio" className="about-img" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
