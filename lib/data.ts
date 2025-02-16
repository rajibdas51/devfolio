import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import Blogify from '@/public/blogify.jpg';
import CareerPlex from '@/public/CareerPlex.png';
import QuickPick from '@/public/QuickPick.jpg';
import PropNest from '@/public/propnest.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },

  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'CareerPlex',
    description:
      'A full stack job board application using Next.js and React . I implemented Redux Toolkit for state management and TypeScript for strong typing.Ensured a secure user experience with HTTP cookies and JWT authentication.',
    tags: ['React', 'Next.js', 'MongoDB', 'AntD', 'NodeMailer'],
    imageUrl: CareerPlex,
    liveUrl: 'https://career-plex.vercel.app/',
    gitUrl: 'https://github.com/rajibdas51/CareerPlex',
  },
  {
    title: 'PropNest',
    description:
      'A property rental platform built with Next.js and React.js, featuring authentication, CRUD functionality, and Mapbox integration. Designed a responsive UI with Tailwind CSS and implemented Cloudinary for image management.',
    tags: [
      'Next.js',
      'MongoDB',
      'TailwindCss',
      'NextAuth.js',
      'Cloudinary',
      'React Share',
    ],
    imageUrl: PropNest,
    liveUrl: 'https://career-plex.vercel.app/',
    gitUrl: 'https://github.com/rajibdas51/CareerPlex',
  },
  {
    title: 'QuicPick',
    description:
      'QuickPick is an engaging MERN eCommerce platform, highlighting skills in MongoDB, Express.js, React, and Node.js. • Integrated PayPal for secure and hassle-free payment processing, ensuring a seamless shopping experience',
    tags: [
      'React',
      'Express.js',
      'MongoDb',
      'react-bootstrap',
      'Redux-toolkit',
    ],
    imageUrl: QuickPick,
    liveUrl: ' https://quickpick-aill.onrender.com/',
    gitUrl: 'https://github.com/rajibdas51/quickpick',
  },
  {
    title: 'Blogify',
    description:
      'It’s a feature-rich blog application using Next.js 13, MongoDB and Prisma, demonstrating proficiency in building modern and dynamic front-end experiences.',
    tags: ['React', 'Next.js', 'Prisma', 'Tailwind', 'SwiperJs'],
    imageUrl: Blogify,
    liveUrl: ' https://blogify-plum.vercel.app/',
    gitUrl: 'https://github.com/rajibdas51/blogify',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',

  'Express',

  'Framer Motion',
] as const;
