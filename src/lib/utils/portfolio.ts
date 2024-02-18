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
  
  specialText: 'Currently available for a Full-time Job/internship.',

  roles:[
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
      company: 'Pixelwand',
      companyUrl: 'https://www.pixelwand.live/',
      role: 'frontend developer',
      started: 'july 2023',
      upto: 'present',
      tasks: [
        'Implemented UI components with React & Next.js, TypeScript & Tailwind CSS.',
        'Developed and maintained design systems that separates design logic.',
        'Understanding client needs and proposing effective solutions, which also involves strategising and planning.',
        'Lead a cross-functional team of developers and designers in the creation of a SaaS product.',
      ],
    },
    {
      company: 'SHMTH Capital',
      companyUrl: 'https://shmth.capital/',
      role: 'frontend developer intern',
      started: 'april 2023',
      upto: 'july 2023',
      tasks: [
        'Built trading platform using TradingView library.',
        'Designed SHMTH Capital website with Next.js, TypeScript & TailwindCSS.',
        'Collaborated with diverse nationwide team of developers.',
      ],
    },
    {
      company: 'webnetics',
      companyUrl: 'https://webnetic.vercel.app/',
      role: 'frontend developer',
      started: 'june 2022',
      upto: 'january 2023',
      tasks: [
        'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
        'Architected the folder structure and initial setup of the app.',
        'Reviewed and approved multiple Pull requests.',
        'Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing.',
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
      name: 'beautiful animations',
      url: 'https://beautiful-animations-kv.vercel.app/',
      repo: 'https://github.com/KhushiramMeena/beautiful-animations',
      img: 'https://user-images.githubusercontent.com/68834718/265277125-da2a6e07-7cf6-411c-b55f-94e372aa6dc8.png',
      year: 2023,
      tags: ['CSS Animations', 'Sass'],
    },
    {
      id: getId(),
      name: 'easy fix',
      url: 'https://easy-fix.vercel.app/',
      repo: 'https://github.com/KhushiramMeena/easy-fix',
      img: 'https://user-images.githubusercontent.com/68834718/258852895-df5c6da7-a698-40fb-97c3-a5474314cb85.png',
      year: 2023,
      tags: ['React', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'image animations',
      url: 'https://image-animations.vercel.app/',
      repo: 'https://github.com/KhushiramMeena/image-animations',
      img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/68834718/252267106-857c5341-1106-4e84-b7e6-80a668a20ba8.png',
      year: 2023,
      tags: ['CSS Animations', 'Sass'],
    },
    // {
    //   id: getId(),
    //   name: 'fylo landing page',
    //   url: 'https://fylo-kv.netlify.app/',
    //   repo: 'https://github.com/KhushiramMeena/fylo',
    //   img: 'https://user-images.githubusercontent.com/68834718/212843973-ef864a5a-f393-4901-b422-6f775a043cdb.png',
    //   year: 2023,
    //   tags: ['Html', 'Tailwind', 'TS'],
    // },
    {
      id: getId(),
      name: 'remotive jobs',
      url: 'https://remotive-jobs.vercel.app/',
      repo: 'https://github.com/KhushiramMeena/remotive-jobs',
      img: 'https://user-images.githubusercontent.com/68834718/189035104-aa71647e-33e4-442a-a2f9-c0d50bba2db1.png',
      year: 2022,
      tags: ['Nextjs', 'Sass'],
    },
    {
      id: getId(),
      name: 'countries app',
      url: 'https://countries-app-kv.netlify.app/',
      repo: 'https://github.com/KhushiramMeena/rest-countries-api',
      img: 'https://user-images.githubusercontent.com/68834718/169527851-19fefb2e-e440-411a-a8a1-4767e2c8688a.png',
      year: 2022,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      name: 'rock paper scissors',
      url: 'https://rock-paper-scissors-kv.netlify.app/',
      repo: 'https://github.com/KhushiramMeena/rock-paper-scissors',
      img: 'https://user-images.githubusercontent.com/68834718/162578706-b9e57735-6fbc-4c7b-8243-2a6ba447404e.jpg',
      year: 2022,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      name: 'todo app',
      url: 'https://todo-kv.netlify.app/',
      repo: 'https://github.com/KhushiramMeena/todo-app',
      img: 'https://user-images.githubusercontent.com/68834718/152794002-0e7bc583-084b-4c39-83bb-d82d5dd642b2.png',
      year: 2022,
      tags: ['React', 'Sass', 'JS'],
    },
    {
      id: getId(),
      name: 'weather app',
      url: 'https://weather-kv.netlify.app/',
      repo: 'https://github.com/KhushiramMeena/weather-app',
      img: 'https://user-images.githubusercontent.com/68834718/148419702-491fa08d-e520-4e2f-b219-374ec7118b2b.png',
      year: 2022,
      tags: ['Html', 'sass', 'JS', 'jQuery'],
    },
    {
      id: getId(),
      name: 'blogr landing page',
      url: 'https://blogr-kv.netlify.app/',
      repo: 'https://github.com/KhushiramMeena/blogr-landing-page',
      img: 'https://user-images.githubusercontent.com/68834718/210222542-6455303d-c93e-430b-a5c8-96a431044184.png',
      year: 2021,
      tags: ['html', 'sass', 'JS'],
    },
    {
      id: getId(),
      name: 'natours',
      url: 'https://natours-kv.netlify.app/',
      repo: 'https://github.com/KhushiramMeena/natours',
      img: 'https://user-images.githubusercontent.com/68834718/210223114-b4f64b44-2501-49c9-9fb7-b8e53fe654c6.png',
      year: 2021,
      tags: ['html', 'sass', 'JS'],
    },
    {
      id: getId(),
      name: 'nexter',
      url: 'https://KhushiramMeena.github.io/nexter/',
      repo: 'https://github.com/KhushiramMeena/nexter',
      img: 'https://user-images.githubusercontent.com/68834718/210224671-5501c5d9-a8d2-4044-a14c-38fb7e46a113.png',
      year: 2021,
      tags: ['html', 'sass'],
    },
    {
      id: getId(),
      name: 'IP address tracker',
      url: 'https://KhushiramMeena.github.io/ip-address-tracker/',
      repo: 'https://github.com/KhushiramMeena/ip-address-tracker',
      img: 'https://user-images.githubusercontent.com/68834718/210223386-03bcaa20-e649-4b3d-8709-59e42c6d685a.png',
      year: 2021,
      tags: ['html', 'bootstrap', 'JS'],
    },
    {
      id: getId(),
      name: 'calculator app',
      url: 'https://KhushiramMeena.github.io/calculator-app/',
      repo: 'https://github.com/KhushiramMeena/calculator-app/',
      img: 'https://user-images.githubusercontent.com/68834718/210223825-3b68d696-39c6-490c-9433-f315b7efccbd.png',
      year: 2021,
      tags: ['html', 'CSS', 'JS'],
    },
    {
      id: getId(),
      name: 'pig game',
      url: 'https://KhushiramMeena.github.io/pig-game/',
      repo: 'https://github.com/KhushiramMeena/pig-game',
      img: 'https://user-images.githubusercontent.com/68834718/210223527-de7fde7a-244e-4db5-8e33-d561afad6084.png',
      year: 2021,
      tags: ['html', 'CSS', 'JS'],
    },
    {
      id: getId(),
      name: 'bankist marketing',
      url: 'https://KhushiramMeena.github.io/bankist-marketing/',
      repo: 'https://github.com/KhushiramMeena/bankist-marketing',
      img: 'https://user-images.githubusercontent.com/68834718/210225545-989f79c3-cf05-4c53-b48e-b21f373b3734.png',
      year: 2021,
      tags: ['html', 'CSS', 'JS'],
    },
    // {
    //   id: getId(),
    //   name: 'digital clock',
    //   url: 'https://KhushiramMeena.github.io/digital-clock/',
    //   repo: 'https://github.com/KhushiramMeena/digital-clock',
    //   img: 'https://user-images.githubusercontent.com/68834718/210226274-a453ba15-9b83-4577-a84d-e4b88e0a5605.png',
    //   year: 2021,
    //   tags: ['html', 'CSS', 'JS'],
    // },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for a remote job or any new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
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
  link: 'https://github.com/KhushiramMeena/portfolio-website',
};
