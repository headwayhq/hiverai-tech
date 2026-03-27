import { MessageSquare, Search, Brain, Zap, Clock, Users } from 'lucide-react'
import AgentPage from './AgentPage'
import useChatWidget from '../hooks/useChatWidget'

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
    { role: 'user', text: 'How to add new users on Hiver?' },
    { role: 'agent', text: "To add a new user to your Hiver account and a shared inbox, please follow these steps:\n\n1. Go to the Hiver Admin Panel.\n2. Select Users and Roles.\n3. Click Add User.\n4. Enter the user's email address.\n5. Assign a role — Admin or Member.\n6. Add the user to the required shared inbox.\n7. Click Save.\n\nThe user will receive:\n• One email inviting them to join Hiver\n• One email confirming their addition to the shared inbox\n\nIf you need help with role selection or permissions, I can guide you further." },
    { role: 'user', text: 'What permissions do Members have?' },
    { role: 'agent', text: "In Hiver, a Member has access to work on conversations within the shared inboxes they are added to, but they do not have administrative privileges.\n\nSpecifically:\n\n• No SLA access by default — Members cannot create, edit, prioritize, disable, or manually remove SLA policies.\n• Only Admins and Shared Inbox Admins have SLA permissions by default.\n• If needed, SLA-related permissions can be granted to a Member using a custom role from the Admin Panel.\n\nMembers focus on handling emails, while configuration and policy controls remain with Admin-level roles." },
  ],
}

function AgentHiver() {
  useChatWidget('uhGAQavENu1A5zNGpbQ7DymM')
  return <AgentPage agent={agent} />
}

export default AgentHiver
