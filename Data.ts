import ReactCommerce from '/public/React E-Commerce.png';
import Translator from '/public/Translator.png';
import LifePulse from '/public/LifePulse.png';
import Zoophere from '/public/Zoophere.png';
import { StaticImageData } from 'next/image';
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
import React from '@/public/Skills Images/React.png'

type ImageName = 'ReactCommerce' | 'Translator' | 'LifePulse' | 'Zoophere';

const images: Record<ImageName, StaticImageData> = {
  ReactCommerce,
  Translator,
  LifePulse,
  Zoophere,
};

type SkillName = "HTML" | "CSS" | "Javascript" | "React" | "Tailwind" | "Sass" | "Firebase" | "Git" | "Vercel" | "PostMan" | "Figma";

const skillImages: Record<SkillName, StaticImageData> = {
  HTML,
  CSS,
  Javascript,
  Tailwind,
  Sass,
  Firebase,
  Git,
  PostMan,
  Figma,
  Vercel,
  React,
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
      links: 'https://Zoophere.vercel.app',
      stacks: 'ReactJS, Modular-Css, React-Router,Git, Vercel'
    },
    {
      title: 'LifePulse',
      description: 'Lifepulse is a website that enables direct connections between blood donors and hospitals. Although it uses dummy data for hospital information due to the unavailability of online APIs, Lifepulse streamlines the blood donation process, facilitating efficient contributions to patient well-being.',
      image: 'LifePulse',
      links: 'https://Zoophere.vercel.app',
      stacks: 'React,Next-UI,Tailwind-CSS,React-Router,Git,Vercel'
    },
    {
      title: 'Zoophere',
      description: 'Zoophere is a dynamic website that uses HTML, CSS, JavaScript, and the GBIF API to showcase diverse species from around the world.',
      image: 'Zoophere',
      links: 'https://Zoophere.vercel.app',
      stacks: 'HTML,CSS,JS,GBIF API,Git,Vercel'
    },
    {
      title: 'Translator',
      description: 'The Translator website is a user-friendly platform built with HTML, CSS, JavaScript, and the MyMemory API. It allows users to easily translate text between different languages.',
      image: 'Translator',
      links: 'https://Zoophere.vercel.app',
      stacks: 'HTML,CSS,JS,Mymemory API,Git,Vercel'
    },
    {
      title: 'Translator',
      description: 'The Translator website is a user-friendly platform built with HTML, CSS, JavaScript, and the MyMemory API. It allows users to easily translate text between different languages.',
      image: 'Translator',
      links: 'https://Zoophere.vercel.app',
      stacks: 'HTML,CSS,JS,Mymemory API,Git,Vercel'
    },
  ] as const;
  export const skills = [
    {
      image: 'HTML',
    },
    {
      image: 'CSS',
    },
    {
      image: 'Javascript',
    },
    {
      image: 'React',
    },
    {
      image: 'Tailwind',
    },
    {
      image: 'Sass',
    },
    {
      image: 'Firebase',
    },
    {
      image: 'Git',
    },
    {
      image: 'Vercel',
    },
    {
      image: 'PostMan',
    },
    {
      image: 'Figma',
    }
  ] as const;
export const getProjectImage = (imageName: ImageName) => images[imageName];
export const getSkillImage = (skillName: SkillName) => skillImages[skillName];
