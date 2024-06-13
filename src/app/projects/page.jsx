import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const project = [
  {
    id: 1,
    date: 'Apr 15, 2024',
    title: 'PORTFOLIO WEBSITE: ',
    description: "I designed and developed my personal portfolio website using React.js, Bootstrap, and CSS, with the initial design and layout prototyped in Figma. This project allowed me to demonstrate my skills in frontend development, including creating a responsive and visually appealing interface. Leveraging React.js ensured seamless navigation and dynamic content updates, while Bootstrap and CSS were instrumental in achieving a modern and polished design aesthetic. Using Figma for the design phase enabled me to craft intuitive and user-centered layouts, ensuring an optimal user experience across different devices and platforms. The portfolio website serves as a showcase of my work, skills, and experiences in the field of web development.",
    link:  { href: 'https://github.com/ephnie-o/my-portfolio', label: 'github.com' },
  },
  {
    id: 2,
    date: 'Apr 23, 2024',
    title: 'FITNESS WEB APP: ',
    description: "I developed a gym workout web application using React.js, Bootstrap, and CSS. The application, inspired by popular fitness platforms, offers a range of exercise routines tailored for different days and goals. Users can easily navigate through the exercises, track their progress, and customize their workout plans. I designed the website using Figma to create intuitive and user-friendly interfaces, ensuring a seamless user experience. The use of React.js provided a dynamic and responsive user interface, while Bootstrap and CSS were utilized for styling and layout design.",
    link: { href: 'https://github.com/ephnie-o/acti-fitness', label: 'github.com' },
  },
  {
    id: 3,
    date: 'May 20, 2024',
    title: 'ERP SYSTEM',
    description: 'I am serving as the lead front-end developer for an ERP system designed specifically for my pharmacy, utilizing Next.js and Tailwind CSS. In collaboration with a team of backend developers and another front-end developer, I am spearheading the construction of this system, ensuring seamless integration of front-end functionalities with backend systems to optimize pharmacy operations.',
    link: { href: 'https://github.com/ephnie-o/erp-system', label: 'github.com' },
  },
  {
    id: 4,
    date: 'Jun 4, 2024',
    title: 'ERP SYSTEM',
    description: 'I am part of the front-end development team for an ERP system using Nuxt.js. I focus on implementing responsive designs, developing Vue.js components, managing state with Vuex, and integrating backend APIs. I also optimize performance, ensure code quality through testing, and collaborate closely with other team members to enhance the user experience with server-side rendering (SSR).',
    link: { href: 'https://github.com/ephnie-o/gold-erp', label: 'github.com' },
  },
  {
    id: 5,
    date: 'Jun 12, 2024',
    title: 'ADVANCED PORTFOLIO WEBSITE',
    description: 'This portfolio was built using Next.js for its powerful React framework and Tailwind CSS for utility-first CSS styling.',
    link: { href: 'https://github.com/ephnie-o/portfolio-2', label: 'github.com' },
  }
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {project.map((project) => (
          <Card as="li" key={project.title}>
            <div className="relative z-10 flex p-2 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Card.Title>{project.title}</Card.Title>
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target='_blank' rel='noopener noreferrer'>{project.date}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
