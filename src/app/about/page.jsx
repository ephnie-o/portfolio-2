import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import myBeautifulSelf from '@/images/photos/image-4.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target='_blank' rel='noopener noreferrer'
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I&apos;m Stephanie, a software programmer in Ghana where design works.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={myBeautifulSelf}
              alt="Image of myself"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Stephanie Odoom, a software programmer in Ghana where design works.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am a dedicated professional, seamlessly merging my passions for pharmaceuticals, fitness, and front-end web development. My diverse background in these fields provides me with a unique perspective and a broad skill set that can cater to a variety of needs.
            </p>
            <h4 className='font-bold text-xl'>Education</h4>
            <ul className='list-disc list-inside'>
              <li>Bachelor's Degree in Pharmacy</li>
              <li>Meta Front-End Developer Certification</li>
            </ul>
            <h4 className='font-bold text-xl'>Skills</h4>
            <ul className='list-disc list-inside'>
              <li>Experienced in React.js for building reusable UI components and managing state in web applications.</li>
              <li>Skilled in Next.js for dynamic web apps with server-side rendering.</li>
              <li>Proficient in Tailwind CSS for efficient and responsive styling.</li>
              <li>Experienced in Vue.js for interactive and scalable web apps.</li>
              <li>Proficient in Nuxt.js for server-side rendered and static websites.</li>
              <li>Expertise in CSS3 for modern styling and animations.</li>
              <li>Well-versed in HTML5 for structured and accessible web content.</li>
              <li>Proficiency in JavaScript, utilizing it to enhance web application functionality and create interactive user experiences.</li>
              <li>Strong management skills, including project management, team coordination, and effective communication to drive successful project outcomes.</li>
              <li>Comprehensive knowledge in pharmaceuticals.</li>
              <li>Fitness enthusiast with extensive understanding of workout regimens and nutrition.</li>
            </ul>
            <h4 className='font-bold text-xl'>Work Experience</h4>
            <ul>
              <li><b>Assistant Managing Pharmacist at Stereda Pharmacy:</b> I led comprehensive technology-driven initiatives, optimizing operations, ensuring compliance, and fostering collaborative healthcare efforts. This included spearheading the development and implementation of a tailored ERP system, overseeing its conception, development, and front-end interface design to enhance efficiency and user experience.</li>
              <br />
              <li><b>Front-End Developer:</b> I have worked on multiple website development projects using ReactJS, NextJS, VueJs, NuxtJs with React Bootstrap, Tailwind CSS and CSS3, creating responsive and user-friendly interfaces.</li>
              <br />
              <li><b>UI/UX Designer:</b> Designing and prototyping websites with Figma, creating user-centered interfaces and responsive designs that align with the latest trends and industry standards. My work includes crafting intuitive navigation, visually appealing layouts, and cohesive branding elements, ensuring an optimal user experience across different devices and platforms.</li>
            </ul>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/_ephnie_" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/_ephnie_/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/ephnie-o/" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/stephanie-odoom-ab5761125/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href='mailto:stephanieodoom25@gmail.com?subject=Subject%20Here&body=Message%20Here'
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              stephanieodoom25@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
