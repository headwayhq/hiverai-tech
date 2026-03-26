import { motion } from 'framer-motion'
import { Plug, ArrowRight, Lock, Workflow, Globe, Database, Mail, Calendar, CreditCard, BarChart3, Users, FileText } from 'lucide-react'
import './Integrations.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

const integrations = [
  { icon: <Mail size={22} />, name: 'Gmail', category: 'Email', status: 'coming' },
  { icon: <Database size={22} />, name: 'Salesforce', category: 'CRM', status: 'coming' },
  { icon: <Users size={22} />, name: 'HubSpot', category: 'CRM', status: 'coming' },
  { icon: <Workflow size={22} />, name: 'Slack', category: 'Communication', status: 'coming' },
  { icon: <FileText size={22} />, name: 'Notion', category: 'Knowledge Base', status: 'coming' },
  { icon: <Globe size={22} />, name: 'Shopify', category: 'E-commerce', status: 'coming' },
  { icon: <CreditCard size={22} />, name: 'Stripe', category: 'Payments', status: 'coming' },
  { icon: <Calendar size={22} />, name: 'Google Calendar', category: 'Scheduling', status: 'coming' },
  { icon: <BarChart3 size={22} />, name: 'Analytics', category: 'Reporting', status: 'coming' },
]

function Integrations() {
  return (
    <div className="page-wrapper integ-page">
      {/* Dot pattern background */}
      <div className="integ-dots-bg" />

      {/* Hero */}
      <section className="integ-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="integ-hero-content">
            <motion.div className="integ-badge" variants={fadeUp} custom={0}>
              <Plug size={14} />
              <span>Coming Soon</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1}>
              Integrations That Make <br />
              <span className="integ-gradient-text">Agents Smarter</span>
            </motion.h1>
            <motion.p className="integ-hero-sub" variants={fadeUp} custom={2}>
              When your agent connects to your tools, it doesn't just read data — it reasons about it.
              Pull context from CRMs, trigger workflows in Slack, check payment status in Stripe —
              all from a single conversation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How integrations work */}
      <section className="integ-how">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>How It Will Work</h2>
            <p>The agent dynamically decides which tools to use based on conversation context</p>
          </motion.div>

          <div className="integ-how-grid">
            {[
              {
                icon: <Plug size={24} />,
                title: 'Connect',
                desc: 'Link your favorite tools with one-click OAuth. No engineering required.',
                color: 'var(--accent-green)',
              },
              {
                icon: <Workflow size={24} />,
                title: 'Reason',
                desc: 'The agent understands what data lives where and intelligently queries the right source.',
                color: 'var(--accent-purple)',
              },
              {
                icon: <Globe size={24} />,
                title: 'Act',
                desc: 'From fetching order status to creating tickets — the agent takes action autonomously.',
                color: 'var(--accent-orange)',
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="integ-how-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="integ-how-icon" style={{ color: step.color }}>
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration grid */}
      <section className="integ-grid-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>Upcoming Integrations</h2>
            <p>The first wave of connections shipping soon</p>
          </motion.div>

          <div className="integ-grid">
            {integrations.map((item, i) => (
              <motion.div
                key={item.name}
                className="integ-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.5}
              >
                <div className="integ-card-icon">{item.icon}</div>
                <div className="integ-card-info">
                  <div className="integ-card-name">{item.name}</div>
                  <div className="integ-card-category">{item.category}</div>
                </div>
                <div className="integ-card-status">
                  <Lock size={12} />
                  <span>Soon</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="integ-cta">
        <div className="container">
          <motion.div
            className="integ-cta-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="integ-cta-glow" />
            <h2>Integrations Are on the Way</h2>
            <p>We're building deep connections so your agent can reason across all your tools. Stay tuned.</p>
            <a href="mailto:hello@hiverai.tech" className="btn-primary">
              Get in Touch <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Integrations
