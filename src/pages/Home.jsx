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
                <span className="stat-value">6</span>
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
                <svg viewBox="0 0 80 68" fill="none" xmlns="http://www.w3.org/2000/svg" width="90" height="78">
                  {/* Head */}
                  <circle cx="40" cy="28" r="22" fill="#fff" opacity="0.9" />
                  {/* Hair */}
                  <path d="M18 26 Q18 8 40 6 Q62 8 62 26 Q60 16 52 10 Q46 6 40 6 Q34 6 28 10 Q20 16 18 26 Z" fill="#2D2D3D" />
                  {/* Eyes */}
                  <circle cx="32" cy="28" r="3.5" fill="#1a1a2e" />
                  <circle cx="48" cy="28" r="3.5" fill="#1a1a2e" />
                  <circle cx="33.5" cy="26.5" r="1.5" fill="#fff" />
                  <circle cx="49.5" cy="26.5" r="1.5" fill="#fff" />
                  {/* Eyebrows */}
                  <path d="M26 22 Q32 18 37 22" stroke="#2D2D3D" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M43 22 Q48 18 54 22" stroke="#2D2D3D" strokeWidth="2" strokeLinecap="round" fill="none" />
                  {/* Nose */}
                  <path d="M39 33 Q40 36 42 36" stroke="#D4A088" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  {/* Smile */}
                  <path d="M33 40 Q40 46 47 40" stroke="#C4887A" strokeWidth="2" strokeLinecap="round" fill="none" />
                  {/* Body */}
                  <path d="M24 58 Q24 52 30 48 L40 44 L50 48 Q56 52 56 58 L56 68 L24 68 Z" fill="#ff6b2b" />
                  {/* Headset */}
                  <path d="M16 26 Q16 10 40 8 Q64 10 64 26" stroke="#8b5cf6" strokeWidth="3" fill="none" />
                  <rect x="12" y="22" width="6" height="10" rx="3" fill="#8b5cf6" />
                  <rect x="62" y="22" width="6" height="10" rx="3" fill="#8b5cf6" />
                  {/* Mic */}
                  <path d="M12 30 Q7 33 8 38" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <circle cx="8" cy="40" r="3" fill="#8b5cf6" />
                  {/* AI sparkles */}
                  <path d="M58 48 L60 45 L62 48 L60 51 Z" fill="#fff" opacity="0.8" />
                  <path d="M20 48 L22 45 L24 48 L22 51 Z" fill="#fff" opacity="0.6" />
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
              <Link to="/agents/diamondere" className="connection-node node-5">
                <img src="/logos/diamondere.jpeg" alt="Diamondere" className="node-logo" />
                <span>Diamondere</span>
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
