import { Ticket, Search, Clock, TrendingDown, FileText, ArrowRightLeft } from 'lucide-react'
import AgentPage from './AgentPage'

const agent = {
  id: 'zendesk',
  name: 'Zendesk Agent',
  color: '#17494D',
  bg: '#03363D',
  badge: 'Zendesk Integration',
  headline: <>Smarter Tickets,<br />Faster Resolutions</>,
  description: 'Integrates directly with Zendesk — reads ticket history, understands context from past interactions, and resolves common patterns automatically.',
  capabilitiesSubtitle: 'Turns your Zendesk into an intelligent resolution engine',
  features: [
    'Ticket Auto-Response',
    'History Analysis',
    'Pattern Detection',
    'SLA Compliance',
    'Contextual Replies',
  ],
  capabilities: [
    {
      icon: <Ticket size={22} />,
      title: 'Ticket Intelligence',
      desc: 'Reads and understands ticket content, tags, priority, and history to craft the most relevant response.',
    },
    {
      icon: <Search size={22} />,
      title: 'History Deep Dive',
      desc: 'Looks at the customer\'s past tickets and interactions to personalize responses and avoid repetition.',
    },
    {
      icon: <TrendingDown size={22} />,
      title: 'Pattern Recognition',
      desc: 'Identifies common ticket patterns and auto-resolves them, keeping your SLAs intact even during peak volume.',
    },
    {
      icon: <FileText size={22} />,
      title: 'Knowledge Synthesis',
      desc: 'Pulls from your Zendesk knowledge base, macros, and internal docs to build accurate responses.',
    },
    {
      icon: <Clock size={22} />,
      title: 'SLA Guardian',
      desc: 'Monitors ticket age and priority to ensure no ticket breaches SLA — escalates proactively when needed.',
    },
    {
      icon: <ArrowRightLeft size={22} />,
      title: 'Agent Assist',
      desc: 'Suggests responses to human agents for complex cases, speeding up resolution without full automation.',
    },
  ],
  demoMessages: [
    { role: 'user', text: 'I was charged twice for my subscription this month' },
    { role: 'agent', text: "I'm sorry about that — let me look into this right away. I can see your account shows two charges on March 15 and March 18. The March 18 charge appears to be a duplicate." },
    { role: 'user', text: 'Can I get a refund?' },
    { role: 'agent', text: "Absolutely. I've flagged the duplicate charge for an immediate refund. It should appear in your account within 3-5 business days. I'll also send you a confirmation email with the refund details. Is there anything else I can help with?" },
  ],
}

function AgentZendesk() {
  return <AgentPage agent={agent} />
}

export default AgentZendesk
