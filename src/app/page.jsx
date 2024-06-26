import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const project = [
  {
    id: 1,
    date: 'Apr 15, 2024',
    title: 'PORTFOLIO WEBSITE: ',
    description: "I designed and developed a portfolio website using React.js, Bootstrap, and CSS, with the initial design and layout prototyped in Figma. This project allowed me to demonstrate my skills in front-end development, including creating a responsive and visually appealing interface. Leveraging React.js ensured seamless navigation and dynamic content updates, while Bootstrap and CSS were instrumental in achieving a modern and polished design aesthetic. Using Figma for the design phase enabled me to craft intuitive and user-centered layouts, ensuring an optimal user experience across different devices and platforms. The portfolio website serves as a showcase of my work, skills, and experiences in the field of web development.",
    link1: 'https://github.com/ephnie-o/my-portfolio',
    link2: 'https://www.figma.com/design/mFAX3Sh8JX9UOBzEzXoz43/Portfolio-Website?node-id=0-1&t=klc5s35Aoypy5n0F-0',
    link3: 'https://stephanieodoom.com',
  },
  {
    id: 2,
    date: 'Apr 23, 2024',
    title: 'FITNESS WEB APP: ',
    description: "I developed a gym workout web application using React.js, Bootstrap, and CSS. The application, inspired by popular fitness platforms, offers a range of exercise routines tailored for different days and goals. Users can easily navigate through the exercises, track their progress, and customize their workout plans. I designed the website using Figma to create intuitive and user-friendly interfaces, ensuring a seamless user experience. The use of React.js provided a dynamic and responsive user interface, while Bootstrap and CSS were utilized for styling and layout design.",
    link1: 'https://github.com/ephnie-o/acti-fitness',
    link2: 'https://www.figma.com/design/ZcBuNbQCwRQiQO5UExEmNX/Acti-Fitness-Website?t=QDoEvwAB6NHHI8Tw-0',
    link3: 'https://actifitness.netlify.app/',
  },
  {
    id: 3,
    date: 'May 20, 2024',
    title: 'ERP SYSTEM',
    description: 'I am serving as the lead front-end developer for an ERP system designed specifically for my pharmacy, utilizing Next.js and Tailwind CSS. In collaboration with a team of backend developers and another front-end developer, I am spearheading the construction of this system, ensuring seamless integration of front-end functionalities with backend systems to optimize pharmacy operations.',
    link1: 'https://github.com/ephnie-o/erp-system',
    link2: 'n/a',
    link3: 'n/a',
  },
  {
    id: 4,
    date: 'Jun 4, 2024',
    title: 'ERP SYSTEM',
    description: 'I am part of the front-end development team for an ERP system using Nuxt.js. I focus on implementing responsive designs, developing Vue.js components, managing state with Vuex, and integrating backend APIs. I also optimize performance, ensure code quality through testing, and collaborate closely with other team members to enhance the user experience with server-side rendering (SSR).',
    link1: 'https://github.com/ephnie-o/gold-erp',
    link2: 'n/a',
    link3: 'n/a',
  },
  {
    id: 5,
    date: 'Jun 12, 2024',
    title: 'ADVANCED PORTFOLIO WEBSITE',
    description: 'This portfolio was built using Next.js for its powerful React framework and Tailwind CSS for utility-first CSS styling.',
    link1: 'https://github.com/ephnie-o/portfolio-2',
    link2: 'n/a',
    link3: 'n/a',
  }
]

function Project({project}) {
  return (
    <Card as='project'>
      <Card.Title>
        {project.title}
      </Card.Title>
      <Card.Eyebrow as='time' dateTime={project.date} decorate>
        {project.date}
      </Card.Eyebrow>
      <Card.Description>
        {project.description}
      </Card.Description>
      <br />
      <Link className='text-emerald-500 text-sm font-bold hover:text-emerald-950' href={project.link1} target='_blank' rel='noopener noreferrer'>View on github</Link>
      <Link className='text-emerald-500 text-sm font-bold hover:text-emerald-950' href={project.link2} target='_blank' rel='noopener noreferrer'>View design on figma</Link>
      <Link className='text-emerald-500 text-sm font-bold hover:text-emerald-950' href={project.link3} target='_blank' rel='noopener noreferrer'>View web app</Link>
      <br />
      <p className='text-sm text-rose-600'>*Link may not work if project is not ready*</p>
    </Card>
  )
}

//<Card.Cta>Read article</Card.Cta>


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I create a new project, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Stereda Pharmaceuticals Limited',
      title: 'Assistant Managing Pharmacist / Front-End Developer',
      start: 'Jan 2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'AddPharma Ghana Limited',
      title: 'Health IT Consultant',
      start: 'Jul 2019',
      end: 'Sept 2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="/CV.pdf" target='_blank' rel='noopener noreferrer' download variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software programmer, Fitness Enthusiast, and Pharmacist.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Stephanie, a software programmer and pharmacist based in Ghana.
            I&apos;m the lead front-end developer and assistant managing pharmacist at Stereda pharmaceuticals limited.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/_ephnie_"
              target='_blank' rel='noopener noreferrer'
              aria-label="Follow on X"
              icon={XIcon} />
            <SocialLink
              href="https://www.instagram.com/_ephnie_/"
              target='_blank' rel='noopener noreferrer'
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/ephnie-o/"
              target='_blank' rel='noopener noreferrer'
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/stephanie-odoom-ab5761125/"
              target='_blank' rel='noopener noreferrer'
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {project.map((project)=> (
              <Project key={project.id} project={project} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
