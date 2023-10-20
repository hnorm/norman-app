import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  // PhoneIcon,
  SparklesIcon,
  // MapPinIcon
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import awsCloudPractitionerCert from '../images/aws-certified-cloud-practitioner.png';
import terraformCert from '../images/hashicorp-certified-terraform-associate-003.png';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
// import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  CertificationSection,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem
} from './dataDef';


/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Norman Hu',
  description: "Norman Hu's resume website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Certifications: 'certifications',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: 'Norman Hu',
  description: (
    <>
      <p className='prose-sm text-stone-200 sm:prose-base lg:prose-lg'>
        <strong className='text-stone-100'></strong>
        A .NET Software Developer
        with experience in building websites, databases, backend & cloud infrastructure.
        I am looking for new job based in London from 2024.
      </p>
      <p className='prose-sm text-stone-200 sm:prose-base lg:prose-lg'>
        An experienced consultant of over 6 years, I have an all-round knowledge which includes
        coding, testing, cloud, business analysis, project management, user stories and documentation.
      </p>
      {/* <p className='prose-sm text-stone-200 sm:prose-base lg:prose-lg'>
        I'm a Victoria based <strong className='text-stone-100'>Full Stack Software Engineer</strong>, currently working
        at <strong className='text-stone-100'>Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className='prose-sm text-stone-200 sm:prose-base lg:prose-lg'>
        In my free time time, you can catch me training in <strong className='text-stone-100'>Muay Thai</strong>,
        plucking my <strong className='text-stone-100'>banjo</strong>, or exploring beautiful{' '}
        <strong className='text-stone-100'>Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: 'https://normanapp-assets.s3.eu-west-1.amazonaws.com/Norman-Hu-resume.pdf',
      target: '_blank',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  // profileImageSrc: profilepic,
  description: `Currently residing in Sydney, I will be relocating to London in January next year for a new adventure. `,
  aboutItems: [
    { label: 'Relocating to', text: 'London, UK', Icon: MapIcon },
    { label: 'Interests', text: 'Gym, Volleyball, Hiking', Icon: SparklesIcon },
    // { label: 'Age', text: '30', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Australian', Icon: FlagIcon },
    { label: 'Study', text: 'University of New South Wales', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Cognizant Servian', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming',
    skills: [
      {
        name: 'C#',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Javascript/Typescript',
        level: 7,
      },
      {
        name: 'HTML/CSS',
        level: 5,
      },
      {
        name: 'HCL (Terraform)',
        level: 9,
      },
      {
        name: 'SQL',
        level: 8,
      }
    ],
  },
  {
    name: 'Technologies',
    skills: [
      {
        name: 'ASP.NET Core',
        level: 9,
      },
      {
        name: 'Entity Framework',
        level: 9,
      },
      {
        name: 'REST',
        level: 8,
      },
      {
        name: 'GraphQL',
        level: 8,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Nodejs',
        level: 8,
      },
      {
        name: 'Nextjs',
        level: 7,
      },
      {
        name: 'Docker',
        level: 6,
      },
      {
        name: 'BigQuery',
        level: 6,
      },
      {
        name: 'MS SQL Server',
        level: 5,
      },
    ],
  },
  {
    name: 'Cloud/DevOps',
    skills: [
      {
        name: 'Terraform',
        level: 9,
      },
      {
        name: 'GCP (Functions, Storage, Build (CI/CD), IAM, BigQuery, Scheduler, Pub/Sub)',
        level: 8,
      },
      {
        name: 'AWS (Amplify, DynamoDB, GraphQL, S3, SES, SNS)',
        level: 5,
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Visual Studio Code',
        level: 9,
      },
      {
        name: 'Postman',
        level: 9,
      },
      {
        name: 'Git, Github, Bitbucket',
        level: 8,
      },
      {
        name: 'Cypress',
        level: 7,
      },
      {
        name: 'JIRA & Confluence',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2012 - 2017',
    location: 'University of NSW, Sydney',
    title: 'Bachelor of Engineering (Hons) (Civil) & Bachelor of Commerce (Finance)',
    content: <p></p>,
  },
  {
    date: '2018 - 2020',
    location: 'University of NSW, Sydney',
    title: 'Certificate of Computing',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022 - Present',
    title: 'Cognizant Servian',
    location: 'Senior Consultant',
    content: (
      <ul className="md:list-disc md:list-outside md:ml-4">
        <li>Extended an existing <b>GraphQL</b> API written in <b>C#</b> and <b>MS SQL Server.</b></li>
        <li>Collaborated with multiple stakeholders to form business requirements, creating user stories & acceptance criteria to add new features.</li>
        <li>Developed <b>Python</b> functions hosted on <b>GCP</b> to ingest webhooks, transform data, create backups and monitor systems.</li>
        <li>Designed cloud infrastructure solutions covering security, reliability, durability, cost, support and other business requirements.</li>
        <li>Created <b>Terraform</b> code and deployed infrastructure on GCP for data platforms and websites.</li>
        <li>Designed test cases and conducted testing in managed in <b>qtest</b>. </li>
        <li>Wrote technical docs, user guides, knowledge base articles.</li>
      </ul>
    ),
  },
  {
    date: '2021 - 2022',
    title: 'Arcadis',
    location: 'Transport Planner',
    content: (
      <ul className="md:list-disc md:list-outside md:ml-4">
        <li>Wrote transport planning assessments, government strategy reports, and proposals to shape our urban environment.</li>
      </ul>
    ),
  },
  {
    date: '2017 - 2020',
    title: 'Beca',
    location: 'Graduate Transport Planner',
    content: (
      <ul className="md:list-disc md:list-outside md:ml-4">
        <li>Built a <b>C#</b> application using <b>WinForms</b> and <b>MS SQL Server</b> to automate data analytics</li>
        <li>Used <b>VBA</b> in Excel for data analytics and creating visualisations of traffic data, Opal data and other transport datasets.</li>
      </ul>
    ),
  },
];


export const projects: TimelineItem[] = [
  {
    title: 'eNVD Livestock Consignments System',
    location: 'Meat and Livestock Australia',
    date: '2023',
    content: (
      <div className="flex flex-col gap-y-2">        <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
        <p className="flex gap-x-1">
          Website (login required):
          <a className="flex gap-x-1 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" target="_blank" href="https://envd.integritysystems.com.au/">
            envd.integritysystems.com.au
            <div className="flex justify-center items-center">
              <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </div>
          </a>
        </p>
        <p className="flex gap-x-1">
          Mobile app:
          <a className="flex gap-x-1 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" target="_blank" href="https://www.integritysystems.com.au/on-farm-assurance/national-vendor-declaration-nvd/envd-app/">
            The eNVD Livestock Consignments App
            <div className="flex justify-center items-center">
              <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </div>
          </a>
        </p>
      </div>
    ),
  }, {
    title: 'BOSCAR Data Platform',
    location: 'NSW Department of Communities and Justice',
    date: '2023',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    title: 'Normanhu.com (this website)',
    location: 'A personal website project',
    date: '2023',
    content: (
      <div className="flex flex-col gap-y-2">
        <p>
          Describe work, special projects, notable achievements, what technologies you have been working with, and
          anything else that would be useful for an employer to know.
        </p>
        <p className="flex gap-x-1">
          <a className="flex gap-x-1 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" target="_blank" href="https://github.com/hnorm/norman-app">
            Github repo
            <div className="flex justify-center items-center">
              <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </div>
          </a>
        </p>
      </div>
    ),
  },
  {
    title: 'Netezza Data Platform Migration Project',
    location: 'Australian Stock Exchange',
    date: '2022',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  }, 
  {
    title: 'Central Station Pedestrian Modelling Assessment',
    location: 'Transport for NSW',
    date: '2021',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    title: 'Operational Performance Toolkit',
    location: 'Transport for NSW',
    date: '2019-2020',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  }, 
  {
    title: 'Traffic Flow Detection from RMS Live Traffic Cameras',
    location: 'UNSW Undergraduate Honours Thesis',
    date: '2016',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Certifications section
 */
export const certification: CertificationSection = {
  imageSrc: testimonialImage,
  certifications: [
    {
      image: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/69208438',
      url: 'https://google.accredible.com/99567853-4c8a-4384-8cfe-0fbbd0b75548',
      provider: 'Google Cloud Platform (GCP)',
      name: 'Professional Cloud DevOps Engineer',
    },
    {
      image: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/55019916',
      url: 'https://google.accredible.com/bbdd7997-7441-4f64-ac8a-8c184f1dd045',
      provider: 'Google Cloud Platform (GCP)',
      name: 'Associate Cloud Engineer',

    },
    {
      image: awsCloudPractitionerCert,
      url: 'https://www.credly.com/badges/d0f112fd-66d2-40d8-a035-ee60d67c3dd9/public_url',
      provider: 'Amazon Web Services (AWS)',
      name: 'Certified Cloud Practitioner',
    },
    {
      image: terraformCert,
      url: 'https://www.credly.com/badges/6d08795c-ae3d-440e-84bf-4a116cd7a9d1/public_url',
      provider: 'HashiCorp',
      name: 'Terraform Associate (003)',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Contact me for any questions and feel free to share my Resume.',
  items: [
    {
      type: ContactType.Email,
      text: 'normanhujun@gmail.com',
      href: 'mailto:normanhujun@gmail.com',
    },
    // {
    //   type: ContactType.Phone,
    //   text: '+xx xxx xxx xxx',
    //   href: 'tel:+',
    // },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/hnorm/',
      href: 'https://www.linkedin.com/in/hnorm/',
    },
    // {
    //   type: ContactType.Github,
    //   text: 'github.com/hnorm',
    //   href: 'https://www.github.com/hnorm',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [

  { label: 'Email', Icon: EnvelopeIcon, href: 'mailto:normanhujun@gmail.com' },
  // { label: 'Phone', Icon: PhoneIcon, href: 'tel:+xxxxxxxxxxx' },
  // { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker' },
  { label: 'Github', Icon: GithubIcon, href: 'https://www.github.com/hnorm' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hnorm/' },
  // { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/' },
  // { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx' },
];
