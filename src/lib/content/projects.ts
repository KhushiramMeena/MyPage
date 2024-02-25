import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';

const currentYear: number = new Date().getFullYear()

export const projectsSection: ProjectsSectionType = {
    title: 'my projects',
    
    projects: [
        {
            id: getId(),
            name: 'New Project on its way! 😊',
            url: 'comming-soon',
            repo: 'comming-soon',
            img: '/project-img/new-project.jpg',
            year: currentYear,
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
    },
   
   
   
    // {
    //     id: getId(),
    //     name: '',
    //     url: 'hosted link',
    //     repo: 'git-repo',
    //     img: 'project-img',
    //     year: year(int),
    //     tags: ['html', 'sass', 'JS'],
    // },
  
   
    ],
};