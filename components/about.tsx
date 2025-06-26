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
        Hello, I'm Rajib and I recently graduated with a degree in{' '}
        <span className='font-medium'>Computer Science & Engineering.</span> I
        have a deep passion for coding and problem-solving, with a focus on{' '}
        <span className='font-medium'>full-stack web development</span>.{' '}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className='font-medium'>
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript,sql and Prisma. I am always looking
        to learn new technologies. I am currently looking for a{' '}
        <span className='font-medium'>full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I find joy in
        expressing my creativity through painting, and I love spending my free
        time watching movies and{' '}
        <span className='font-medium'>learning new things</span>. I'm excited
        about the endless possibilities in the dynamic field of web development
        and am eager to contribute my skills to building extraordinary projects.{' '}
      </p>
    </motion.section>
  );
}
