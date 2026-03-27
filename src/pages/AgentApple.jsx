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
    { role: 'user', text: 'My AirPods Pro keep disconnecting from my Mac' },
    { role: 'agent', text: "I understand how disruptive that can be. While the knowledge base does not list detailed step-by-step troubleshooting for AirPods Pro disconnecting from a Mac, here are the supported recovery actions referenced in Apple Support:\n\n• Reconnect or pair again: Use the pairing steps to reconnect your AirPods to your Mac.\n• If they won't stay connected, restart or reset your AirPods, then pair them again.\n• Ensure your AirPods are adequately charged, as low battery can affect connectivity.\n• If the issue persists, you can start a repair request at getsupport.apple.com or use the Apple Support app for guided help.\n\nIf you'd like, I can guide you through the reset and re-pairing process." },
  ],
}

function AgentApple() {
  useChatWidget('ZDkwj418rQ2w1mjJRdgEdnh3')
  return <AgentPage agent={agent} />
}

export default AgentApple
