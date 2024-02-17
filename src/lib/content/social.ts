import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';


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