'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
   <motion.section
  ref={ref}
  className='mb-28 lg:max-w-[50rem] w-full  text-center leading-8 sm:mb-40 scroll-mt-28'
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.175 }}
  id='about'
>
  <SectionHeading>About me</SectionHeading>
  <p className='mb-3'>
    Hello, I'm Rajib, a{' '}
    <span className='font-medium'>full-stack developer</span> with a BSc in{' '}
    <span className='font-medium'>Computer Science & Engineering</span> and 3
    years of freelance experience building web applications and websites for
    clients around the world. My focus is the{' '}
    <span className='font-medium'>backend</span>, and{' '}
    <span className='italic'>my favorite part of programming</span> is
    problem-solving. I <span className='underline'>love</span> the feeling of
    finally figuring out a solution to a hard problem.
  </p>

  <p className='mb-3'>
    My core stack is{' '}
    <span className='font-medium'>
      Node.js, Express.js, MongoDB, React, and Next.js
    </span>
    . I'm also comfortable with TypeScript, SQL, and Prisma, and I build
    WordPress sites when a project needs it. Working directly with clients has
    taught me how to understand their needs, communicate clearly, and deliver
    on time. I'm currently learning AI development, and I'm always looking to
    pick up new technologies. I'm looking for a{' '}
    <span className='font-medium'>full-time role</span> as a software
    developer, ideally one where I can combine my technical skills with working
    closely with clients and teams.
  </p>

  <p>
    <span className='italic'>When I'm not coding</span>, I enjoy painting,
    watching movies, and{' '}
    <span className='font-medium'>learning new things</span>. I'm excited about
    the possibilities in web development and want to contribute to projects
    that make a real difference.
  </p>
</motion.section>
  );
}
