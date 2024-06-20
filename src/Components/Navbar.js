import React, { useState } from 'react';
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


function Navbar() {
    const [button , setButton] = useState(true)
    const toggleMenu = () => {
        setButton(!button);
      }
    

    return (
        <div>
      <nav className='top-0 z-10 p-5 bg-white shadow-md fixed right-0 left-0 justify-between items-center'>
        <span className='text-2xl font-bold cursor-pointer float-left'>Sourabh Pargai</span>
        <div className='md:hidden float-right'>
          {button ? (
            <IoReorderThreeSharp className='text-4xl cursor-pointer mx-2' onClick={toggleMenu} />
          ) : (
            <IoClose className='text-4xl cursor-pointer mx-2' onClick={toggleMenu} />
          )}
        </div>
        <ul className={`float-right md:flex md:items-center md:pl-0 pl-7 w-full md:w-auto py-8 md:py-0 top-[80px] absolute left-0 bg-white md:opacity-100 md:visible md:relative md:top-auto transition-all ease-in duration-500 ${button ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
          <li className='mx-2 lg:mx-4'>
            <a href="/" className='text-lg lg:text-xl hover:text-cyan-500 duration-500'>About</a>
          </li>
          <li className='mx-2 lg:mx-4'>
            <a href="#projects" className='text-lg lg:text-xl hover:text-cyan-500 duration-500'>Projects</a>
          </li>
          <li className='mx-2 lg:mx-4'>
            <a href="#skills" className='text-lg lg:text-xl hover:text-cyan-500 duration-500'>Skills</a>
          </li>
          <li className='mx-2 lg:mx-4'>
            <a href="#achieve" className='text-lg lg:text-xl hover:text-cyan-500 duration-500'>Achievements</a>
          </li>
          <li className='mx-2 lg:mx-4'> 
            <a href="#contact" className='text-lg lg:text-xl hover:text-cyan-500 duration-500'>Contact</a>
          </li>
        </ul>
      </nav>
        </div>
    );
}

export default Navbar;
