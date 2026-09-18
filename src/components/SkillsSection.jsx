const LEVELS = {
  Solid: { pct: 100 },
  Working: { pct: 65 },
  Exploring: { pct: 35 },
}

const SKILLS = [
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', level: 'Solid' },
      { name: 'JavaScript', level: 'Solid' },
      { name: 'HTML & CSS', level: 'Solid' },
      { name: 'Angular', level: 'Working' },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { name: 'PHP', level: 'Working' },
      { name: 'Node.js', level: 'Working' },
      { name: 'MySQL', level: 'Working' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git & GitHub', level: 'Solid' },
      { name: 'VS Code', level: 'Solid' },
      { name: 'XAMPP', level: 'Solid' },
      { name: 'MySQL Workbench', level: 'Working' },
      { name: 'Eclipse', level: 'Exploring' },
    ],
  },
]

function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <p className="skills-eyebrow">( 02 ) &mdash; skills</p>
      <h2 className="section-title">Skills</h2>
      <p className="skills-intro">Technologies and tools I specialize in.</p>
      <div className="skills-list">
        {SKILLS.map(({ title, items }) => (
          <div key={title} className="skill-group">
            <h3 className="skill-group-title">{title}</h3>
            {items.map(({ name, level }) => (
              <div key={name} className="skill-row">
                <div className="skill-row-top">
                  <span className="skill-name">{name}</span>
                  <span className="skill-level">{level}</span>
                </div>
                <div
                  className="skill-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={LEVELS[level].pct}
                >
                  <span
                    className="skill-bar-fill"
                    style={{ width: `${LEVELS[level].pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection