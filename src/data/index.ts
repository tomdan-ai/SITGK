import { NavItem, Project, Testimonial, TeamMember, Event, DonationOption } from '../types';
import project1 from '/pr1.png'
import project2 from '/pr2.png'
import project3 from '/pr3.png'

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Projects', href: '/projects' },
  { label: 'Donate', href: '/donate' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Community Outreach Program',
    description: 'Our team visited local communities to provide essential supplies and support to families in need.',
    imageUrl: project1,  // Corrected: just use the imported variable directly
    impact: 'Supported 150 families',
    date: 'March 2024',
  },
  {
    id: '2',
    title: 'Youth Development Initiative',
    description: 'Empowering young people through education, mentorship, and skill development programs.',
    imageUrl: project2,  // Corrected: just use the imported variable directly
    impact: 'Mentored 50 youth',
    date: 'February 2024',
  },
  {
    id: '3',
    title: 'Rural School Support',
    description: 'Providing educational resources and infrastructure improvements to rural schools.',
    imageUrl: project3,  // Corrected: just use the imported variable directly
    impact: 'Assisted 5 schools',
    date: 'January 2024',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "SITGK International has made a real difference in our community. Their support has helped us build a better future for our children.",
    author: 'Community Leader',
    role: 'Local Partner',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: '2',
    quote: "The dedication of SITGK International volunteers is inspiring. They don't just provide help, they become part of our community.",
    author: 'School Principal',
    role: 'Education Partner',
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Executive Director',
    bio: 'Leading our mission to create positive change in communities through sustainable development and education.',
    imageUrl: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg',
  },
  {
    id: '2',
    name: 'Michael Carter',
    role: 'Program Director',
    bio: 'Coordinating our community initiatives and ensuring effective implementation of our projects.',
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
  },
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Prayer Meeting',
    date: 'Monday, Wednesday, Friday',
    time: '5:00 PM - 5:30 PM EST (10:00 PM - 10:30 PM GMT / 2:00 PM - 2:30 PM PST)',
    location: 'Online',
    description: 'Join us for our daily prayer meetings where we come together in faith and fellowship.',
  },
  {
    id: '2',
    title: "Children's Service",
    date: 'Every Saturday',
    time: '3:30 PM - 4:00 PM EST (8:30 PM - 9:00 PM GMT / 12:30 PM - 1:00 PM PST)',
    location: 'Online',
    description: 'Weekly service dedicated to nurturing and teaching our children in faith and values.',
  },
  {
    id: '3',
    title: 'Community Outreach Day',
    date: 'Every Saturday',
    time: '9:00 AM - 2:00 PM',
    location: 'Various Communities',
    description: 'Join us in our weekly community support and development activities.',
  },
  {
    id: '4',
    title: 'Youth Mentorship Program',
    date: 'Every Wednesday',
    time: '3:00 PM - 5:00 PM',
    location: 'SITGK International Center',
    description: 'Weekly mentorship sessions for youth development and education.',
  },
];

export const donationOptions: DonationOption[] = [
  { id: '1', amount: 25, description: 'Provides educational materials for one student' },
  { id: '2', amount: 50, description: 'Supports a family with essential supplies' },
  { id: '3', amount: 100, description: 'Funds community development activities' },
  { id: '4', amount: 250, description: 'Sponsors a rural school improvement project' },
];