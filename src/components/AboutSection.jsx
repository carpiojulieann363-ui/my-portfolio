const base = import.meta.env.BASE_URL

function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="about-grid">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <br />
          <p className="about-greeting">Hi, I'm Julie Ann B. Carpio</p>
          <p>
            I am an Information Technology graduate with a strong passion for
            technology, web development, and continuous learning. I graduated
            with a Bachelor of Science in Information Technology.
          </p>
          <p>
            I have experience in frontend development using technologies such
            as React.js, Angular, JavaScript, and CSS. During my On-the-Job
            Training (OJT) at <strong>Breighton Land Inc.</strong>, I gained
            hands-on experience in system development, programming, data
            management, and troubleshooting, which helped strengthen my
            technical and problem-solving skills.
          </p>
          <p>
            As a fresh graduate, I am eager to apply my knowledge, learn new
            technologies, and contribute to innovative projects while
            continuously growing as an IT professional.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">3</span>
              <span className="about-stat-label">PROJECTS BUILT</span>
            </div>
          </div>
        </div>
        <div className="about-images">
          <img src={`${base}Home_Julie.jpg`} alt="Julie Ann Carpio" className="about-img" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
