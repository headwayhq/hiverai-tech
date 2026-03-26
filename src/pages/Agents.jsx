import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageSquare, Bot, Star, ArrowRight } from 'lucide-react'
import './Agents.css'

const agents = [
  {
    id: 'hiver',
    name: 'Hiver Support',
    tagline: 'Primary support agent for Hiver',
    description: 'The flagship HiverAI agent — handles L1/L2 queries autonomously with human-like conversation.',
    color: '#ff6b2b',
    primary: true,
    path: '/agents/hiver',
  },
  {
    id: 'apple',
    name: 'Apple Agent',
    tagline: 'Support agent for Apple ecosystem',
    description: 'Specialized for Apple product support — device troubleshooting, warranty queries, and product guidance.',
    color: '#0071E3',
    primary: false,
    path: '/agents/apple',
  },
  {
    id: 'intercom',
    name: 'Intercom Agent',
    tagline: 'AI-first responder for Intercom',
    description: 'Drops into your Intercom widget — resolves common queries instantly, hands off complex cases with context.',
    color: '#6834F0',
    primary: false,
    path: '/agents/intercom',
  },
  {
    id: 'zendesk',
    name: 'Zendesk Agent',
    tagline: 'Works within Zendesk tickets',
    description: 'Integrates with Zendesk — reads ticket history, suggests resolutions, auto-responds to common patterns.',
    color: '#17494D',
    primary: false,
    path: '/agents/zendesk',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

function Agents() {
  return (
    <div className="page-wrapper agents-page">
      <div className="agents-ambient" style={{ '--agent-color': '#ff6b2b' }}>
        <div className="agent-orb" />
      </div>

      {/* Hero */}
      <section className="agents-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="agents-hero-content">
            <div className="agents-badge">
              <Bot size={14} />
              <span>4 Live Agents</span>
            </div>
            <h1>Meet Your <span className="agents-gradient-text">AI Agents</span></h1>
            <p>Each agent is a deployable chat widget — embed it on any website with a single HTML snippet. Same intelligent engine, customized for each use case.</p>
          </motion.div>
        </div>
      </section>

      {/* Agent cards */}
      <section className="agents-directory">
        <div className="container">
          <div className="agents-card-grid">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Link to={agent.path} className="agent-directory-card" style={{ '--card-color': agent.color }}>
                  <div className="agent-card-header">
                    <div className="agent-card-icon">
                      <MessageSquare size={22} />
                    </div>
                    {agent.primary && (
                      <div className="agent-card-primary">
                        <Star size={12} />
                        Primary
                      </div>
                    )}
                  </div>
                  <h3>{agent.name}</h3>
                  <span className="agent-card-tagline">{agent.tagline}</span>
                  <p>{agent.description}</p>
                  <div className="agent-card-action">
                    <span>Explore Agent</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Agents
