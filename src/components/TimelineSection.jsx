const EVENTS = [
  {
    year: '2022 - 2026',
    title: 'BS IN INFORMATION TECHNOLOGY',
    subtitle: 'Saint Francis Institute of Computer Studies',
    desc: 'Graduated with a Bachelor of Science in Information Technology.',
  },
  {
    year: '2020 - 2022',
    title: 'STEM (SENIOR HIGH SCHOOL)',
    subtitle: 'IETI College of Science and Technology, Inc.',
  },
  {
    year: '2016 - 2020',
    title: 'JUNIOR HIGH SCHOOL',
    subtitle: 'Sampaguita National High School',
  },
  {
    year: '2010 - 2016',
    title: 'ELEMENTARY',
    subtitle: 'Cabatuan Elementary School',
  },
  {
    year: '2009 - 2010',
    title: 'KINDERGARTEN',
    subtitle: 'Cabatuan Elementary School',
  },
]

function TimelineSection() {
  return (
    <section id="timeline" className="section timeline-section">
      <p className="section-eyebrow">( 04 ) &mdash; timeline</p>
      <h2 className="section-title">Timeline</h2>
      <div className="timeline">
        {EVENTS.map(({ year, title, subtitle, desc }, i) => (
          <div key={year + title} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{year}</span>
              <h3 className="timeline-title">{title}</h3>
              <span className="timeline-subtitle">{subtitle}</span>
              {desc && <p className="timeline-desc">{desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TimelineSection
