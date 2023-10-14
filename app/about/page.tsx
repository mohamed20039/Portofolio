import React from 'react';
import Me from '@/public/Me.jpg';
import Image from 'next/image';

const About = () => {
  return (
    <div className='w-full h-screen flex flex-col md:flex-row justify-center items-center'>
      <div className='md:order-1'>
        <Image src={Me} width={300} height={500} alt='My Picture' className='rounded-md md:mr-6' />
      </div>
      <div className='flex flex-col items-center md:order-2'>
        <p className='text-center mt-6 md:w-[600px] md:text-2xl md:mr-16'>
          I'm a <span className='text-sky-400'>frontend developer</span> based in Somalia. I have a passion for creating beautiful and functional user interfaces, and I love bringing designer’s visions to life. As a frontend developer, I'm proficient in a variety of programming languages and tools, including HTML, CSS, JavaScript, and React. I've worked with a diverse range of projects.
        </p>
      </div>
    </div>
  );
};

export default About;