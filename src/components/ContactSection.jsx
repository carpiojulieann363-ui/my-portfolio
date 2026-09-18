import { SOCIALS } from '../data/socials'

function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <p className="section-eyebrow">( 05 ) &mdash; contact</p>
      <h2 className="section-title">Contact</h2>
      <p className="contact-intro">
        Have a project in mind? Let us work together.
      </p>
      <div className="contact-columns">
        <form
          className="contact-form"
          action="https://formsubmit.co/carpiojulieann363@gmail.com"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" className="form-input" required />
          <input type="email" name="email" placeholder="Your Email" className="form-input" required />
          <input type="text" name="_subject" placeholder="Subject" className="form-input" />
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-textarea"
            rows={5}
            required
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://my-portfolio.vercel.app/#contact" />
          <input type="text" name="_honey" className="form-honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
        <div className="connect-section">
          <h3 className="connect-title">Connect with me</h3>
          <div className="connect-links">
            {SOCIALS.map(({ label, url, icon }) => (
              <a key={label} href={url} className="connect-link" target="_blank" rel="noopener noreferrer">
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
