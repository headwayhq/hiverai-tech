import { Car, Battery, MapPin, Wrench, Shield, Zap } from 'lucide-react'
import AgentPage from './AgentPage'
import useChatWidget from '../hooks/useChatWidget'

const agent = {
  id: 'tesla',
  name: 'Tesla Agent',
  color: '#e82127',
  logo: '/logos/tesla.jpg',
  badge: 'Tesla Support',
  headline: <>Intelligent Support<br />for Every Drive</>,
  description: 'AI-powered support for Tesla owners — handles vehicle troubleshooting, charging queries, service scheduling, and account management with instant, accurate answers.',
  capabilitiesSubtitle: 'Built to support Tesla owners end-to-end',
  features: [
    'Vehicle Troubleshooting',
    'Charging & Range',
    'Service Scheduling',
    'Software Updates',
    'Account & Billing',
  ],
  capabilities: [
    {
      icon: <Car size={22} />,
      title: 'Vehicle Diagnostics',
      desc: 'Understands common vehicle issues across Model S, 3, X, Y, and Cybertruck — guides owners through troubleshooting steps instantly.',
    },
    {
      icon: <Battery size={22} />,
      title: 'Charging & Range',
      desc: 'Answers questions about charging speeds, range optimization, Supercharger locations, and home charging setup.',
    },
    {
      icon: <Wrench size={22} />,
      title: 'Service Scheduling',
      desc: 'Helps owners book service appointments, check warranty coverage, and understand repair timelines.',
    },
    {
      icon: <Zap size={22} />,
      title: 'Software Updates',
      desc: 'Explains new features in OTA updates, troubleshoots update issues, and guides through settings changes.',
    },
    {
      icon: <MapPin size={22} />,
      title: 'Navigation & Autopilot',
      desc: 'Assists with navigation setup, Autopilot features, and FSD questions — helping owners get the most from their Tesla.',
    },
    {
      icon: <Shield size={22} />,
      title: 'Warranty & Coverage',
      desc: 'Clarifies warranty terms, extended service agreements, and what\'s covered — so owners always know where they stand.',
    },
  ],
  demoMessages: [
    { role: 'user', text: 'My Model 3 is showing a tire pressure warning but all tires look fine' },
    { role: 'agent', text: "I know that warning can be confusing — especially if the tires look fine.\n\nIf you're seeing \"Air pressure below recommendation\", it does not mean you have a flat. It means one or more tires is at least 20% below the recommended cold tire pressure.\n\nHere's what to check:\n\n• Tires lose about 1 PSI for every 6°C drop in temperature.\n• Check pressure when tires are cold (parked 3+ hours).\n• Inflate to the recommended cold pressure on the driver's door pillar label (not the tire sidewall).\n\nAfter inflating:\n• The alert may stay on briefly.\n• You may need to drive over 15 mph (25 km/h) for at least 10 minutes for it to clear.\n\nIf the same tire keeps triggering it, you likely have a slow leak — have it inspected or schedule service in the Tesla app." },
    { role: 'user', text: 'The pressures are all at 40 PSI, should I add more air?' },
    { role: 'agent', text: "If all four tires are at 40 PSI, don't automatically add more air.\n\nYou should inflate to the recommended cold tire pressure shown on the Tire Information label on the driver's door pillar — even if it's different from what's printed on the tire itself.\n\nA few important points:\n\n• Check pressure when tires are cold (parked 3+ hours).\n• Tire pressures drop about 1 PSI for every 6°C temperature drop.\n• The warning light does not turn off immediately after adjusting.\n• On vehicles with indirect TPMS, you may need to manually calibrate under Controls → Service → Tire Pressure → Calibrate Tire Pressure, then drive over 15 mph (25 km/h) for at least 20 minutes.\n\nSo the key question is: does your door pillar label say 40 PSI, or higher? Inflate exactly to that number — not above it." },
  ],
}

function AgentTesla() {
  useChatWidget('oG2nXrjK1Rp659R4mgzxwjbK')
  return <AgentPage agent={agent} />
}

export default AgentTesla
