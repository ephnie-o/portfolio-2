import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for subscribing."
      intro="I’ll send you an email any time I release a new project or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
    />
  )
}
