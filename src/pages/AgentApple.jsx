import { Smartphone, Wrench, Shield, BookOpen, Cpu, RefreshCw } from 'lucide-react'
import AgentPage from './AgentPage'
import useChatWidget from '../hooks/useChatWidget'

const agent = {
  id: 'apple',
  name: 'Apple Agent',
  color: '#0071E3',
  logo: '/logos/apple.png',
  bg: '#fbfbfd',
  badge: 'Apple Ecosystem',
  headline: <>Your Apple<br />Support Genius</>,
  description: 'Specialized for Apple product support — handles device troubleshooting, warranty queries, software issues, and product guidance with deep Apple ecosystem knowledge.',
  capabilitiesSubtitle: 'Deep expertise across the entire Apple product line',
  features: [
    'Device Troubleshooting',
    'Warranty Queries',
    'Software Guidance',
    'Product Recommendations',
    'Setup Assistance',
  ],
  capabilities: [
    {
      icon: <Smartphone size={22} />,
      title: 'Device Diagnostics',
      desc: 'Walks users through troubleshooting steps for iPhone, iPad, Mac, Apple Watch, and AirPods issues.',
    },
    {
      icon: <Wrench size={22} />,
      title: 'Fix Guidance',
      desc: 'Provides step-by-step repair and reset instructions tailored to the specific device and OS version.',
    },
    {
      icon: <Shield size={22} />,
      title: 'Warranty Support',
      desc: 'Answers warranty and AppleCare questions, helps users understand coverage and repair options.',
    },
    {
      icon: <BookOpen size={22} />,
      title: 'Product Knowledge',
      desc: 'Deep understanding of Apple\'s product line — specs, compatibility, and feature comparisons.',
    },
    {
      icon: <Cpu size={22} />,
      title: 'OS Expertise',
      desc: 'Covers iOS, macOS, watchOS, and tvOS — from settings deep dives to feature walkthroughs.',
    },
    {
      icon: <RefreshCw size={22} />,
      title: 'Setup & Migration',
      desc: 'Helps with device setup, data migration, iCloud configuration, and ecosystem syncing.',
    },
  ],
  demoMessages: [
    { role: 'user', text: 'I have a budget of 2 lac and what are the devices I can purchase for my workspace?' },
    { role: 'agent', text: "With a budget of ₹2,00,000, you have several strong workspace options based on current pricing:\n\n✅ Option 1: MacBook Pro (High Performance)\nMacBook Pro 14\" (M5) — From ₹1,89,900\nUp to 6 months No Cost EMI + up to ₹10,000 instant cashback. Ideal for sustained performance and professional workloads.\n\n✅ Option 2: MacBook Air + Accessories\nMacBook Air (M5) — From ₹1,19,900\nAdd AppleCare+, external storage, or accessories within remaining budget.\n\n✅ Option 3: MacBook Neo (Value-Focused)\nMacBook Neo — From ₹69,900\nAllocate remaining budget toward accessories or additional Apple devices.\n\nIf you share your primary work use, I can narrow this down." },
    { role: 'user', text: 'Compare Air and Neo' },
    { role: 'agent', text: "Here's a spec-based comparison:\n\n💰 Starting Price\n• Neo: ₹69,900 (₹59,900 education)\n• Air (M5): ₹1,19,900\n\n⚡ Chip & Performance\n• Neo: A18 Pro — 6-core CPU, 5-core GPU, 16-core Neural Engine\n• Air: M5 — 10-core CPU, 8/10-core GPU, 16-core Neural Engine\nAir offers significantly higher CPU and GPU core counts.\n\n🔌 Ports & Connectivity\n• Neo: 1× USB 3 (USB-C), 1× USB 2 (USB-C), Wi-Fi 6E\n• Air: 2× Thunderbolt 4, MagSafe 3, Wi-Fi 7, dual display support\n\n⚖️ Weight\n• Neo: 1.23 kg\n\n📌 Summary\nChoose Neo for excellent everyday performance at the most affordable price. Choose Air (M5) for stronger performance, Thunderbolt 4, and dual display support." },
  ],
}

function AgentApple() {
  useChatWidget('ZDkwj418rQ2w1mjJRdgEdnh3')
  return <AgentPage agent={agent} />
}

export default AgentApple
