import { MessageSquare, Zap, ArrowRightLeft, BarChart3, Clock, Layers } from 'lucide-react'
import AgentPage from './AgentPage'
import useChatWidget from '../hooks/useChatWidget'

const agent = {
  id: 'intercom',
  name: 'Intercom Agent',
  color: '#6834F0',
  bg: '#FAF9F6',
  badge: 'Intercom Integration',
  headline: <>AI-First Responder<br />for Intercom</>,
  description: 'Drops into your Intercom widget as an intelligent first responder. Resolves common queries instantly and seamlessly hands off complex cases to human agents with full context.',
  capabilitiesSubtitle: 'Seamless AI layer on top of your Intercom conversations',
  features: [
    'Intercom Widget Ready',
    'Auto-Resolution',
    'Contextual Handoff',
    'Conversation Routing',
    'Response Suggestions',
  ],
  capabilities: [
    {
      icon: <Zap size={22} />,
      title: 'Intelligent First Response',
      desc: 'Engages customers with thoughtful, contextual responses from the very first message.',
    },
    {
      icon: <MessageSquare size={22} />,
      title: 'Conversational AI',
      desc: 'Natural multi-turn dialogue that feels like talking to a knowledgeable support rep, not a bot.',
    },
    {
      icon: <ArrowRightLeft size={22} />,
      title: 'Smart Handoff',
      desc: 'Knows when to escalate — passes the full conversation context to human agents without gaps.',
    },
    {
      icon: <BarChart3 size={22} />,
      title: 'Resolution Analytics',
      desc: 'Tracks which queries are resolved autonomously vs escalated, helping you optimize over time.',
    },
    {
      icon: <Clock size={22} />,
      title: 'Always On',
      desc: 'Covers after-hours, weekends, and peak traffic — no more missed conversations.',
    },
    {
      icon: <Layers size={22} />,
      title: 'Context Stacking',
      desc: 'Pulls in user history, past conversations, and account data to personalize every interaction.',
    },
  ],
  demoMessages: [
    { role: 'user', text: 'How do I upgrade my plan?' },
    { role: 'agent', text: "You can upgrade your plan right from your dashboard! Go to Settings → Billing → Change Plan. You'll see all available plans with pricing. The upgrade takes effect immediately and billing is prorated." },
    { role: 'user', text: 'Will I lose any data if I switch plans?' },
    { role: 'agent', text: "No, switching plans won't affect your data at all. All your conversations, contacts, and settings stay exactly as they are. You'll just unlock the features included in your new plan immediately after upgrading." },
  ],
}

function AgentIntercom() {
  useChatWidget('Lu5pBTYLvn94VEr3tvCa9Us7')
  return <AgentPage agent={agent} />
}

export default AgentIntercom
