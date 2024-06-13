import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Service',
  description: 'Services I provide as a Software Programmer, Pharmacist and Fitness Enthusiast',
}

export default function Services() {
  return (
    <SimpleLayout
      title="Services I provide as a Software Programmer, Pharmacist and Fitness Enthusiast"
      intro="I am a front-end developer, pharmacist, and fitness enthusiast dedicated to enhancing digital experiences, promoting health, and supporting fitness goals through my diverse expertise."
    >
      <div className="space-y-20">
        <ToolsSection title="Front-end Developing">
          <Tool title="Website Development">
            Leveraging my skills in ReactJS, NextJS and NuxtJS I offer front-end web development services tailored to your needs. Whether you&apos;re a small business owner looking to establish your online presence or an individual seeking to create a personal website, I can assist you in bringing your vision to life.
          </Tool>
          <Tool title="UI/UX Design">
            I specialize in designing intuitive and visually appealing user interfaces, conducting thorough UX research and testing, and creating detailed wireframes, mockups, and prototypes using tools like Figma.
          </Tool>
          <Tool title="E-commerce Development">
            I create and customize online stores and implement payment gateways and shopping cart functionalities to ensure a seamless e-commerce experience.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Fitness">
          <Tool title="Fitness Consultation">
            As a gym enthusiast, I can offer guidance on workout plans, fitness goals, and nutrition to help you lead a healthier lifestyle. Click on the link below to access my workout website.
          </Tool>
          <br />
          <Link className='text-emerald-500 text-sm font-bold hover:text-emerald-950' href='https://actifitness.netlify.app/' target='_blank' rel='noopener noreferrer'>www.actifitness.com</Link>
        </ToolsSection>
        <ToolsSection title="Health">
          <Tool title="Pharmaceutical Consultation">
            With my background in pharmacy, I can provide expert advice on medication use, potential drug interactions, and overall pharmaceutical care. Click on the link below to access the pharmacy website.
          </Tool>
          <br />
          <Link className='text-emerald-500 text-sm font-bold hover:text-emerald-950' href='https://steredapharmacy.com/' target='_blank' rel='noopener noreferrer'>www.steredapharmacy.com</Link>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
