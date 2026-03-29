import { useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, ExternalLink, Plus, Code, MessageCircle, CheckCircle2, Copy, Check } from 'lucide-react'
import './GetStarted.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

const steps = [
  {
    number: '01',
    icon: <ExternalLink size={20} />,
    title: 'Create a Hiver account',
    description: 'Head to hiverhq.com and sign up for an account. Set up your workspace and team.',
    link: { url: 'https://hiverhq.com/', label: 'Go to Hiver' },
  },
  {
    number: '02',
    icon: <Plus size={20} />,
    title: 'Create a chat channel',
    description: 'In your Hiver dashboard, navigate to Channels and create a new live chat channel for your website.',
  },
  {
    number: '03',
    icon: <MessageCircle size={20} />,
    title: 'Add an AI agent',
    description: 'Go to the AI Agent settings in your channel and enable the HiverAI agent. Configure its persona and knowledge base.',
  },
  {
    number: '04',
    icon: <Code size={20} />,
    title: 'Copy the snippet',
    description: 'Hiver will generate an embed snippet for your chat channel. Copy it and paste it into the box on the left.',
    highlight: true,
  },
]

function GetStarted() {
  const [snippet, setSnippet] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [copied, setCopied] = useState(false)

  const handlePaste = (e) => {
    setSnippet(e.target.value)
    if (e.target.value.trim().length > 10) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const handleCopyExample = () => {
    const example = `<script src="https://widget.hiverhq.com/chat.js" data-channel-id="YOUR_CHANNEL_ID"></script>`
    navigator.clipboard.writeText(example)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="page-wrapper get-started-page">
      <div className="get-started-bg" />

      {/* Hero */}
      <section className="get-started-hero">
        <div className="container">
          <motion.div className="get-started-hero-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="get-started-badge">
              <Rocket size={14} />
              Setup Guide
            </div>
            <h1>Get <span className="get-started-gradient-text">Started</span></h1>
            <p className="get-started-hero-sub">
              Deploy your AI agent in minutes. Follow the steps and paste your snippet below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="get-started-main">
        <div className="container">
          <div className="get-started-grid">

            {/* Left — Snippet area */}
            <motion.div className="snippet-column" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="snippet-card">
                <div className="snippet-header">
                  <div className="snippet-header-dots">
                    <span /><span /><span />
                  </div>
                  <span className="snippet-header-title">Embed Snippet</span>
                </div>
                <div className="snippet-body">
                  <textarea
                    className="snippet-input"
                    placeholder={'<!-- Paste your Hiver chat snippet here -->\n\n<script src="https://widget.hiverhq.com/chat.js"\n  data-channel-id="YOUR_CHANNEL_ID">\n</script>'}
                    value={snippet}
                    onChange={handlePaste}
                    spellCheck={false}
                  />
                </div>
                <div className="snippet-footer">
                  <button className="snippet-example-btn" onClick={handleCopyExample}>
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copied!' : 'Copy example snippet'}
                  </button>
                  <div className={`snippet-status ${isActive ? 'active' : ''}`}>
                    <CheckCircle2 size={14} />
                    {isActive ? 'Snippet detected' : 'Waiting for snippet'}
                  </div>
                </div>
              </div>

              {/* Preview bubble */}
              {isActive && (
                <motion.div
                  className="preview-bubble"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div className="preview-bubble-header">
                    <div className="preview-bubble-dot" />
                    <span>HiverAI Agent</span>
                  </div>
                  <div className="preview-bubble-body">
                    <div className="preview-msg agent-msg">
                      Hi there! I'm your AI assistant. How can I help you today?
                    </div>
                  </div>
                  <div className="preview-bubble-input">
                    <input type="text" placeholder="Type a message..." readOnly />
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Right — Instructions */}
            <motion.div className="steps-column" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <h2 className="steps-title">How to deploy</h2>
              <p className="steps-subtitle">Follow these steps to get your AI agent live on your website.</p>

              <div className="steps-list">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    className={`step-item ${step.highlight ? 'highlight' : ''}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i + 1}
                  >
                    <div className="step-number">{step.number}</div>
                    <div className="step-content">
                      <div className="step-icon">{step.icon}</div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                      {step.link && (
                        <a href={step.link.url} target="_blank" rel="noopener noreferrer" className="step-link">
                          {step.link.label} <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom chat bubble hint */}
              <div className="chat-hint">
                <div className="chat-hint-icon">
                  <MessageCircle size={20} />
                </div>
                <div className="chat-hint-text">
                  <strong>That's it!</strong> Once the snippet is on your site, a chat bubble will appear in the bottom-right corner for your visitors to talk to your AI agent.
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default GetStarted
