import React from 'react';
import Profile from '@/public/profile.png';
import Image from 'next/image';
export default function Intro() {
  return (
    <section className='flex items-center justify-center'>
      <div>
        <Image
          className='rounded-full h-24 w-24 border-[0.10rem] border-white object-cover shadow-xl'
          src={Profile}
          alt='Profile photo'
          width={192}
          height={192}
          quality={95}
          priority={true}
        />
      </div>
    </section>
  );
}
