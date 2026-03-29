import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Technology from './pages/Technology'
import Agents from './pages/Agents'
import Integrations from './pages/Integrations'
import AgentHiver from './pages/AgentHiver'
import AgentApple from './pages/AgentApple'
import AgentIntercom from './pages/AgentIntercom'
import AgentStripe from './pages/AgentStripe'
import AgentTesla from './pages/AgentTesla'
import Changelog from './pages/Changelog'
import ComingSoon from './pages/ComingSoon'
import GetStarted from './pages/GetStarted'
import ComingSoonBanner from './components/ComingSoonBanner'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/hiver" element={<AgentHiver />} />
        <Route path="/agents/apple" element={<AgentApple />} />
        <Route path="/agents/intercom" element={<AgentIntercom />} />
        <Route path="/agents/stripe" element={<AgentStripe />} />
        <Route path="/agents/tesla" element={<AgentTesla />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
      <ComingSoonBanner />
      <Footer />
    </>
  )
}

export default App
