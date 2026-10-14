import type { TeamMember, TimelineItem } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    name: 'Nisha Kapoor',
    role: 'Founder & Creative Director',
    bio: 'Nisha founded The Story Events in 2016 after a decade working in luxury hospitality across India and Europe. Her obsession with flawless detail and genuine human warmth defines the agency\'s culture and approach.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    superpower: 'Seeing the wedding before it exists',
  },
  {
    name: 'Aryan Mehta',
    role: 'Head of Destination Weddings',
    bio: "Aryan has planned over 60 destination weddings across 8 states, including 12 palace weddings and 4 mountain ceremonies. He speaks the language of heritage venues, logistics, and last-minute miracles.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    superpower: 'Turning logistics into love stories',
  },
  {
    name: 'Preethi Shenoy',
    role: 'Lead Décor Designer',
    bio: "Preethi studied floral design in Amsterdam and interior architecture in Mumbai. She leads The Story Events' design studio, translating couple visions into environments that guests walk into and gasp.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    superpower: 'Making rooms feel like feelings',
  },
  {
    name: 'Karthik Rajan',
    role: 'Head of Guest Experience',
    bio: 'A former five-star hotel concierge manager, Karthik brings genuine white-glove hospitality training to every guest experience he designs. No detail is too small; no guest is anything less than a VIP.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    superpower: 'Anticipating needs before they arise',
  },
  {
    name: 'Divya Anand',
    role: 'Senior Coordinator',
    bio: "Divya has run the on-ground operation for over 40 weddings. She is the calm at the eye of every storm — precise, warm, and completely unflappable. Her day-of coordination style is legendary among couples.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    superpower: 'Never losing the timeline, never losing her cool',
  },
  {
    name: 'Sahil Bose',
    role: 'Vendor Relations Manager',
    bio: 'With relationships across 200+ vetted vendors in 8 cities, Sahil is the person who knows exactly which photographer, caterer, or entertainment act will make your wedding extraordinary — and how to get them.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    superpower: 'Finding the perfect talent for every vision',
  },
];

export const brandTimeline: TimelineItem[] = [
  { year: '2018', title: 'Wedding consultancy', detail: 'Planning' },
  {
    year: '2020',
    title: 'Wedding planning in Hyderabad',
    detail: 'Destination planning for Pune & Mumbai. Headquarters moved to Hyderabad.',
  },
  { year: '2023', title: 'Production house' },
  { year: '2024', title: 'Luxury catering & styling company' },
  { year: '2025', title: 'Event Dynamics collaboration' },
  { year: '2026', title: 'Sri Lanka & Thailand', detail: 'This year' },
];
