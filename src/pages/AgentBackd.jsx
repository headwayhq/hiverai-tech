import { ChevronRight, Phone, Mail, MapPin, Menu } from 'lucide-react'
import useChatWidget from '../hooks/useChatWidget'
import './AgentBackd.css'

const navLinks = [
  { label: 'Business Loans', children: ['Business Term Loan', 'Business Line of Credit'] },
  { label: 'B2B Payments', children: ['B2B Merchants', 'B2B Buyers'] },
  { label: 'Company', children: ['About Us', 'Resources', 'Our Technology'] },
]

const featuredLogos = [
  { src: '/images/startupjunkie-logo.webp', alt: 'Startup Junkie' },
  { src: '/images/forbes-logo.webp', alt: 'Forbes' },
  { src: '/images/entrepreneur-logo.webp', alt: 'Entrepreneur' },
  { src: '/images/eof-logo.webp', alt: 'EOF' },
  { src: '/images/funderintel-logo.webp', alt: 'FunderIntel' },
]

const stats = [
  { value: '$1B', label: 'of financial backing approved to small businesses' },
  { value: '10K+', label: 'businesses have worked with Backd to obtain the funding they need' },
  { value: '100K+', label: 'payment transactions for merchants and buyers facilitated through Backd' },
]

const resources = [
  {
    title: 'What Is a Business Term Loan? A Guide for Small Business Owners',
    desc: 'Learn how business term loans work, their benefits, and how to use them strategically to fuel sustainable growth without losing equity.',
  },
  {
    title: 'How Inventory Financing Can Unlock Sales Opportunities and Cash Flow',
    desc: 'Inventory financing allows you to use business inventory as collateral for a loan. Learn how this funding works and what your options are.',
  },
  {
    title: 'Nothing But Net Terms: A Guide to Net Terms In Business Financing',
    desc: 'Discover net terms and B2B Buy Now, Pay Later options in the evolving marketplace. Learn how BackdPay revolutionizes B2B payments.',
  },
]

function AgentBackd() {
  useChatWidget('pyw9vNSDGLCj3RLMMqdtcAZo')

  return (
    <div className="bd-page">
      {/* Header */}
      <header className="bd-header">
        <div className="bd-header-inner">
          <div className="bd-logo">
            <img src="/logos/backd.png" alt="Backd" className="bd-logo-img" />
          </div>
          <nav className="bd-nav">
            {navLinks.map(link => (
              <a key={link.label} className="bd-nav-link">
                {link.label}
                <ChevronRight size={14} className="bd-nav-chevron" />
              </a>
            ))}
          </nav>
          <div className="bd-header-actions">
            <a className="bd-login-link">LOGIN</a>
            <a className="bd-btn-primary">Get Started</a>
          </div>
          <button className="bd-mobile-menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bd-hero">
        <div className="bd-container">
          <div className="bd-hero-content">
            <h1>The Fastest and Easiest Way to Fund your Business Growth</h1>
            <p>Discover the leading suite of business financial products built to fuel your business' growth, increase profitability, and bolster your cashflow.</p>
            <div className="bd-hero-actions">
              <a className="bd-btn-primary bd-btn-lg">Apply Now</a>
              <a className="bd-btn-outline bd-btn-lg">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="bd-featured">
        <div className="bd-container">
          <span className="bd-featured-label">FEATURED IN</span>
          <div className="bd-featured-logos">
            {featuredLogos.map(logo => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="bd-featured-logo" />
            ))}
          </div>
        </div>
      </section>

      {/* Capital Section */}
      <section className="bd-section bd-capital">
        <div className="bd-container">
          <div className="bd-section-badge">BACKD CAPITAL</div>
          <h2 className="bd-section-title">Business Capital Solutions</h2>
          <div className="bd-products-grid">
            {/* Line of Credit */}
            <div className="bd-product-card">
              <div className="bd-product-icon">
                <div className="bd-icon-circle bd-icon-blue">
                  <span>$</span>
                </div>
              </div>
              <h3>Business Line of Credit</h3>
              <p className="bd-product-sub">Revolving credit designed for flexibility and growth.</p>
              <ul className="bd-product-features">
                <li>Draw Funds Anytime</li>
                <li>From $10K - $1M</li>
                <li>Flexible Terms Built Around Your Business Needs</li>
                <li>Soft Credit Pull, Doesn't Affect Credit Score</li>
              </ul>
              <a className="bd-learn-more">Learn More <ChevronRight size={14} /></a>
            </div>
            {/* Term Loan */}
            <div className="bd-product-card">
              <div className="bd-product-icon">
                <div className="bd-icon-circle bd-icon-purple">
                  <span>$</span>
                </div>
              </div>
              <h3>Business Term Loan</h3>
              <p className="bd-product-sub">Simple and easy process to access working capital.</p>
              <ul className="bd-product-features">
                <li>Flexible Capital That Fuels Growth</li>
                <li>From $50K - $1.5M</li>
                <li>Terms up to 24 months</li>
                <li>Automatic Daily, Weekly, or Semi-Monthly Payments</li>
              </ul>
              <a className="bd-learn-more">Learn More <ChevronRight size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Payments Section */}
      <section className="bd-section bd-payments">
        <div className="bd-container">
          <div className="bd-section-badge">BACKD PAYMENTS</div>
          <h2 className="bd-section-title">Business Payment Solutions</h2>
          <p className="bd-section-sub">Flexible Terms &amp; Payment Options</p>
          <div className="bd-payments-grid">
            <div className="bd-payment-card">
              <h3>B2B Net Terms</h3>
              <p>Offer Net Terms alongside or in place of in-house terms</p>
              <span className="bd-payment-detail">Net 15/30/45/60 &amp; 90 terms</span>
            </div>
            <div className="bd-payment-card">
              <h3>B2B BNPL</h3>
              <p>Offer financing for purchases in any channel</p>
              <span className="bd-payment-detail">Financing options up to 24 months</span>
              <span className="bd-payment-detail">Flexible payment terms to suit any buyer's needs</span>
            </div>
            <div className="bd-payment-card">
              <h3>B2B Embedded Finance</h3>
              <p>Offer business customers business funding without leaving your webpage</p>
              <span className="bd-payment-detail">Enable your business customers with a direct capital infusion</span>
            </div>
          </div>
          <div className="bd-payments-cta">
            <a className="bd-learn-more">Learn More <ChevronRight size={14} /></a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bd-section bd-proof">
        <div className="bd-container">
          <div className="bd-proof-header">
            <span className="bd-proof-label">WHAT BUSINESSES SAY ABOUT BACKD</span>
            <h2 className="bd-section-title">OUR TRACK RECORD</h2>
          </div>
          <div className="bd-stats-grid">
            {stats.map(stat => (
              <div key={stat.value} className="bd-stat-card">
                <span className="bd-stat-value">{stat.value}</span>
                <p className="bd-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Overview Cards */}
      <section className="bd-section bd-overview">
        <div className="bd-container">
          <h2 className="bd-section-title">Get Capital for Your Business and Offer Flexible Payment Options to Your Buyers</h2>
          <div className="bd-overview-grid">
            <div className="bd-overview-card">
              <img src="/images/backd_capital_group.webp" alt="Backd Capital" className="bd-overview-img" />
              <h3>Term Loan &amp; Line of Credit</h3>
              <p>Access working capital with 24-hour turnarounds from $25K - $2M and revolving credit with competitive terms.</p>
              <a className="bd-learn-more">Learn More <ChevronRight size={14} /></a>
            </div>
            <div className="bd-overview-card">
              <img src="/images/backd_payments_group.webp" alt="Backd Payments" className="bd-overview-img" />
              <h3>Net Payment Terms</h3>
              <p>Get Net 30 payment terms for qualifying purchases and flexible financing with payment options up to 24 months.</p>
              <a className="bd-learn-more">Learn More <ChevronRight size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bd-section bd-resources">
        <div className="bd-container">
          <h2 className="bd-section-title">News and Resources</h2>
          <div className="bd-resources-grid">
            {resources.map(res => (
              <div key={res.title} className="bd-resource-card">
                <div className="bd-resource-thumb" />
                <div className="bd-resource-info">
                  <h3>{res.title}</h3>
                  <p>{res.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bd-resources-cta">
            <a className="bd-btn-outline">View All Resources</a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bd-section bd-contact">
        <div className="bd-container">
          <div className="bd-contact-split">
            <div className="bd-contact-info">
              <h2>Talk with a Backd Specialist</h2>
              <p>Reach out and we'll be in touch within 24 hours or less.</p>
            </div>
            <div className="bd-contact-form">
              <div className="bd-form-row">
                <input type="text" placeholder="Full Name" className="bd-input" />
                <input type="tel" placeholder="Phone number" className="bd-input" />
              </div>
              <div className="bd-form-row">
                <input type="text" placeholder="Business Name" className="bd-input" />
                <input type="email" placeholder="Business Email" className="bd-input" />
              </div>
              <div className="bd-form-row">
                <input type="text" placeholder="Website (optional)" className="bd-input" />
                <select className="bd-input">
                  <option value="">Average Monthly Revenue</option>
                  <option>Under $50K</option>
                  <option>$50K - $100K</option>
                  <option>$100K - $250K</option>
                  <option>$250K - $500K</option>
                  <option>$500K+</option>
                </select>
              </div>
              <button className="bd-btn-primary bd-btn-lg bd-btn-full">Inquire Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bd-footer">
        <div className="bd-container">
          <div className="bd-footer-top">
            <div className="bd-footer-brand">
              <img src="/logos/backd.png" alt="Backd" className="bd-footer-logo" />
              <div className="bd-footer-address">
                <MapPin size={14} />
                <div>
                  <p>Backd HQ</p>
                  <p>1949 S I-35 Frontage Rd</p>
                  <p>Austin, Texas 78741, USA</p>
                </div>
              </div>
            </div>
            <div className="bd-footer-links">
              <div>
                <h4>Business Loans</h4>
                <a>Business Term Loan</a>
                <a>Business Line of Credit</a>
              </div>
              <div>
                <h4>B2B Payments</h4>
                <a>B2B Merchants</a>
                <a>B2B Buyers</a>
                <a>Partner</a>
              </div>
              <div>
                <h4>Company</h4>
                <a>About</a>
                <a>Resources</a>
                <a>Technology</a>
                <a>Contact</a>
              </div>
            </div>
          </div>
          <div className="bd-footer-bottom">
            <div className="bd-footer-legal">
              <span>&copy; 2026 Austin Business Finance, LLC d/b/a Backd</span>
              <div className="bd-footer-legal-links">
                <a>Terms of Use</a>
                <a>Privacy Policy</a>
              </div>
            </div>
            <span className="bd-powered">AI Support powered by <strong>HiverAI</strong></span>
          </div>
          <div className="bd-footer-disclaimers">
            <p><sup>1</sup> A business installment loan is originated by FinWise Bank, a Utah-chartered bank, Member FDIC and serviced by Backd.</p>
            <p><sup>2</sup> Decisions and funding may take additional time and not be same-day. Additional information may be required.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AgentBackd
