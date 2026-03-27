import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>HiverAI</h3>
            <p>Agentic AI by <a href="https://hiverhq.com" target="_blank" rel="noopener noreferrer" className="footer-hiver-link">Hiver</a> that thinks, decides, and resolves — so your team doesn't have to.</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <Link to="/technology">Technology</Link>
            <Link to="/agents">Agents</Link>
            <Link to="/integrations">Integrations</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="https://hiverhq.com/about" target="_blank" rel="noopener noreferrer">About</a>
            <a href="https://hiverhq.com/blog" target="_blank" rel="noopener noreferrer">Blog</a>
            <a href="https://hiverhq.com/careers" target="_blank" rel="noopener noreferrer">Careers</a>
          </div>
          <div className="footer-col" id="get-started">
            <h4>Contact</h4>
            <a href="mailto:hello@hiverai.tech">hello@hiverai.tech</a>
            <a href="https://hiverhq.com" target="_blank" rel="noopener noreferrer">hiverhq.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Hiver. All rights reserved.</span>
          <span className="footer-tagline">Built with intelligence.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
