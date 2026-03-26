import { motion } from 'framer-motion'
import { Database, Brain, GitBranch, Layers, Search, Cpu, ArrowRight } from 'lucide-react'
import './Technology.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

function Technology() {
  return (
    <div className="page-wrapper tech-page">
      {/* Background grid */}
      <div className="tech-grid-bg" />

      {/* Hero */}
      <section className="tech-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="tech-hero-content">
            <motion.div className="tech-badge" variants={fadeUp} custom={0}>
              <Cpu size={14} />
              <span>Under the Hood</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1}>
              An Agent That <span className="tech-gradient-text">Thinks</span>
            </motion.h1>
            <motion.p className="tech-hero-sub" variants={fadeUp} custom={2}>
              HiverAI isn't a keyword matcher or a decision tree. It's a reasoning engine
              that retrieves relevant knowledge, thinks through the problem, and decides the best action
              — all in real time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="arch-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>How the Agent Works</h2>
            <p>From question to resolution in milliseconds</p>
          </motion.div>

          <div className="arch-flow">
            {[
              {
                icon: <Search size={24} />,
                title: '1. Query Understanding',
                desc: 'The agent parses the customer\'s message, identifies intent, extracts entities, and formulates a retrieval strategy.',
                color: 'var(--accent-cyan)',
              },
              {
                icon: <Database size={24} />,
                title: '2. Knowledge Retrieval',
                desc: 'Searches across your knowledge base, past conversations, documentation, and connected data sources using vector similarity and semantic search.',
                color: 'var(--accent-blue)',
              },
              {
                icon: <Brain size={24} />,
                title: '3. Reasoning & Decision',
                desc: 'The agent synthesizes retrieved context, evaluates multiple resolution paths, and selects the most appropriate response — it genuinely thinks about the problem.',
                color: 'var(--accent-purple)',
              },
              {
                icon: <GitBranch size={24} />,
                title: '4. Action Execution',
                desc: 'Based on its decision, the agent can respond, escalate, trigger workflows, or query additional sources — all autonomously.',
                color: 'var(--accent-orange)',
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="arch-step"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                <div className="arch-step-icon" style={{ color: step.color, borderColor: `${step.color}30` }}>
                  {step.icon}
                </div>
                <div className="arch-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                {i < 3 && <div className="arch-connector" style={{ background: step.color }} />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack highlights */}
      <section className="tech-stack-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>Built on Solid Foundations</h2>
            <p>Modern AI infrastructure designed for reliability and speed</p>
          </motion.div>

          <div className="tech-stack-grid">
            {[
              { icon: <Layers size={20} />, label: 'Retrieval Pipeline', sub: 'Intelligent knowledge retrieval' },
              { icon: <Brain size={20} />, label: 'LLM Reasoning', sub: 'Multi-step decision engine' },
              { icon: <Database size={20} />, label: 'Vector Store', sub: 'Semantic knowledge index' },
              { icon: <GitBranch size={20} />, label: 'Agent Framework', sub: 'Tool-use & orchestration' },
              { icon: <Search size={20} />, label: 'Semantic Search', sub: 'Context-aware retrieval' },
              { icon: <Cpu size={20} />, label: 'Edge Inference', sub: 'Low-latency responses' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="tech-chip"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="tech-chip-icon">{item.icon}</div>
                <div>
                  <div className="tech-chip-label">{item.label}</div>
                  <div className="tech-chip-sub">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection intelligence */}
      <section className="connections-section">
        <div className="container">
          <motion.div
            className="connections-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="connections-content">
              <h2>Connection Intelligence</h2>
              <p>
                The agent is aware of all its connections — knowledge bases, APIs, databases, and tools.
                It dynamically decides which connections to query based on the context of each conversation.
                No rigid workflows. Just intelligent, adaptive decision-making.
              </p>
              <a href="#get-started" className="btn-primary">
                See It In Action <ArrowRight size={16} />
              </a>
            </div>
            <div className="connections-visual">
              <div className="conn-hub">
                <Brain size={28} />
              </div>
              {['KB', 'API', 'DB', 'CRM', 'Docs'].map((label, i) => (
                <div
                  key={label}
                  className="conn-spoke"
                  style={{
                    transform: `rotate(${i * 72}deg) translateX(100px) rotate(-${i * 72}deg)`,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Technology
