import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  EnvelopeIcon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  // PhoneIcon,
  SparklesIcon,
  // MapPinIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import awsCloudPractitionerCert from '../images/aws-certified-cloud-practitioner.png';
import terraformCert from '../images/hashicorp-certified-terraform-associate-003.png';
import heroImage from '../images/header-background.jpg';
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import portfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import portfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import portfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import portfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import portfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import portfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import portfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import portfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import portfolioImage11 from '../images/portfolio/portfolio-11.jpg';
// import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ActionType,
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
        A .NET Software Developer looking for a role in London starting Jan 2024.

      </p>
      <p className='prose-sm text-stone-200 sm:prose-base lg:prose-lg'>
        An experienced consultant of over 6 years in Sydney, my breadth of knowledge in coding, testing, cloud, devops,
        and project management has contributed to the seamless delivery of high-quality solutions on multiple projects.
        My work has been involved in the delivery of websites, data platforms, backends & cloud infrastructure.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://normanapp-assets.s3.eu-west-1.amazonaws.com/Norman_Hu_Resume.pdf',
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
  description: `A natural problem solver and thinker, I feel at home when inside an IDE. Been in Sydney my whole life, moving to London to look for a new adventure.`,
  aboutItems: [
    { label: 'Location (current)', text: 'Sydney, AUS', Icon: MapIcon },
    { label: 'Location (from 2024)', text: 'London, UK (with full working rights)', Icon: MapIcon },
    { label: 'Study', text: 'University of New South Wales', Icon: AcademicCapIcon },
    { label: 'Interests', text: 'Gym, Volleyball, Hiking', Icon: SparklesIcon },
    // { label: 'Age', text: '30', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Australian', Icon: FlagIcon },
    // { label: 'Employment', text: 'Cognizant Servian', Icon: BuildingOffice2Icon },
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
        name: 'Git, GitHub, Bitbucket',
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
    image: portfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage11,
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
    date: 'Mar 2022 - Present',
    title: 'Cognizant Servian',
    location: 'Consultant',
    content: (
      <p>
        Being a software & cloud consultant at a tech consultancy was an excellent opportunity to further my software development skills,
        with more cloud-native software development and enterprise solutions.
        <ul className="my-2 md:list-disc md:list-outside md:ml-4">
          <li>Developed <b>REST</b> and <b>GraphQL</b> APIs with <b>ASP.NET Core</b> in <b>C#</b>, <b>Entity Framework</b> and <b>MS SQL Server</b> for a website & mobile app backend, improving functionality and driving digital adoption for the client.</li>
          <li>Liaised with stakeholders to form business requirements, manage conflicts, create user stories & acceptance criteria, and ran backlog grooming & prioritisation sessions to ensure the smooth delivery of projects.</li>
          <li>Designed <b>cloud infrastructure</b> solutions, taking into consideration security, reliability, durability, cost, support and other functional & non-functional requirements.</li>
          <li>Set up <b>Python</b> event-driven functions, deployed onto <b>Google Cloud Platform</b> Cloud Functions to ingest webhooks, transform data, create backups and monitor systems.</li>
          <li>Translated cloud solutions into <b>Terraform</b> code to deploy GCP infrastructure, providing a strong foundation and quick response to any infrastructure change requests.</li>
          <li>Troubleshooted <b>Docker</b> images operating within a microservices framework.</li>
          <li>Designed test cases, conducted manual testing and <b>Cypress</b> testing, managed with <b>qtest</b>.</li>
          <li>Wrote technical docs, user guides, and knowledge base articles that are easy to find, read and understand.</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'Jan 2021 - Mar 2022',
    title: 'Arcadis',
    location: 'Senior Transport Planner',
    content: (
      <p>
        Arcadis is a large engineering consultancy where I worked on the Central Station Renewal Project, Inland Rail, 
        Transport Access Programs, and traffic & transport strategies, for Transport for NSW and local governments.
        <ul className="my-2 md:list-disc md:list-outside md:ml-4">
          <li>Traffic and pedestrian modelling, including Legion micro-simulation modelling of Sydney's Central Station.</li>
          <li>Transport data analytics to gain insights and inform transport planning assessments.</li>
          <li>Wrote transport planning assessments, government strategy reports, and proposals to shape our urban environment.</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'May 2017 - Dec 2020',
    title: 'Beca',
    location: 'Transport Planner',
    content: (
      <p>
        Starting in the two-year graduate program, I was a Transport Planning consultant primarily working on data analytics,
        traffic & transport modelling and strategic assessments.
        <ul className="my-2 md:list-disc md:list-outside md:ml-4">
          <li> .NET application development with <b>C#</b>, WinForms and <b>MS SQL Server</b> to automate data analytics (using Entity Framework, LINQ, and SQL).</li>
          <li>Used <b>VBA</b> in Excel for data analytics & visualisations of traffic data, Opal data and other transport datasets.</li>
          <li>Conducted local area transport plans, corridor assessments and traffic & pedestrian modelling.</li>
        </ul>
      </p>
    ),
  },
];


export const projects: TimelineItem[] = [
  {
    title: 'eNVD Livestock Consignments System',
    location: 'Meat and Livestock Australia',
    date: '2023',
    content: (
      <div className="flex flex-col gap-y-2">
        <p>
          eNVD is Australia's digital red meat integrity system, providing assurance and livestock traceability
          for the Australian red meat industry, ensuring the product is clean, safe and natural. The digital system 
          would replace existing paper-based systems, reducing costs whilst improving access, traceability and integration
          with other systems.
        </p>
        <p>
          I developed APIs used by the eNVD website, mobile app, and offered as a third-party API, employing both <b>REST</b> and <b>GraphQL</b>.
          The tech stack uses <b>ASP.NET Core</b>, <b>Entity Framework</b> and <b>MS SQL Server</b>, <b>MVVM</b> and <b>microservices</b> architectures,
          with testing using <b>NUnit</b> and <b>Moq</b> frameworks.
        </p>
        <p>
          As product owner, I was also primarily responsible for liaising with stakeholders to analyse business requirements,
          translating them into user stories, acceptance criteria and UI/UX designs.
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
      <div className="flex flex-col gap-y-2">
        <p>
          BOSCAR wanted a new data platform to migrate its traditional SAS data warehouse and data pipelines to a modern cloud-based solution.
        </p>
        <p>
          I designed a <b>Google Cloud Platform</b> solution, writing <b>Terraform</b> code and deploying infrastructure that handled multiple working environments,
          data ingestion pipelines, BigQuery, webhooks, IAM roles & groups, logging & monitoring, and integrations with dbt Cloud and Bitbucket.
          Webhooks where handled using <b>Cloud Functions</b> in <b>Python</b> and the data ingestion pipeline using <b>Cloud Build</b>.
        </p>
      </div>
    ),
  },
  {
    title: 'Normanhu.com (this website)',
    location: 'A personal website project',
    date: '2023',
    content: (
      <div className="flex flex-col gap-y-2">
        <p>
          This website was built using React in Typescript with NextJS and Tailwind CSS. Based on the
          <a className="inline-flex mx-1 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" target="_blank" href="https://reactresume.com">
            React Resume
          </a>
          open-source template, it is on <b>AWS Amplify</b>, 
          <Link className="inline-flex mx-1 font-medium text-blue-600 underline dark:text-blue-500 no-underline" href="/#contact">
            'Get in touch'
          </Link> 
          form submissions forwarded to my email inbox 
          via a GraphQL backend and <b>AWS SES</b>, downloadable assets hosted on <b>S3 buckets</b>, and domain name from CloudFront. 
        </p>
        <p className="flex gap-x-1">
          <a className="flex gap-x-1 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" target="_blank" href="https://github.com/hnorm/norman-app">
            GitHub repo
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
        A data migration project from Netezza onto <b>BigQuery</b>, I designed the <b>Google Cloud Platform</b> solution that included a BigQuery data warehouse,
        scheduled <b>Cloud Functions</b> to perform regular table snapshot backups, managing IAM roles and groups, Cloud KMS keys,
        and integrations with SAP Data Services and Xmatters. Wrote <b>Terraform</b> to deploy infrastructure as code across multiple environments.
      </p>
    ),
  },
  {
    title: 'Operational Performance Toolkit',
    location: 'Transport for NSW',
    date: '2019-2020',
    content: (
      <div className="flex flex-col gap-y-2">
        <p>
          The TfNSW railway analytics team required customised data transformations and visualisations to support their program of works.
          I developed a <b>C#</b> WinForms application with <b>.NET Entity Framework</b> and <b>MS SQL Server</b>, with data transformations
          performed using <b>LINQ</b> and <b>SQL</b>, and results output onto Excel tables and graphs created using Excel Interop.
        </p>
        <p>
          This resulted in a 90% reduction in effort required to produce analytics, allowing Transport for NSW to greatly expand its analytical coverage and operational insights on the Sydney railway network.
        </p>
      </div>
    ),
  },
  {
    title: 'Traffic Flow Detection from RMS Live Traffic Cameras',
    location: 'UNSW Undergraduate Honours Thesis',
    date: '2016',
    content: (
      <div className="flex flex-col gap-y-2">
        <p>
          My civil engineering honours thesis investigated the use of <b>OpenCV</b> in <b>Python</b> to detect traffic flow from
          RMS live traffic cameras, with images web scraped from live feeds using Python scripts.
        </p>
        <p className="flex gap-x-1">
          <a className="flex gap-x-1 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" target="_blank" href="https://normanapp-assets.s3.eu-west-1.amazonaws.com/Norman+Hu+Thesis+B.pdf">
            Download PDF
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
  description: 'Contact me using this form, email or LinkedIn message for any inquiries, and feel free to share my resume.',
  items: [
    {
      type: ContactType.Email,
      action: ActionType.CopyToClipboard,
      text: 'normanhujun@gmail.com',
      ref: 'normanhujun@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      action: ActionType.Link,
      text: 'linkedin.com/in/hnorm/',
      ref: 'https://www.linkedin.com/in/hnorm/',
    },
    // {
    //   type: ContactType.Phone,
    //   text: '+xx xxx xxx xxx',
    //   href: 'tel:+',
    // },
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

  { label: 'Email address', Icon: EnvelopeIcon, action: ActionType.CopyToClipboard, ref: 'normanhujun@gmail.com' },
  // { label: 'Phone', Icon: PhoneIcon, href: 'tel:+xxxxxxxxxxx' },
  // { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker' },
  { label: 'LinkedIn', Icon: LinkedInIcon, action: ActionType.Link, ref: 'https://www.linkedin.com/in/hnorm/' },
  { label: 'GitHub', Icon: GithubIcon, action: ActionType.Link, ref: 'https://www.github.com/hnorm' },
  // { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/' },
  // { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx' },
];
