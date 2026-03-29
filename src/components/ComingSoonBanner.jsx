import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import './ComingSoonBanner.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function ComingSoonBanner() {
  const { pathname } = useLocation()

  if (pathname === '/coming-soon') return null

  return (
    <section className="coming-soon-banner">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Link to="/coming-soon" className="banner-card">
            <div className="banner-glow" />
            <div className="banner-content">
              <div className="banner-pill">
                <Sparkles size={12} />
                Coming Soon
              </div>
              <h3>See what we're building next</h3>
              <p>Multi-agent workflows, analytics, multilingual support, and more on the roadmap.</p>
            </div>
            <div className="banner-action">
              View Roadmap <ArrowRight size={16} />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ComingSoonBanner
