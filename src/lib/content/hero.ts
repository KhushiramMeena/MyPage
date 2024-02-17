import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Khushiram Meena.',
    tagline: '',
    description:
    "I'm a passionate Full-Stack Developer having an experience of web applications with React.js, Next.js, TypeScript , Node.Js, MongoDB, PHP and  MySQL.",
    specialText: 'Currently available for a Full-time Job/ Internship.',
    roles:[
        'Full Stack Developer',
        'Software Developer',
        'Data Analyst'
      ],
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};