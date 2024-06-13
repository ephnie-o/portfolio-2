import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'You&apos;re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for subscribing."
      intro="I&apos;ll send you an email any time I release a new project or have anything interesting to share that I think you&apos;d want to hear about. You can unsubscribe at any time, no hard feelings."
    />
  )
}
