'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { MdLaunch } from 'react-icons/md';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  gitUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <section className='bg-gray-100 max-w-[55rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[26rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
        <div className='pt-4 pb-7 px-3 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
            {description}
          </p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 mt-2'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className='flex mt-6 gap-3 '>
            <a
              href={gitUrl}
              className='text-3xl transition-all hover:scale-110 hover:translate-x-1 hover:-translate-y-1 cursor-pointer'
            >
              <FaGithub />
            </a>
            <a
              href={liveUrl}
              className='text-3xl transition-all hover:scale-110 hover:translate-x-1 hover:-translate-y-1 cursor-pointer relative '
            >
              <MdLaunch />
            </a>
          </div>
        </div>

        <div className='flex flex col items-center justify-center'>
          <Image
            src={imageUrl}
            alt='Project I worked on'
            quality={95}
            className='absolute hidden sm:block top-8 -right-60 w-[35rem] h-[20rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-2
        group-hover:translate-y-2
        group-hover:-rotate-1

        group-even:group-hover:translate-x-2
        group-even:group-hover:translate-y-2
        group-even:group-hover:rotate-1

        group-even:right-[initial] group-even:-left-60'
          />
          <div className='flex mt-6 gap-3 hidden'>
            <a
              href={gitUrl}
              className='text-3xl transition-all hover:scale-110 hover:translate-x-1 hover:-translate-y-1 cursor-pointer'
            >
              <FaGithub />
            </a>
            <a
              href={liveUrl}
              className='text-3xl transition-all hover:scale-110 hover:translate-x-1 hover:-translate-y-1 cursor-pointer relative '
            >
              <MdLaunch />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
