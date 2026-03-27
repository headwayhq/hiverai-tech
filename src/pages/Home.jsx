import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Swords } from 'lucide-react'
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
                <span className="stat-value">5</span>
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
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
                  {/* Head */}
                  <circle cx="40" cy="28" r="16" fill="#fff" opacity="0.9" />
                  {/* Hair */}
                  <path d="M24 26 Q24 12 40 12 Q56 12 56 26 Q54 18 48 14 Q44 12 40 12 Q36 12 32 14 Q26 18 24 26 Z" fill="#2D2D3D" />
                  {/* Eyes */}
                  <circle cx="34" cy="28" r="2.5" fill="#1a1a2e" />
                  <circle cx="46" cy="28" r="2.5" fill="#1a1a2e" />
                  <circle cx="35" cy="27" r="1" fill="#fff" />
                  <circle cx="47" cy="27" r="1" fill="#fff" />
                  {/* Smile */}
                  <path d="M35 34 Q40 38 45 34" stroke="#C4887A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  {/* Body */}
                  <path d="M28 44 Q28 40 32 38 L40 36 L48 38 Q52 40 52 44 L52 58 Q52 60 50 60 L30 60 Q28 60 28 58 Z" fill="#ff6b2b" />
                  {/* Headset */}
                  <path d="M23 26 Q23 16 40 16 Q57 16 57 26" stroke="#8b5cf6" strokeWidth="2.5" fill="none" />
                  <rect x="20" y="24" width="5" height="8" rx="2.5" fill="#8b5cf6" />
                  <rect x="55" y="24" width="5" height="8" rx="2.5" fill="#8b5cf6" />
                  {/* Mic */}
                  <path d="M20 30 Q16 32 17 36" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <circle cx="17" cy="37" r="2" fill="#8b5cf6" />
                  {/* AI sparkle on shoulder */}
                  <path d="M52 42 L54 40 L56 42 L54 44 Z" fill="#fff" opacity="0.8" />
                  <path d="M26 42 L28 40 L30 42 L28 44 Z" fill="#fff" opacity="0.6" />
                </svg>
              </div>
              <div className="brain-ring ring-1" />
              <div className="brain-ring ring-2" />
              <div className="brain-ring ring-3" />

              <Link to="/agents/hiver" className="connection-node node-1">
                <img src="/logos/Hiver.jpeg" alt="Hiver" className="node-logo" />
                <span>Hiver</span>
              </Link>
              <Link to="/agents/apple" className="connection-node node-2">
                <img src="/logos/apple_white.jpg" alt="Apple" className="node-logo" />
                <span>Apple</span>
              </Link>
              <Link to="/agents/stripe" className="connection-node node-3">
                <img src="/logos/Stripe.png" alt="Stripe" className="node-logo" />
                <span>Stripe</span>
              </Link>
              <Link to="/agents/tesla" className="connection-node node-4">
                <img src="/logos/tesla.jpg" alt="Tesla" className="node-logo" />
                <span>Tesla</span>
              </Link>
              <Link to="/agents/intercom" className="connection-node node-competitor">
                <img src="/logos/intercom.jpeg" alt="Intercom" className="node-logo" />
                <span>vs Intercom</span>
              </Link>
            </div>
          </motion.div>
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
