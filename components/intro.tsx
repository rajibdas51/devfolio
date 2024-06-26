'use client';
import React from 'react';
import Profile from '@/public/profile.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 flex flex-col items-center justify-center'>
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

      <motion.p
        className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Rajib.</span> I'm a{' '}
        <span className='font-bold'>full-stack developer</span> with{' '}
        <span className='font-bold'>1.5 years</span> of experience. I enjoy
        building <span className='italic'>interactive web apps</span>. My focus
        is <span className='underline'>React (Next.js) and express</span>.
      </motion.p>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        >
          Contact Me
          <BsArrowRight className='opacity-80 group-hover:translate-x-1 transition' />{' '}
        </Link>

        <a
          href='/cv.pdf'
          className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 active:scale-105 transition border-black/10'
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-70 group-hover:translate-y-1 transition' />
        </a>
        <a
          href='https://www.linkedin.com/in/rajib-chandra-das'
          target='blank'
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full  focus:scale-[1.15]  hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10'
        >
          <BsLinkedin />
        </a>

        <a
          href='https://github.com/rajibdas51'
          target='blank'
          className='
          bg-white
          p-4
          text-gray-700
          items-center
          gap-2
          rounded-full  focus:scale-[1.15]  hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
