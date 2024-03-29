import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'


export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
    {
        id: getId(),
        title: 'full stack development',
        // animation lottie file: https://lottiefiles.com/
        lottie: {
            light: '/lotties/dev2Light.json',
            dark: '/lotties/dev1Dark.json',
        },
        points: [
            
            'Building Single Page web-apps using React.js, RESTful APIs, Next.js, TypeScript',
            'Created a Mini-social-media web application enabling users to comment, like posts, and engage in private chats',
            'Created a Job-Portal website allowing job seekers to filter jobs based on their requirements, Admin can handle the job posts',
            'Explore my all projects and work for detailed references.',
             
        ],
        softwareSkills: [
          // iconify icons: https://icon-sets.iconify.design/
        { name: 'Html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        // { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        {
            name: 'TypeScript',
            icon: 'vscode-icons:file-type-typescriptdef',
        },
        { name: 'Next.Js', icon: 'logos:nextjs-icon' },
        // { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'Node.Js', icon: 'logos:nodejs-icon' },
        { name: 'React.Js', icon: 'logos:react' },
        { name: 'Express.Js', icon: 'skill-icons:expressjs-dark' },
       
          
        // { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'Redux', icon: 'logos:redux' },
        { name: 'PHP', icon: 'skill-icons:php-dark' },
        { name: 'MySQL', icon: 'logos:mysql' },
        { name: 'MongoDB', icon: 'logos:mongodb-icon' },
        ],
    },
    {
        id: getId(),
        title: 'Programming',
        lottie: {
        light: '/lotties/curl-code.json',
        dark: '/lotties/curl-code2.json',
        },
        points: [
            'In-depth knowledge of Programming languages',
            'In-depth knowledge of SQL',
        ],
        softwareSkills: [
        { name: 'C', icon: 'devicon:c' },
        { name: 'C++', icon: 'logos:c-plusplus' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'SQL', icon: 'tabler:sql' },
        ],
    },
    ],
};
