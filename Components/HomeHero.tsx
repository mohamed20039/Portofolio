import React from 'react'
import Me from '@/public/Me.jpg'
import Image from 'next/image'

const HomeHero = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[130px]'>
        <Image src={Me} width={300} height={500} alt='My Picture' className='rounded-[100%]'/>
        <p className='mt-5 font-medium'>Hi, I'm Mohamed 👋</p>
        <p className='text-center text-xl font-medium md:w-[540px] mt-5'>Passionate Frontend Developer with a Focus on Creating Seamless User Experiences</p>
    </div>
  )
}

export default HomeHero