import { author, socialLinks } from '@/lib/content/portfolio';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '@/lib/types/sections';

import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Khushiram Meena.',
  tagline: '',
  description:
    "I'm a passionate Full-Stack Developer having an experience of web applications with React.js, Next.js, TypeScript , Node.Js, MongoDB, PHP and  MySQL.",
  // description:
  
  specialText: 'Currently available for a Full-time Job!',

  items:[
    'Full Stack Developer',
    'Software Developer',
    'Data Analyst'
  ],

  // either button or simple text (information)
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'NodeJs',
        'TypeScript',
        'ExpressJs',
        'MongoDB',
        'ReactJs',
        'Python',
        'SQL'
    ],
  },
  img: '/mypic.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/search?q=programming&category=animations
      lottie: {
        light: '/lotties/dev2Light.json',
        dark: '/lotties/dev1Dark.json',
      },
      points: [
        'Building Single Page Apps in React.js, RESTful APIs, responsive static websites using Next.js',
  'Developed a Money Tracker Web Application enabling users to link their Bank Accounts and analyze Income and Expenses',
  'Created a Job-Portal website allowing job seekers to filter jobs based on their requirements',
  'Explore all my projects and work for detailed references.'

      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
      ],
    },
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with figma',
        'Experience in developing design systems and style guides',
        'Providing user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
    /* {
      id: getId(),
      title: 'blockchain development',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Experience in developing Smart Contract using Solidity & Ethereum',
        'Developing NFT Smart Contracts using ERC-721 Token Standard',
        'Building Dapps with React.js & Solidity using Web3.js',
      ],
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'web3js', icon: 'logos:web3js' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
      ],
    }, */
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Chegg India',
      companyUrl: 'https://www.cheggindia.com/',
      role: 'CS Subject Expert',
      started: 'March 2023',
      upto: 'Oct 2023',
      tasks: [
      'Resolved complex programming and Database queries for global students on the Chegg platform using Computer Science expertise',
      'Enhanced learning outcomes for over 250+ individuals by resolving doubts on an online forum',
      'Lead a cross-functional team of developers and designers in the creation of a SaaS product.',
      
      ],
  },
  {
      company: 'Primathink Technologies',
      companyUrl: 'https://primathink.com/',
      role: 'Full Stack Developer Intern',
      started: 'Nov 2022',
      upto: 'Feb 2023',
      tasks: [
          "Developed different types of user interfaces.",
          "Implemented new features into existing projects.",
          "Worked with HTML, CSS, JavaScript, Bootstrap, React, PHP, and MySQL."
      ],
  },
  {
      company: 'PhotoStudy',
      companyUrl: 'https://www.photostudy.co/',
      role: 'Problem Solver',
      started: 'june 2022',
      upto: 'Aug 2022',
      tasks: [
          "Resolve challenging problems (Moslty Maths)!",
          "Deliver high-quality Mathematics solutions.",
          "Earn rewards through PhotoStudy."
     
      ],
  },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  
  projects: [
    {
        id: getId(),
        name: 'New Project on its way! 😊',
        url: 'comming-soon',
        repo: 'comming-soon',
        img: '/project-img/new-project.jpg',
        year: 2024,
        tags: ['with latest tech-stacks'],
    },
{
    id: getId(),
    name: 'Job Portal',
    url: 'https://job-portal.42web.io/',
    repo: 'https://github.com/KhushiramMeena/Job-Portal/',
    img: '/project-img/p1-job-portal.png',
    year: 2023,
    tags: ['PHP', 'MySQL'],
},
{
    id: getId(),
    name: 'Mini Social Media',
    url: '/not-hosted',
    repo: 'https://github.com/KhushiramMeena/mypost',
    img: '/project-img/mini-social.png',
    year: 2023,
    tags: ['React','NodeJs','MongoDB'],
},
{
    id: getId(),
    name: 'Search & Filter',
    url: 'https://search-and-filter-profiles.vercel.app/',
    repo: 'https://github.com/KhushiramMeena/SearchAndFilter',
    img: '/project-img/search-and-filter.png',
    year: 2024,
    tags: ['NextJs', 'Tailwind-CSS'],
},
{
    id: getId(),
    name: 'Question Paper Generator',
    url: 'https://question-paper-generator.vercel.app/',
    repo: 'https://github.com/KhushiramMeena/Question-Paper',
    img: '/project-img/p2-question-paper.png',
    year: 2023,
    tags: ['HTML', 'CSS', 'Bootstrap','JavaScript'],
},
{
    id: getId(),
    name: 'Crypto Tax Calculator',
    url: 'https://cryptotaxcalculator.vercel.app/',
    repo: 'https://github.com/KhushiramMeena/Aus_Tax_Cal',
    img: '/project-img/p3-crypto-tax.png',
    year: 2023,
    tags: ['React','Next.Js','Tailwind-CSS'],
},
{
    id: getId(),
    name: 'Invoice Generator',
    url: 'https://invc-system.vercel.app/',
    repo: 'https://github.com/KhushiramMeena/Invoice-System',
    img: '/project-img/p4-invoice-sys.png',
    year: 2023,
    tags: ['React','Redux'],
},
{
    id: getId(),
    name: 'Animated UI',
    url: 'https://density-frontend-nine.vercel.app/',
    repo: 'https://github.com/KhushiramMeena/density-frontend',
    img: '/project-img/p5-animation.png',
    year: 2023,
    tags: ['React','Next.Js', 'TypeScript'],
},
{
    id: getId(),
    name: 'Weather Application',
    url: 'https://weather-wb-app.netlify.app/',
    repo: 'https://github.com/KhushiramMeena/weather-application',
    img: '/project-img/p6-weather.png',
    year: 2022,
    tags: ['React', 'CSS'],
}

  ]


};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for a Full-time job!'
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
        icon:"simple-icons:leetcode", 
        url: socialLinks.leetcode,
    },
    
    {
        icon:"simple-icons:codechef",
        url: socialLinks.codechef,
    },
   
    {
        icon:"simple-icons:geeksforgeeks",
        url: socialLinks.geeksforgeeks,
    },
    {
        icon: 'uil:github',
        url: socialLinks.github,
    },
    {
        icon: 'lucide:linkedin',
        url: socialLinks.linkedin,
    },
    ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design & Built by Khushiram Meena',
  link: ' ',
};
