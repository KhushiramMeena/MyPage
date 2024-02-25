import { AboutSectionType } from '@/lib/types/sections'

export const aboutSection: AboutSectionType = {
    title: 'about me',
    // Paragraphs need to be changed from containers/About.tsx
    // Because it wasn't possible to insert anchor tags like this
    list: {
    title: "Currently i'm working with below technologies:",
    items: [
        'NodeJs',
        'TypeScript',
        'ExpressJs',
        'MongoDB',
        'ReactJs',
        'Python (Numpy, Pandas)',
        'SQL'
        
    ],
    },
    img: '/mypic.jpg',
};