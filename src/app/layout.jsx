import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import Head from 'next/head'

export const metadata = {
  title: {
    template: 'Stephanie\'s Advanced Portfolio',
    default:
      'Stephanie Odoom - Software Programmer',
  },
  description:
    'I&apos;m Stephanie, a software programmer and pharmacist based in Ghana. I&apos;m the lead front end developer and assistant managing pharmacist at Stereda pharmaceuticals limited.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <Head>
        <meta property='og:title' content="Stephanie&apos;s Advanced Portolio" />
        <meta property='og:description' content="An improved portfolio as my skills expand." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stephanieodoom2.com" />
        <meta property="og:image" content="/Me.jpeg" />
      </Head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
