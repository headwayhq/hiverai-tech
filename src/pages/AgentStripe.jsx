import { CreditCard, Search, Shield, TrendingUp, FileText, ArrowRightLeft } from 'lucide-react'
import AgentPage from './AgentPage'
import useChatWidget from '../hooks/useChatWidget'

const agent = {
  id: 'stripe',
  name: 'Stripy',
  color: '#635BFF',
  logo: '/logos/Stripe.png',
  badge: 'Stripe Integration',
  headline: <>Smarter Payments,<br />Happier Customers</>,
  description: 'Integrates directly with Stripe — understands billing history, subscription status, and payment issues to resolve customer queries automatically.',
  capabilitiesSubtitle: 'Turns your Stripe support into an intelligent resolution engine',
  features: [
    'Payouts',
    'Invoice',
    'Refunds',
    'Taxes',
    'Billing',
  ],
  capabilities: [
    {
      icon: <CreditCard size={22} />,
      title: 'Payment Intelligence',
      desc: 'Reads and understands payment history, invoices, and subscription status to craft the most relevant response.',
    },
    {
      icon: <Search size={22} />,
      title: 'Transaction Deep Dive',
      desc: 'Looks at the customer\'s past transactions and billing events to personalize responses and resolve issues fast.',
    },
    {
      icon: <TrendingUp size={22} />,
      title: 'Revenue Recovery',
      desc: 'Identifies failed payments, expired cards, and churn risks — proactively resolving billing issues before they escalate.',
    },
    {
      icon: <FileText size={22} />,
      title: 'Billing Knowledge',
      desc: 'Pulls from your Stripe docs, pricing pages, and internal policies to build accurate billing responses.',
    },
    {
      icon: <Shield size={22} />,
      title: 'Dispute Handler',
      desc: 'Manages chargebacks and disputes by gathering evidence and responding within deadlines — protecting your revenue.',
    },
    {
      icon: <ArrowRightLeft size={22} />,
      title: 'Agent Assist',
      desc: 'Suggests responses to human agents for complex billing cases, speeding up resolution without full automation.',
    },
  ],
  demoMessages: [
    { role: 'user', text: 'How to add a bank account for payouts?' },
    { role: 'agent', text: "To receive payouts, you'll need to link a bank account in your Stripe Dashboard. Here's how:\n\n1. Go to your Dashboard → click the Settings (gear icon) in the top right.\n2. Under Account Settings, click Business → open the Bank accounts and currencies tab.\n3. Under Settlement currencies and bank accounts, choose your payout currency and click Add a bank account.\n4. Verify your credentials (via email or password).\n5. Enter your checking account details (account number, routing number, account holder name must match your bank statement)." },
    { role: 'user', text: 'What if I use multiple currencies?' },
    { role: 'agent', text: "Great question! If you use multiple currencies, here's how payouts work:\n\n• You can have one bank account per currency.\n• If you enable more than one settlement currency, you'll need to add a separate bank account for each one.\n• You must choose a default settlement currency, and you can change it anytime from the Payouts page.\n• The bank account currency must match the payout currency.\n\nTo switch your default currency or bank account:\n1. Make sure the settlement currency is enabled.\n2. Go to Dashboard → Settings → Payouts.\n3. Change your default currency and default bank account there." },
  ],
}

function AgentStripe() {
  useChatWidget('cCuEL5eJwQxCqq12YUr9y6VK')
  return <AgentPage agent={agent} />
}

export default AgentStripe
