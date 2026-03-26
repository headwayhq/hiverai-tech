import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>HiverAI</h3>
            <p>Agentic AI that thinks, decides, and resolves — so your team doesn't have to.</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <Link to="/technology">Technology</Link>
            <Link to="/agents">Agents</Link>
            <Link to="/integrations">Integrations</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer-col" id="get-started">
            <h4>Contact</h4>
            <a href="mailto:hello@hiverai.tech">hello@hiverai.tech</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 HiverAI. All rights reserved.</span>
          <span className="footer-tagline">Built with intelligence.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
