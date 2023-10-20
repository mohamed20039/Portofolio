import React from 'react'
import Me from '@/public/Me.jpg'
import Image from 'next/image'

const HomeHero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className='mt-40 text-center flex flex-col justify-center items-center'>
        <Image src={Me} alt="My Picture" width={300} height={500} className="rounded-full" />
        <p className="mt-5 font-medium">Hi, I'm Mohamed 👋</p>
        <p className="text-center text-2xl font-medium md:w-[540px] mt-5">
          Passionate Frontend Developer with a Focus on Creating Seamless User Experiences
        </p>
        </div>
    </div>
  );
};

export default HomeHero