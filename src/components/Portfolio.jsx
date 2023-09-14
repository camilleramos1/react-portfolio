import React from 'react'
import superGreen from '../assets/portfolio/supergreen-pic.png';
import jate from '../assets/portfolio/jate.png';
import medtrack from '../assets/portfolio/medtrack-pic.png';
import socialApi from '../assets/portfolio/social-api.png';
import portfolio from '../assets/portfolio/portfolioscreenshot.png';
import eCommerce from '../assets/portfolio/e-commerce.png';
import './portfolio.css'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: superGreen,
      href: 'https://jenevaray.github.io/SuperGreen/',
    },
    {
      id: 2,
      src: jate,
      href: 'https://serene-sea-17695-cca51c95e088.herokuapp.com/',
    },
    {
      id: 3,
      src: medtrack,
      href: 'https://limitless-sea-25303-7c8a3f9496d2.herokuapp.com/',
    },
    {
      id: 4,
      src: socialApi,
      href: 'https://drive.google.com/file/d/1NnpBLQxl88B7Qju-gI-EvWKy4tcKmDQ5/view',
    },
    {
      id: 5,
      src: portfolio,
      href: 'https://camilleramos1.github.io/my-portfolio/',
    },
    {
      id: 6,
      src: eCommerce,
      href: 'https://drive.google.com/file/d/1XvO4b8iJRO8SCDfPpmL7UsHxXLKF41sr/view',
    }
  ]
  return (
    <div name="portfolio" className='w-full md:h-screen portfolio-all'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline portfolio-title'>Portfolio</p>
          <p className='py-6 portfolio-sub'>Check out some of my work!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          portfolios.map(({ id, child, src, href }) => (
          <div key={id} className='shadow-md shadow-darkbrownsugar rounded-lg'>
            <img src={src} 
            alt="" 
            className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <a className='w-1/2 px-5 py-2 m-3 duration-200 hover:scale-105' href={href}>Demo</a>
              <a className='w-1/2 px-5 py-2 m-3 duration-200 hover:scale-105'>Code</a>
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