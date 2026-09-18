import { SOCIALS } from '../data/socials'
import './FooterSection.css'

function FooterSection() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-section">
      <div className="footer-brand">
        <span className="footer-logo">JAC.</span>
        <span className="footer-status">
          <span>San Pedro, Laguna&nbsp;·</span>
          <span className="status-dot" aria-hidden="true" />
          <span>Open to work</span>
        </span>
        <div className="footer-icons">
          {SOCIALS.map(({ label, url, icon }) => (
            <a key={label} href={url} className="footer-icon-link" target="_blank" rel="noopener noreferrer" title={label}>
              {icon}
            </a>
          ))}
        </div>
      </div>
      <p className="footer-copyright">&copy; {year} Julie Ann B. Carpio. All rights reserved.</p>
    </footer>
  )
}

export default FooterSection
