import { MessageSquare, Zap, ArrowRightLeft, BarChart3, Clock, Layers } from 'lucide-react'
import AgentPage from './AgentPage'
import useChatWidget from '../hooks/useChatWidget'

const agent = {
  id: 'intercom',
  name: 'HiverAI vs Fin',
  color: '#6834F0',
  logo: '/logos/intercom.jpeg',
  bg: '#FAF9F6',
  badge: 'HiverAI Wins',
  headline: <>Why HiverAI Beats<br />Intercom Fin</>,
  description: 'Intercom Fin is considered the industry leader. We built HiverAI to go further — deeper knowledge retrieval, smarter reasoning, and resolution rates that leave Fin behind. Here\'s why teams are switching.',
  capabilitiesSubtitle: 'Where HiverAI outperforms Intercom Fin',
  features: [
    'Higher Resolution Rate',
    'Deeper Reasoning',
    'Faster Setup',
    'Lower Cost',
    'Better Handoffs',
  ],
  capabilities: [
    {
      icon: <Zap size={22} />,
      title: 'Higher Resolution Rate',
      desc: 'Fin claims 50% auto-resolution. HiverAI consistently hits 70%+ by reasoning through complex queries instead of pattern-matching.',
    },
    {
      icon: <MessageSquare size={22} />,
      title: 'True Reasoning, Not Templates',
      desc: 'Fin relies heavily on pre-written answers. HiverAI thinks through problems, asks clarifying questions, and builds answers from your knowledge base in real time.',
    },
    {
      icon: <ArrowRightLeft size={22} />,
      title: 'Smarter Escalation',
      desc: 'Fin hands off conversations — HiverAI hands off with a diagnosis. Human agents get a summary, root cause analysis, and suggested next steps.',
    },
    {
      icon: <BarChart3 size={22} />,
      title: 'Transparent Pricing',
      desc: 'Fin charges $0.99 per resolution with costs that add up fast. HiverAI offers predictable flat-rate pricing — no surprises as you scale.',
    },
    {
      icon: <Clock size={22} />,
      title: 'Minutes to Deploy',
      desc: 'Fin requires complex setup and content structuring. HiverAI ingests your existing docs and goes live in minutes — not weeks.',
    },
    {
      icon: <Layers size={22} />,
      title: 'Multi-Source Intelligence',
      desc: 'Fin pulls from your help center. HiverAI pulls from help centers, past tickets, internal docs, product data, and learns from every conversation.',
    },
  ],
  demoMessages: [
    { role: 'user', text: 'How do I upgrade my plan?' },
    { role: 'agent', text: "You can upgrade your plan right from your workspace.\n\nTo change your plan:\n1. Go to Billing → Subscriptions in your Intercom workspace.\n2. Choose the plan you want: Essential, Advanced, or Expert.\n3. You can also add or remove add-ons like Proactive Support Plus at any time.\n\nIf you're on an annual plan, you can upgrade anytime. Downgrades take effect at renewal.\n\nTo add more seats:\n1. Go to Settings → Teammates.\n2. Add or remove teammates to adjust your seat count.\n\nEverything updates through your billing settings." },
    { role: 'user', text: 'Will I lose any data if I switch plans?' },
    { role: 'agent', text: "No, you won't lose any data just by switching plans.\n\nUpgrading or downgrading between Essential, Advanced, or Expert keeps your workspace and data intact. Your conversations, users, and settings stay in place.\n\nYou only risk losing access to data if you cancel your subscription entirely. After your renewal date:\n\n• Your data is not deleted.\n• But it becomes unavailable until you start a new subscription.\n• If your workspace stays inactive without a subscription for 180 days, it will be permanently deleted.\n\nSo as long as you're just changing plans and staying subscribed, your data is safe." },
  ],
}

function AgentIntercom() {
  useChatWidget('Lu5pBTYLvn94VEr3tvCa9Us7')
  return <AgentPage agent={agent} />
}

export default AgentIntercom
