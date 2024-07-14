import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
    title: 'Contact Me',
    subtitle: "what's next",
    paragraphs: [
    'Currently looking for a Remote/Onsite fulltime job!',
    'Email : mkhushiram68@gmail.com',
    ],
    link: `mailto:${author.email}`,
};