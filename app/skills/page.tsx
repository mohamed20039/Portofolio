import React from 'react'
import HTML from '@/public/Skills Images/Html.png'
import CSS from '@/public/Skills Images/CSS.png'
import Javascript from '@/public/Skills Images/Javascript.png'
import Tailwind from '@/public/Skills Images/Tailwind.png'
import Sass from '@/public/Skills Images/Sass.png'
import Firebase from '@/public/Skills Images/Firebase.png'
import Git from '@/public/Skills Images/Git.png'
import PostMan from '@/public/Skills Images/Postman.png'
import Figma from '@/public/Skills Images/Figma.png'
import Vercel from '@/public/Skills Images/Vercel.png'
import { skills } from '@/Data'
import Image from 'next/image'
import { getSkillImage } from '@/Data';


const Skills = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center min-h-screen'>
      <div className='flex flex-col text-center sm:px-0'>
        <h1 className='text-2xl sm:text-4xl font-semibold mb-10 sm:mb-52'>My <span className='text-sky-500'>Skills</span></h1>
        <div className='flex flex-wrap justify-center items-center gap-4'>
          {
            skills.map((skill, index) => (
              <div key={index} className='bg-white p-6 rounded-full h-16 w-16 sm:h-24 sm:w-24 flex items-center justify-center overflow-hidden mb-10 sm:mb-48'>
                <Image src={getSkillImage(skill.image)} width={50} height={50} alt='Skill Images' objectFit='contain'/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills