import React from 'react'
import {TbSend} from 'react-icons/tb'

const Contact = () => {
    return (
      <div className='w-full h-screen grid place-content-center gap-5'>
        <h1 className='text-2xl sm:text-4xl font-semibold mb-24 text-center'>My <span className='text-sky-500'>Contact</span></h1>
        <div className='text-center grid grid-cols-2 grid-rows-2 gap-4'>
          <input type="text" placeholder='Name...' className='row-start-1 col-start-1 w-96 p-2 rounded-md'/>
          <input type="text" placeholder='Email...' className='row-start-1 col-start-2 p-2 rounded-md'/>
          <input type="text" placeholder='Your Message...' className='row-start-2 col-span-2 p-2 rounded-md'/>
          <button className="flex justify-center items-center bg-white text-black p-2 rounded-sm row-start-3 col-span-2 gap-3">Send Message<TbSend /></button>
        </div>
      </div>
    );
  };
  
  export default Contact;