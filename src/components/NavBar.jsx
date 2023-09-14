import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoPic from '../assets/portfolio-light.png';
import './navbar.css';

export const NavBar = () => {
    // useState to trigger the bars or x icon
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'resume'
        },
        {
            id: 5,
            link: 'contact'
        },
    ];

  return (
    <div className='flex justify-between items-center w-full h-20 fixed px-4 my-nav'>
        <div>
            <img src={LogoPic} alt="logo" className='logoPic'/>
        </div>
        <ul className='hidden md:flex'>
            {links.map(({ id, link }) => (
                <li 
                    key={id}
                    className='px-4 cursor-pointer capitalize font-medium 
                    hover:scale-105 duration-200'>
                        {link}
                </li>
            ))} 
        </ul>
        <div 
            onClick={() => setNav(!nav)} 
            className='cursor-pointer pr-4 z-10 md:hidden small-screen-text'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  small-screen-list'>
        {links.map(({ id, link }) => (
                <li 
                    key={id}
                    className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        {link}
                </li>
            ))} 
        </ul>
        )}
    </div>
  )
}

export default NavBar