import { projects } from '@/Data';
import Image from 'next/image';
import React from 'react'
import ReactCommerce from '/public/React E-Commerce.png';
import Translator from '/public/Translator.png';
import LifePulse from '/public/LifePulse.png';
import Zoophere from '/public/Zoophere.png';
import { getProjectImage } from '@/Data';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { icons } from 'react-icons';
import Link from 'next/link';
interface Project {
    title: string;
    description: string;
    image: string;
  }
  
const Projects = () => {
  return (
    <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center text-sm gap-4'>
        {projects.map((project, index) => (
          <div key={index} className='bg-white grid text-black w-[320px] p-4 rounded-md'>
            <div className="image-container">
              <Image src={getProjectImage(project.image)} alt={project.title} width={300} height={300} className='mx-auto mt-3'/>
            </div>
            <div className="text-container">
              <div className='flex justify-between items-center'>
                <p className='mt-2 font-bold'>{project.title}</p>
                <Link href={project.links} target='_blank'><BsBoxArrowUpRight /></Link>
              </div>
              <p className="mt-4">{project.description}</p>
              <p className="mt-4 text-xs font-semibold"><span className='text-sky-700'>Stacks/Tools: </span>{project.stacks}</p>
            </div>
          </div>
        ))}
    </div>

  )
}

export default Projects;