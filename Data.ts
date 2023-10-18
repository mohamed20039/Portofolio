import ReactCommerce from '/public/React E-Commerce.png';
import Translator from '/public/Translator.png';
import LifePulse from '/public/LifePulse.png';
import Zoophere from '/public/Zoophere.png';
import { StaticImageData } from 'next/image';

type ImageName = 'ReactCommerce' | 'Translator' | 'LifePulse' | 'Zoophere';

const images: Record<ImageName, StaticImageData> = {
  ReactCommerce,
  Translator,
  LifePulse,
  Zoophere,
};


export const links = [
    {
      name: "Home",
      hash: "/",
    },
    {
      name: "About",
      hash: "/about",
    },
    {
      name: "Projects",
      hash: "/projects",
    },
    {
      name: "Skills",
      hash: "/skills",
    },
    {
      name: "Contact",
      hash: "/contact",
    },
  ] as const;
  export const projects = [
    {
      title: 'React E-Commerce',
      description: 'The React E-commerce Website is a sleek online store built with React, CSS, and React Router, providing a user-friendly shopping experience and seamless navigation between pages.',
      image: 'ReactCommerce',
      Link: 'Zoophere.vercel.app',
      stacks: 'ReactJS, Modular-Css, React-Router,Git, Vercel'
    },
    {
      title: 'LifePulse',
      description: 'Lifepulse is a website that enables direct connections between blood donors and hospitals. Although it uses dummy data for hospital information due to the unavailability of online APIs, Lifepulse streamlines the blood donation process, facilitating efficient contributions to patient well-being.',
      image: 'LifePulse',
      Link: 'Zoophere.vercel.app',
      stacks: 'React,Next-UI,Tailwind-CSS,React-Router,Git,Vercel'
    },
    {
      title: 'Zoophere',
      description: 'Zoophere is a dynamic website that uses HTML, CSS, JavaScript, and the GBIF API to showcase diverse species from around the world.',
      image: 'Zoophere',
      Link: 'Zoophere.vercel.app',
      stacks: 'HTML,CSS,JS,GBIF API,Git,Vercel'
    },
    {
      title: 'Translator',
      description: 'The Translator website is a user-friendly platform built with HTML, CSS, JavaScript, and the MyMemory API. It allows users to easily translate text between different languages.',
      image: 'Translator',
      Link: 'Zoophere.vercel.app',
      stacks: 'HTML,CSS,JS,Mymemory API,Git,Vercel'
    },
    {
      title: 'Translator',
      description: 'The Translator website is a user-friendly platform built with HTML, CSS, JavaScript, and the MyMemory API. It allows users to easily translate text between different languages.',
      image: 'Translator',
      stacks: 'HTML,CSS,JS,Mymemory API,Git,Vercel'
    },
  ] as const;
export const getProjectImage = (imageName: ImageName) => images[imageName];
