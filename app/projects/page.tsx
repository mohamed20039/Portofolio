import { projects } from '@/Data';
import Image from 'next/image';
import React from 'react'
import ReactCommerce from '/public/React E-Commerce.png';
import Translator from '/public/Translator.png';
import LifePulse from '/public/LifePulse.png';
import Zoophere from '/public/Zoophere.png';
import { getProjectImage } from '@/Data';
interface Project {
    title: string;
    description: string;
    image: string;
  }
  
const Projects = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center min-h-screen'>
            {projects.map((project, index) => (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                <div key={index} className=''>
                <Image src={getProjectImage(project.image)} alt={project.title} width={200} height={200}/>
                <p>{project.title}</p>
                <p className="legend">{project.description}</p>
                <p>Stacks/Tools:{project.stacks}</p>
              </div>
              </div>
            ))}
    </div>

  )
}

export default Projects;