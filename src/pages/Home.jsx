import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Zap, MessageSquare, Shield, Target, Swords } from 'lucide-react'
import './Home.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

function Home() {
  return (
    <div className="page-wrapper home-page">
      {/* Ambient background */}
      <div className="home-ambient">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>

      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <motion.div className="hero-content" initial="hidden" animate="visible">
            <motion.div className="hero-badge" variants={fadeUp} custom={0}>
              <Zap size={14} />
              <span>Agentic AI for Customer Support</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeUp} custom={1}>
              AI Agents That<br />
              <span className="gradient-text">Think & Resolve</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={fadeUp} custom={2}>
              Deploy intelligent chat agents that autonomously understand context,
              reason through problems, and resolve customer queries — without human intervention.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp} custom={3}>
              <Link to="/agents" className="btn-primary">
                Explore Agents <ArrowRight size={16} />
              </Link>
              <Link to="/technology" className="btn-secondary">
                See How It Works
              </Link>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeUp} custom={4}>
              <div className="stat">
                <span className="stat-value">4</span>
                <span className="stat-label">Live Agents</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-value">AI</span>
                <span className="stat-label">Native</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Animated agent visualization */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="agent-brain">
              <div className="brain-core">
                <Brain size={32} />
              </div>
              <div className="brain-ring ring-1" />
              <div className="brain-ring ring-2" />
              <div className="brain-ring ring-3" />

              <div className="connection-node node-1">
                <img src="/logos/Hiver.jpeg" alt="Hiver" className="node-logo" />
                <span>Hiver</span>
              </div>
              <div className="connection-node node-2">
                <img src="/logos/apple_white.jpg" alt="Apple" className="node-logo" />
                <span>Apple</span>
              </div>
              <div className="connection-node node-3">
                <img src="/logos/Stripe.png" alt="Stripe" className="node-logo" />
                <span>Stripe</span>
              </div>
              <div className="connection-node node-4">
                <img src="/logos/tesla.jpg" alt="Tesla" className="node-logo" />
                <span>Tesla</span>
              </div>
              <div className="connection-node node-competitor">
                <img src="/logos/intercom.jpeg" alt="Intercom" className="node-logo" />
                <span>vs Intercom</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What makes HiverAI different */}
      <section className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <h2>Why HiverAI?</h2>
            <p>Not just another chatbot. An agent that understands, reasons, and acts.</p>
          </motion.div>

          <div className="features-grid">
            {[
              {
                icon: <Brain size={24} />,
                title: 'Thinks Autonomously',
                desc: 'Our agent doesn\'t just pattern-match. It reasons through customer issues using intelligent knowledge retrieval and multi-step decision making.',
                color: 'var(--accent-purple)',
              },
              {
                icon: <Zap size={24} />,
                title: 'Deep Context',
                desc: 'Connects to your knowledge base, past tickets, and documentation to deliver accurate, relevant answers.',
                color: 'var(--accent-orange)',
              },
              {
                icon: <MessageSquare size={24} />,
                title: 'Natural Conversations',
                desc: 'Engages customers in human-like dialogue, asking clarifying questions and providing precise, contextual answers.',
                color: 'var(--accent-blue)',
              },
              {
                icon: <Shield size={24} />,
                title: 'Enterprise Ready',
                desc: 'Deploy as a simple chat widget. Embed with a single HTML snippet. Works with your existing support stack.',
                color: 'var(--accent-green)',
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                <div className="feature-icon" style={{ color: feature.color, background: `${feature.color}15` }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>Curious how our agents work?</h2>
            <p>Explore the technology behind HiverAI's agentic capabilities.</p>
            <Link to="/agents" className="btn-primary">
              Explore Agents <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
