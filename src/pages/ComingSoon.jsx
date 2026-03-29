import { motion } from 'framer-motion'
import { Sparkles, Workflow, Globe, BrainCircuit, BarChart3, Clock, Rocket } from 'lucide-react'
import './ComingSoon.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

const comingSoon = [
  {
    id: 'multi-agent',
    title: 'Multi-Agent Workflows',
    description: 'Chain multiple agents together for complex, multi-step customer resolutions that span across services.',
    icon: <Workflow size={20} />,
    eta: 'Q2 2026',
    tags: ['agents', 'automation'],
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time insights into agent performance, resolution rates, and customer satisfaction metrics.',
    icon: <BarChart3 size={20} />,
    eta: 'Q2 2026',
    tags: ['analytics', 'dashboard'],
  },
  {
    id: 'multilingual',
    title: 'Multilingual Support',
    description: 'Agents that understand and respond in 50+ languages with native-level fluency and cultural context.',
    icon: <Globe size={20} />,
    eta: 'Q3 2026',
    tags: ['i18n', 'languages'],
  },
  {
    id: 'custom-training',
    title: 'Custom Agent Training',
    description: 'Train agents on your own knowledge base, SOPs, and historical tickets for domain-specific expertise.',
    icon: <BrainCircuit size={20} />,
    eta: 'Q3 2026',
    tags: ['training', 'customization'],
  },
]

function ComingSoon() {
  return (
    <div className="page-wrapper coming-soon-page">
      <div className="coming-soon-bg" />

      {/* Hero */}
      <section className="coming-soon-hero">
        <div className="container">
          <motion.div className="coming-soon-hero-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="coming-soon-badge">
              <Rocket size={14} />
              Roadmap
            </div>
            <h1>What's <span className="coming-soon-gradient-text">Coming Next</span></h1>
            <p className="coming-soon-hero-sub">
              A look at what we're building. New capabilities, integrations, and intelligence — shipping soon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="coming-soon-grid-section">
        <div className="container">
          <div className="upcoming-grid">
            {comingSoon.map((item, i) => (
              <motion.div
                key={item.id}
                className="upcoming-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="upcoming-pill">
                  <Sparkles size={10} />
                  Soon
                </div>
                <div className="upcoming-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="upcoming-footer">
                  <div className="upcoming-tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="upcoming-tag">{tag}</span>
                    ))}
                  </div>
                  <span className="upcoming-eta">
                    <Clock size={11} style={{ marginRight: 4, verticalAlign: -1 }} />
                    {item.eta}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComingSoon
