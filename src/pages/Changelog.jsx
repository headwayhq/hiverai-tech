import { motion } from 'framer-motion'
import { Megaphone } from 'lucide-react'
import './Changelog.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

const releases = [
  {
    version: '0.1.0',
    date: '2026-02-10',
    title: 'Initial Launch',
    highlights: [
      { type: 'feature', text: 'Launched HiverAI site with Home, Technology, Agents, and Integrations pages' },
      { type: 'feature', text: 'Hiver support agent — the first live AI agent with demo chat' },
      { type: 'feature', text: 'Responsive design with mobile navigation' },
      { type: 'improvement', text: 'Smooth page transitions with Framer Motion animations' },
    ],
  },
]

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function Changelog() {
  return (
    <div className="page-wrapper changelog-page">
      <div className="changelog-bg" />

      {/* Hero */}
      <section className="changelog-hero">
        <div className="container">
          <motion.div className="changelog-hero-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="changelog-badge">
              <Megaphone size={14} />
              What's New
            </div>
            <h1>Product <span className="changelog-gradient-text">Changelog</span></h1>
            <p className="changelog-hero-sub">
              A history of everything we've shipped.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Releases */}
      <section className="changelog-releases">
        <div className="container">
          <div className="releases-timeline">
            {releases.map((release, i) => (
              <motion.div
                key={release.version}
                className="release-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="release-dot" />
                <div className="release-card">
                  <div className="release-header">
                    <span className="release-version">v{release.version}</span>
                    <span className="release-date">{formatDate(release.date)}</span>
                  </div>
                  <h3>{release.title}</h3>
                  <div className="release-highlights">
                    {release.highlights.map((h, j) => (
                      <div key={j} className="release-highlight">
                        <span className={`highlight-type ${h.type}`}>{h.type}</span>
                        <span className="highlight-text">{h.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Changelog
