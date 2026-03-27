import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageSquare, Bot, Star, ArrowRight, Target } from 'lucide-react'
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
    id: 'stripe',
    name: 'Stripy',
    tagline: 'Handles Stripe billing & payments',
    description: 'Integrates with Stripe — resolves billing queries, manages subscriptions, and handles refunds automatically.',
    color: '#635BFF',
    primary: false,
    path: '/agents/stripe',
  },
  {
    id: 'tesla',
    name: 'Tesla Agent',
    tagline: 'Support for Tesla owners',
    description: 'AI-powered support for Tesla vehicles — troubleshooting, charging, service scheduling, and software updates.',
    color: '#e82127',
    primary: false,
    path: '/agents/tesla',
  },
]

const competitor = {
  id: 'intercom',
  name: 'HiverAI vs Intercom Fin',
  tagline: 'See how we stack up against the industry leader',
  description: 'Intercom Fin is considered the best AI support agent in the market. We built HiverAI to beat it — higher resolution rates, deeper reasoning, and transparent pricing. See the comparison.',
  color: '#6834F0',
  path: '/agents/intercom',
}

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

      {/* Competitor comparison */}
      <section className="agents-competitor">
        <div className="container">
          <motion.div
            className="competitor-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="competitor-header">
              <div className="competitor-badge">
                <Target size={14} />
                <span>Competitor Comparison</span>
              </div>
              <h2>Built to Beat the Best</h2>
              <p>We don't shy away from comparison. See how HiverAI stacks up against the industry's top AI agent.</p>
            </div>
            <Link to={competitor.path} className="competitor-card" style={{ '--card-color': competitor.color }}>
              <div className="competitor-card-left">
                <h3>{competitor.name}</h3>
                <span className="agent-card-tagline">{competitor.tagline}</span>
                <p>{competitor.description}</p>
              </div>
              <div className="competitor-card-right">
                <span>See Comparison</span>
                <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Agents
