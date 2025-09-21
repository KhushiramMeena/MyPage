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
            
            'Built Single Page Applications (SPAs) using React.js, Next.js, TypeScript, MUI, and FastAPI, integrated with databases like MongoDB and PostgreSQL.',
            'Developed a mini social media platform with features like post reactions, comments, and private chat functionality.',
            'Created a full-stack Job Portal with admin controls, dynamic job filtering, and real-time Telegram integration to improve user engagement and content delivery.',
            'Built an Online Test Conducting System with role-based access (admin, teacher, student), responsive dashboards, and efficient test workflows.',
            'Explore all my projects to see detailed implementations, live previews, and GitHub repositories.'
             
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
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'Kubernetes', icon: 'logos:kubernetes' },
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
            ' Strong foundation in core programming concepts with hands-on experience in writing clean, efficient, and scalable code.',
            'Proficient in multiple languages including C++, Python, JavaScript, and Java, with practical use in real-world projects and systems.',
            'Experienced in writing optimized SQL queries and working with relational databases like PostgreSQL and MySQL.',
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
