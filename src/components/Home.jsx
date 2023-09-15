import React from 'react';
import MainImage from '../assets/aboutme.png';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import './home.css'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full wholeHome'> 
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold homeTitle'>
                    I'm a Full Stack Developer
                </h2>
                <p className='py-4 max-w-md homeSub'>
                    Code Enthusiast and Evolving Developer
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className= 'group w-fit px-6 py-3 my-2 flex items-center rounded-md portBtn cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300 arrow'>
                          <HiOutlineArrowRight size={20} className=''/>
                        </span>
                    </Link>
                </div>
            </div>
            <div> 
                <img src={MainImage} alt="me" className='rounded-2xl mx-auto w-2/3 md:w-full profile-pic'/>
            </div>
        </div>
    </div>
  )
}

export default Home;