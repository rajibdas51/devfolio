'use client';
import React, { useEffect } from 'react';
import Profile from '@/public/profile.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id='home'
      className='mb-28 w-[50rem] md:max-w-[50rem] text-center sm:mb-0 flex flex-col items-center justify-center scroll-mt-[100rem]'
    >
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <Image
            className='rounded-full h-24 w-24 border-[0.10rem] border-white object-cover shadow-xl'
            src={Profile}
            alt='Profile photo'
            width={192}
            height={192}
            quality={95}
            priority={true}
          />
        </motion.div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Rajib,</span> a passionate{' '}
        <span className='font-bold'>full-stack developer.</span> I enjoy solving
        problems and building{' '}
        <span className='italic'>interactive web apps</span>. My focus is{' '}
        <span className='underline'>React (Next.js) and express</span>.
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me
          <BsArrowRight className='opacity-80 group-hover:translate-x-1 transition' />{' '}
        </Link>

        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href='/Resume.pdf'
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <a
          className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://www.linkedin.com/in/rajib-chandra-das/'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://github.com/rajibdas51/'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
