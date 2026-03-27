import { motion } from 'framer-motion'
import { MessageSquare, ArrowDown, Bot, Send } from 'lucide-react'
import AgentCharacter from '../components/AgentCharacter'
import './AgentPage.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

function AgentPage({ agent }) {
  return (
    <div className={`page-wrapper agent-page agent-theme-${agent.id}`} style={{ '--agent-color': agent.color, '--agent-bg': agent.bg || '#0a0a12' }}>
      {/* Background */}
      <div className="agent-page-bg">
        <div className="agent-page-orb orb-main" />
        <div className="agent-page-orb orb-secondary" />
      </div>

      {/* Hero with character */}
      <section className="agent-page-hero">
        <div className="container">
          <div className="agent-page-hero-grid">
            <motion.div className="agent-page-hero-text" initial="hidden" animate="visible">
              <motion.div className="agent-page-badge" variants={fadeUp} custom={0}>
                {agent.logo ? (
                  <img src={agent.logo} alt={agent.name} className="agent-badge-logo" />
                ) : (
                  <MessageSquare size={14} />
                )}
                <span>{agent.badge}</span>
              </motion.div>

              <motion.h1 variants={fadeUp} custom={1}>
                {agent.headline}
              </motion.h1>

              <motion.p className="agent-page-subtitle" variants={fadeUp} custom={2}>
                {agent.description}
              </motion.p>

              <motion.div className="agent-page-features" variants={fadeUp} custom={3}>
                {agent.features.map((f, i) => (
                  <div key={i} className="agent-feature-pill">
                    <span className="feature-check">✓</span>
                    {f}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="agent-page-hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <AgentCharacter color={agent.color} name={agent.name} agentId={agent.id} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo + CTA two-column */}
      <section className="agent-page-demo-cta">
        <div className="container">
          <div className="demo-cta-grid">
            {/* Left: Demo chat */}
            <motion.div
              className="demo-cta-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2>See It In Action</h2>
              <p className="demo-cta-subtitle">A real conversation with {agent.name}</p>

              <div className="demo-chat">
                <div className="demo-chat-header">
                  <div className="demo-chat-dot" />
                  <span>{agent.name}</span>
                  <span className="demo-chat-status">Online</span>
                </div>
                <div className="demo-chat-messages">
                  {agent.demoMessages.map((msg, i) => (
                    <motion.div
                      key={i}
                      className={`demo-msg ${msg.role}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                    >
                      {msg.role === 'agent' && (
                        <div className="demo-msg-avatar">
                          <Bot size={14} />
                        </div>
                      )}
                      <div className="demo-msg-bubble">{msg.text}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="demo-chat-input">
                  <input type="text" placeholder="Type a message..." disabled />
                  <button className="demo-chat-send">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right: CTA */}
            <motion.div
              className="demo-cta-right"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bubble-cta">
                <div className="bubble-cta-glow" />
                <motion.div
                  className="bubble-cta-icon"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                  <ArrowDown size={32} />
                </motion.div>
                <h2>Try {agent.name} Right Now</h2>
                <p>Click the chat bubble in the bottom-right corner to start a conversation.</p>
                <div className="bubble-pointer">
                  <div className="bubble-pointer-line" />
                  <motion.div
                    className="bubble-pointer-dot"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  />
                  <svg className="bubble-pointer-arrow" viewBox="0 0 60 60" width="60" height="60">
                    <path d="M10 10 Q30 30 50 50" stroke={agent.color} strokeWidth="2" fill="none" strokeDasharray="4 4" />
                    <path d="M40 48 L50 50 L48 40" stroke={agent.color} strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AgentPage
