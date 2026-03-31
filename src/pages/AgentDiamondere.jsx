import { Search, User, ShoppingBag, Phone, MapPin, ChevronRight, Star, Shield, Truck, RotateCcw } from 'lucide-react'
import useChatWidget from '../hooks/useChatWidget'
import './AgentDiamondere.css'

const categories = [
  { name: 'RINGS', emoji: '💍' },
  { name: 'NECKLACES', emoji: '📿' },
  { name: 'EARRINGS', emoji: '✨' },
  { name: 'BRACELETS', emoji: '⌚' },
]

const navLinks = ['RINGS', 'NECKLACES', 'EARRINGS', 'ENGAGEMENT RINGS', 'WEDDING RINGS', 'BRACELETS', "MEN'S"]

const collections = [
  { name: 'Solitaire Rings', price: 'From $890', tag: 'Best Seller' },
  { name: 'Halo Engagement', price: 'From $1,240', tag: 'Popular' },
  { name: 'Three Stone Rings', price: 'From $1,450', tag: 'Classic' },
  { name: 'Vintage Collection', price: 'From $980', tag: 'New' },
]

const gemstones = [
  { name: 'Diamond', color: '#f0f0f0', border: '#ccc' },
  { name: 'Ruby', color: '#dc143c', border: '#b01030' },
  { name: 'Sapphire', color: '#0f52ba', border: '#0a3d8f' },
  { name: 'Emerald', color: '#50c878', border: '#3da865' },
  { name: 'Amethyst', color: '#9966cc', border: '#7a4fb0' },
  { name: 'Tanzanite', color: '#6a5acd', border: '#5548a0' },
]

const products = [
  { name: 'Round Diamond Solitaire Ring', price: '$1,290', original: '$1,590', rating: 4.9, reviews: 284, metal: '14K White Gold' },
  { name: 'Oval Sapphire Halo Ring', price: '$1,450', original: '$1,780', rating: 4.8, reviews: 156, metal: '18K Rose Gold' },
  { name: 'Emerald Cut Diamond Ring', price: '$2,190', original: '$2,690', rating: 4.9, reviews: 203, metal: 'Platinum' },
  { name: 'Cushion Ruby Three Stone', price: '$1,680', original: '$2,050', rating: 4.7, reviews: 129, metal: '14K Yellow Gold' },
]

function AgentDiamondere() {
  useChatWidget('5RmSpXVDAvsSh1aq8mqjiWN9')

  return (
    <div className="dm-page">
      {/* Top bar */}
      <div className="dm-topbar">
        <div className="dm-topbar-inner">
          <span>Free Shipping on Orders Over $500 | 30-Day Returns | Lifetime Warranty</span>
        </div>
      </div>

      {/* Header */}
      <header className="dm-header">
        <div className="dm-header-inner">
          <div className="dm-header-left">
            <Phone size={14} />
            <span>1.844.400.0065</span>
            <MapPin size={14} />
            <span>USA (USD)</span>
          </div>
          <div className="dm-logo">
            <img src="/logos/diamondere.jpeg" alt="Diamondere" className="dm-logo-img" />
            <div className="dm-logo-text">
              <span className="dm-logo-name">DIAMONDERE</span>
              <span className="dm-logo-since">Since 1890</span>
            </div>
          </div>
          <div className="dm-header-right">
            <div className="dm-search-box">
              <input type="text" placeholder="Search" />
              <Search size={14} />
            </div>
            <User size={18} />
            <ShoppingBag size={18} />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="dm-nav">
        <div className="dm-nav-inner">
          {navLinks.map(link => (
            <a key={link} className="dm-nav-link">{link}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="dm-hero">
        <div className="dm-hero-split">
          <div className="dm-hero-left">
            <div className="dm-hero-diamond">
              <div className="dm-diamond-glow" />
              <span className="dm-diamond-icon">💎</span>
            </div>
            <h1>Handcrafted Luxury</h1>
            <p>Custom jewelry from a 7th-generation family jeweler.</p>
            <button className="dm-btn-primary">SHOP RINGS</button>
          </div>
          <div className="dm-hero-right">
            <div className="dm-hero-tagline">
              <span>Timeless Elegance</span>
              <span className="dm-hero-sub">Curated collections for life's precious moments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="dm-categories">
        <div className="dm-container">
          <h2 className="dm-section-title">Featured Categories</h2>
          <div className="dm-divider" />
          <div className="dm-cat-grid">
            {categories.map(cat => (
              <a key={cat.name} className="dm-cat-card">
                <div className="dm-cat-img">
                  <span className="dm-cat-emoji">{cat.emoji}</span>
                </div>
                <span className="dm-cat-name">{cat.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="dm-collections">
        <div className="dm-container">
          <h2 className="dm-section-title">Shop Our Collections</h2>
          <div className="dm-divider" />
          <p className="dm-section-sub">Discover our curated selection of handcrafted, conflict-free jewelry.</p>
          <div className="dm-coll-grid">
            {collections.map(coll => (
              <div key={coll.name} className="dm-coll-card">
                <div className="dm-coll-img">
                  <span className="dm-coll-tag">{coll.tag}</span>
                </div>
                <div className="dm-coll-info">
                  <h3>{coll.name}</h3>
                  <span className="dm-coll-price">{coll.price}</span>
                  <a className="dm-shop-link">Shop Now <ChevronRight size={14} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gemstones */}
      <section className="dm-gemstones">
        <div className="dm-container">
          <h2 className="dm-section-title">SHOP BY NATURAL GEMSTONE</h2>
          <div className="dm-divider" />
          <p className="dm-section-sub">Browse our collection of unique, conflict-free gemstone rings.</p>
          <div className="dm-gem-grid">
            {gemstones.map(gem => (
              <a key={gem.name} className="dm-gem-card">
                <div className="dm-gem-circle" style={{ background: gem.color, borderColor: gem.border }}>
                  {gem.name === 'Diamond' && <span className="dm-gem-sparkle">✦</span>}
                </div>
                <span className="dm-gem-name">{gem.name}</span>
                <span className="dm-gem-shop">Shop Now</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="dm-products">
        <div className="dm-container">
          <h2 className="dm-section-title">Bestselling Rings</h2>
          <div className="dm-divider" />
          <div className="dm-prod-grid">
            {products.map(prod => (
              <div key={prod.name} className="dm-prod-card">
                <div className="dm-prod-img">
                  <span className="dm-prod-emoji">💍</span>
                </div>
                <div className="dm-prod-info">
                  <span className="dm-prod-metal">{prod.metal}</span>
                  <h3>{prod.name}</h3>
                  <div className="dm-prod-rating">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#d4a853" stroke="#d4a853" />)}
                    <span>{prod.rating} ({prod.reviews})</span>
                  </div>
                  <div className="dm-prod-prices">
                    <span className="dm-prod-price">{prod.price}</span>
                    <span className="dm-prod-original">{prod.original}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="dm-trust">
        <div className="dm-container">
          <div className="dm-trust-grid">
            <div className="dm-trust-item">
              <Truck size={28} />
              <h4>Free Shipping</h4>
              <p>On orders over $500</p>
            </div>
            <div className="dm-trust-item">
              <RotateCcw size={28} />
              <h4>30-Day Returns</h4>
              <p>Hassle-free return policy</p>
            </div>
            <div className="dm-trust-item">
              <Shield size={28} />
              <h4>Lifetime Warranty</h4>
              <p>On all jewelry purchases</p>
            </div>
            <div className="dm-trust-item">
              <Star size={28} />
              <h4>GIA Certified</h4>
              <p>Every diamond certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dm-footer">
        <div className="dm-container">
          <div className="dm-footer-grid">
            <div>
              <h4>Shop</h4>
              <a>Engagement Rings</a>
              <a>Wedding Rings</a>
              <a>Necklaces</a>
              <a>Earrings</a>
              <a>Bracelets</a>
            </div>
            <div>
              <h4>About</h4>
              <a>Our Story</a>
              <a>Craftsmanship</a>
              <a>Certifications</a>
              <a>Reviews</a>
            </div>
            <div>
              <h4>Support</h4>
              <a>Contact Us</a>
              <a>Ring Sizing Guide</a>
              <a>Shipping & Returns</a>
              <a>FAQ</a>
            </div>
            <div>
              <h4>Contact</h4>
              <a>1.844.400.0065</a>
              <a>support@diamondere.com</a>
              <a>Mon-Fri 9am-6pm EST</a>
            </div>
          </div>
          <div className="dm-footer-bottom">
            <span>&copy; 2026 Diamondere. All rights reserved.</span>
            <span className="dm-powered">AI Support powered by <strong>HiverAI</strong></span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AgentDiamondere
