import React from 'react'
import superGreen from '../assets/portfolio/supergreen-pic.png';
import magicMania from '../assets/portfolio/magicmania.png';
import medtrack from '../assets/portfolio/medtrack-pic.png';
import socialApi from '../assets/portfolio/social-api.png';
import portfolio from '../assets/portfolio/portfolioscreenshot.png';
import eCommerce from '../assets/portfolio/e-commerce.png';
import { FaGithub, FaLaptop } from 'react-icons/fa'
import './portfolio.css'

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      src: superGreen,
      child: (
        <>
        SuperGreen
        </>
      ),
      deployed: 'https://jenevaray.github.io/SuperGreen/',
      code: 'https://github.com/JenevaRay/SuperGreen',
    },
    {
      id: 2,
      src: magicMania,
      child: (
        <>
        MagicMania 
        </>
      ),
      deployed: 'https://maniamagic-2b772cb3f9e0.herokuapp.com/',
      code: 'https://github.com/mayaj0yce/magicMania',
    },
    {
      id: 3,
      src: medtrack,
      child: (
        <>
        Medtrack
        </>
      ),
      deployed: 'https://limitless-sea-25303-7c8a3f9496d2.herokuapp.com/',
      code: 'https://github.com/Essence1987/medtrack',
    },
    {
      id: 4,
      src: socialApi,
      child: (
        <>
        Social Network API
        </>
      ),
      deployed: 'https://drive.google.com/file/d/1NnpBLQxl88B7Qju-gI-EvWKy4tcKmDQ5/view',
      code: 'https://github.com/camilleramos1/social-network-api',
    },
    {
      id: 5,
      src: portfolio,
      child: (
        <>
        My Previous Portfolio 
        </>
      ),
      deployed: 'https://camilleramos1.github.io/my-portfolio/',
      code: 'https://github.com/camilleramos1/my-portfolio',
    },
    {
      id: 6,
      src: eCommerce,
      child: (
        <>
        E-Commerce Back-end 
        </>
      ),
      deployed: 'https://drive.google.com/file/d/1XvO4b8iJRO8SCDfPpmL7UsHxXLKF41sr/view',
      code: 'https://github.com/camilleramos1/e-commerce-back-end',
    }
  ]
  return (
    <div name="portfolio" className='w-full md:h-screen portfolio-all'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline portfolio-title'>Portfolio</p>
          <p className='py-4 portfolio-sub'>Check out some of my work!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          projects.map(({ id, child, src, deployed, code }) => (
          <div key={id} className='shadow-md shadow-darkbrownsugar rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
            <p className={'text-xl items-center justify-center port-title  py-2'}>{child}</p>
            <div className='flex items-center justify-center port-btns' >
              <a className='w-1/2 px-5 py-2 m-3 duration-200 hover:scale-105 flex items-center demo-link' href={deployed}>Demo<FaLaptop size={20} className='port-icon'/></a>
              <a className='w-1/2 px-5 py-2 m-3 duration-200 hover:scale-105 flex items-center demo-link' href={code}>Code<FaGithub size={20} className='port-icon'/></a>
            </div>
          </div>
          ))
        }
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio