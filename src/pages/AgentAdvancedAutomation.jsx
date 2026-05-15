import { ChevronRight, Phone, Mail, MapPin, Menu, Search, ShoppingCart, User, Truck, Package, Wrench, Headphones, Award, Clock } from 'lucide-react'
import useChatWidget from '../hooks/useChatWidget'
import './AgentAdvancedAutomation.css'

const navLinks = [
  'Barcode Printers',
  'Printing Supplies',
  'Mobile Computing',
  'Barcode Scanners',
  'Printheads & Parts',
  'Barcode Software',
  'RFID Solutions',
  'ID Card Printing',
  'Learning Center',
]

const categories = [
  { title: 'Barcode Printers', img: '/images/aa-printers.svg', desc: 'Industrial, desktop & mobile' },
  { title: 'Barcode Scanners', img: '/images/aa-scanners.svg', desc: 'Corded, cordless, long range' },
  { title: 'Mobile Computers', img: '/images/aa-mobile.svg', desc: 'Rugged handhelds & tablets' },
  { title: 'Labels & Ribbons', img: '/images/aa-supplies.svg', desc: 'Custom & stock supplies' },
  { title: 'RFID Solutions', img: '/images/aa-rfid.svg', desc: 'Tags, readers & printers' },
  { title: 'Repair Services', img: '/images/aa-repair.svg', desc: 'Certified device repair' },
]

const valueProps = [
  { icon: Headphones, title: 'Responsive Expert Staff', desc: 'Our barcode specialists are ready to help you find the right solution for your operation.' },
  { icon: Package, title: '100,000+ Products In-Stock', desc: 'Massive inventory of barcoding hardware, supplies and accessories ready to ship.' },
  { icon: Award, title: '5-Star Certified Reviews', desc: 'Thousands of satisfied customers across logistics, manufacturing and healthcare.' },
  { icon: Truck, title: 'Same-Day Shipping', desc: 'Orders placed before 3pm CST ship the same business day to keep you running.' },
]

const brands = [
  'Zebra', 'Honeywell', 'Brady', 'Datalogic', 'SATO', 'Epson', 'Citizen', 'Star Micronics', 'TSC', 'Janam', 'Unitech', 'DNP'
]

const stats = [
  { value: '30+', label: 'Years of service to the barcoding industry' },
  { value: '100K+', label: 'Products in stock and ready to ship' },
  { value: '12+', label: 'Premier manufacturer partnerships' },
]

const tools = [
  { icon: Wrench, title: 'Equipment Repair', desc: 'Manufacturer-certified repair services for printers, scanners and mobile computers.' },
  { icon: Package, title: 'Custom Label Solutions', desc: 'Custom-sized labels, ribbons and tags spec\'d to your application.' },
  { icon: Clock, title: 'Demo Equipment', desc: 'Try before you buy — request demo units of leading barcode hardware.' },
  { icon: User, title: 'Corporate Accounts', desc: 'Dedicated account managers, net terms and volume pricing for enterprises.' },
]

function AgentAdvancedAutomation() {
  useChatWidget('TLcwLFNTexGC5Zavi3Qheo6D')

  return (
    <div className="aa-page">
      {/* Top utility bar */}
      <div className="aa-utility">
        <div className="aa-container aa-utility-inner">
          <span className="aa-utility-text">30 Years of Service · Same-Day Shipping on Orders Before 3pm CST</span>
          <div className="aa-utility-links">
            <a href="tel:18007288889"><Phone size={12} /> 1-800-728-8889</a>
            <a href="mailto:sales@advanced-automationinc.com"><Mail size={12} /> sales@advanced-automationinc.com</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="aa-header">
        <div className="aa-container aa-header-inner">
          <div className="aa-logo">
            <img src="/logos/advanced-automation.png" alt="Advanced Automation — Barcoding Simplified" className="aa-logo-img" />
          </div>
          <div className="aa-search">
            <Search size={18} className="aa-search-icon" />
            <input type="text" placeholder="Search 100,000+ barcoding products..." className="aa-search-input" />
            <button className="aa-search-btn">Search</button>
          </div>
          <div className="aa-header-actions">
            <a className="aa-icon-link"><User size={20} /><span>Account</span></a>
            <a className="aa-icon-link"><ShoppingCart size={20} /><span>Cart</span></a>
          </div>
          <button className="aa-mobile-menu" aria-label="Menu"><Menu size={24} /></button>
        </div>
        <nav className="aa-nav">
          <div className="aa-container aa-nav-inner">
            {navLinks.map(link => (
              <a key={link} className="aa-nav-link">{link}</a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="aa-hero">
        <div className="aa-container aa-hero-inner">
          <div className="aa-hero-content">
            <span className="aa-hero-eyebrow">NEW · ULTRA-RUGGED COMPUTING</span>
            <h1>The Next Big Thing in <span className="aa-accent">Rugged Mobile Computing</span></h1>
            <p>Discover the Zebra MC9400 — the latest in our ever-growing line of mission-critical mobile computers built for warehousing, logistics and manufacturing.</p>
            <div className="aa-hero-actions">
              <a className="aa-btn-primary aa-btn-lg">Shop the MC9400</a>
              <a className="aa-btn-outline aa-btn-lg">Learn More</a>
            </div>
            <div className="aa-hero-trust">
              <span><Award size={14} /> 30 Years of Service</span>
              <span><Truck size={14} /> Same-Day Shipping</span>
              <span><Headphones size={14} /> US-Based Support</span>
            </div>
          </div>
          <div className="aa-hero-visual">
            <div className="aa-hero-card">
              <div className="aa-hero-card-badge">FEATURED</div>
              <div className="aa-hero-device" />
              <h3>Zebra MC9400</h3>
              <p>Ultra-rugged mobile computer engineered for the most demanding scan-intensive environments.</p>
              <ul className="aa-hero-card-specs">
                <li>Industry-leading scan range up to 70 ft</li>
                <li>Hot-swappable battery for 24/7 operation</li>
                <li>Android 13 with 5-year OS support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="aa-section aa-categories">
        <div className="aa-container">
          <div className="aa-section-head">
            <h2>Shop by Category</h2>
            <p>Everything you need to capture, track and label — sourced from the industry's top manufacturers.</p>
          </div>
          <div className="aa-category-grid">
            {categories.map(cat => (
              <a key={cat.title} className="aa-category-card">
                <div className="aa-category-image">
                  <Package size={48} strokeWidth={1.25} />
                </div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <span className="aa-category-cta">Shop Now <ChevronRight size={14} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="aa-section aa-values">
        <div className="aa-container">
          <div className="aa-values-grid">
            {valueProps.map(vp => (
              <div key={vp.title} className="aa-value-card">
                <div className="aa-value-icon">
                  <vp.icon size={28} />
                </div>
                <h3>{vp.title}</h3>
                <p>{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / track record */}
      <section className="aa-section aa-stats">
        <div className="aa-container">
          <div className="aa-stats-head">
            <span className="aa-stats-label">OUR TRACK RECORD</span>
            <h2>Trusted by Operations Teams Since 1995</h2>
          </div>
          <div className="aa-stats-grid">
            {stats.map(stat => (
              <div key={stat.value} className="aa-stat-card">
                <span className="aa-stat-value">{stat.value}</span>
                <p className="aa-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand showcase */}
      <section className="aa-section aa-brands">
        <div className="aa-container">
          <div className="aa-section-head">
            <h2>Premier Manufacturer Partnerships</h2>
            <p>Authorized reseller for the brands that power the barcoding industry.</p>
          </div>
          <div className="aa-brand-grid">
            {brands.map(brand => (
              <div key={brand} className="aa-brand-chip">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools section */}
      <section className="aa-section aa-tools">
        <div className="aa-container">
          <div className="aa-section-head">
            <h2>More Than a Reseller</h2>
            <p>Services and tools that go beyond the box — engineered to keep your operation running.</p>
          </div>
          <div className="aa-tools-grid">
            {tools.map(tool => (
              <div key={tool.title} className="aa-tool-card">
                <div className="aa-tool-icon">
                  <tool.icon size={24} />
                </div>
                <div>
                  <h3>{tool.title}</h3>
                  <p>{tool.desc}</p>
                  <a className="aa-tool-link">Learn More <ChevronRight size={14} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="aa-section aa-cta">
        <div className="aa-container">
          <div className="aa-cta-card">
            <div className="aa-cta-content">
              <h2>Need help spec'ing your next deployment?</h2>
              <p>Talk to a barcoding specialist. We'll help you choose the right hardware, supplies and software for your application — and back it with 30 years of operational experience.</p>
            </div>
            <div className="aa-cta-actions">
              <a className="aa-btn-primary aa-btn-lg" href="tel:18007288889">Call 1-800-728-8889</a>
              <a className="aa-btn-outline aa-btn-lg">Request a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="aa-footer">
        <div className="aa-container">
          <div className="aa-footer-top">
            <div className="aa-footer-brand">
              <img src="/logos/advanced-automation.png" alt="Advanced Automation" className="aa-footer-logo" />
              <p className="aa-footer-tag">Barcoding hardware, supplies and services since 1995.</p>
              <div className="aa-footer-contact">
                <div><MapPin size={14} /> 339 SW 6th Street, Des Moines, Iowa 50309</div>
                <div><Phone size={14} /> 1-800-728-8889</div>
                <div><Mail size={14} /> sales@advanced-automationinc.com</div>
              </div>
            </div>
            <div className="aa-footer-links">
              <div>
                <h4>Hardware</h4>
                <a>Barcode Printers</a>
                <a>Barcode Scanners</a>
                <a>Mobile Computers</a>
                <a>ID Card Printers</a>
              </div>
              <div>
                <h4>Supplies</h4>
                <a>Labels</a>
                <a>Ribbons</a>
                <a>Printheads & Parts</a>
                <a>Accessories</a>
              </div>
              <div>
                <h4>Solutions</h4>
                <a>RFID</a>
                <a>Barcode Software</a>
                <a>Custom Labels</a>
                <a>Equipment Repair</a>
              </div>
              <div>
                <h4>Company</h4>
                <a>About</a>
                <a>Learning Center</a>
                <a>Corporate Accounts</a>
                <a>Contact</a>
              </div>
            </div>
          </div>
          <div className="aa-footer-bottom">
            <span>&copy; 2026 Advanced Automation, Inc. All rights reserved.</span>
            <div className="aa-footer-legal">
              <a>Terms of Use</a>
              <a>Privacy Policy</a>
              <a>Return Policy</a>
            </div>
            <span className="aa-powered">AI Support powered by <strong>HiverAI</strong></span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AgentAdvancedAutomation
