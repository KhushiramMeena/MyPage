import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Khushiram Meena',
    tagline: '',
    description:
    "I'm a Software Engineer with experience building real-time systems, scalable web applications, and user-focused platforms across diverse domains.",
    specialText: "Currently open to Full-time opportunities!",
    items:[
        'Full Stack Developer',
        'Software Developer',
        'Data Engineer',
        'Data Analyst'
      ],
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};