import { MessageSquare, Search, Brain, Zap, Clock, Users } from 'lucide-react'
import AgentPage from './AgentPage'

const agent = {
  id: 'hiver',
  name: 'Hiver Support',
  color: '#ff6b2b',
  badge: 'Primary Agent',
  headline: <>Meet Your Smartest<br />Support Agent</>,
  description: 'The flagship HiverAI agent — trained on your entire knowledge base, past tickets, and product documentation. It thinks through problems, asks clarifying questions, and resolves issues autonomously.',
  capabilitiesSubtitle: 'Built to handle real support conversations end-to-end',
  features: [
    'Knowledge Base Retrieval',
    'Multi-turn Conversations',
    'Ticket Resolution',
    'Smart Escalation',
    'Context Awareness',
  ],
  capabilities: [
    {
      icon: <Search size={22} />,
      title: 'Deep Knowledge Search',
      desc: 'Searches across your entire knowledge base, past tickets, and documentation to find the most relevant answers.',
    },
    {
      icon: <Brain size={22} />,
      title: 'Reasoning Engine',
      desc: 'Doesn\'t just match keywords — it understands the problem, considers multiple solutions, and picks the best one.',
    },
    {
      icon: <MessageSquare size={22} />,
      title: 'Natural Dialogue',
      desc: 'Engages in human-like conversation, asking clarifying questions when needed before providing a solution.',
    },
    {
      icon: <Zap size={22} />,
      title: 'Autonomous Resolution',
      desc: 'Resolves L1 and L2 queries autonomously, freeing your human agents for complex, high-touch cases.',
    },
    {
      icon: <Clock size={22} />,
      title: '24/7 Availability',
      desc: 'Never sleeps, never takes breaks. Consistent quality support across every timezone, every hour.',
    },
    {
      icon: <Users size={22} />,
      title: 'Smart Handoff',
      desc: 'When a case needs a human, it hands off with full context — no customer has to repeat themselves.',
    },
  ],
  demoMessages: [
    { role: 'user', text: "I can't find where to set up email delegation in Hiver" },
    { role: 'agent', text: "I can help with that! Email delegation in Hiver is set up through the Shared Mailbox settings. Go to Hiver Admin Panel → Shared Mailboxes → Select your mailbox → Delegation Rules. Would you like me to walk you through creating your first delegation rule?" },
    { role: 'user', text: 'Yes please!' },
    { role: 'agent', text: 'Great! In the Delegation Rules section, click "+ New Rule". You can set conditions like subject keywords, sender domain, or labels — and assign them to specific team members automatically. This ensures every email reaches the right person without manual sorting.' },
  ],
}

function AgentHiver() {
  return <AgentPage agent={agent} />
}

export default AgentHiver
