import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import nextJS from '../assets/nextjs.png';
import mySQL from '../assets/mysql-logo.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import { LiaFileDownloadSolid } from 'react-icons/lia'

import './portfolio.css'

const Experience = () => {
    const technologies = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-cyan-400'
        },
        {
            id: 5,
            src: nextJS,
            title: 'NextJs',
            style: 'shadow-neutral-400'
        },
        {
            id: 6,
            src: mySQL,
            title: 'mySQL',
            style: 'shadow-cyan-700'
        },
        {
            id: 7,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
        {
            id: 8,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },

    ]
  return (
    <div name='resume' className='w-full md:h-screen '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full resume-skills '>
            <div className='pt-6'>
                <p className='text-4xl font-bold p-2 inline experience-title'>Resume & Skills</p>
            </div>
            
            <a href="/Resume.pdf" download className='px-2 py-2 exp-resume-btn sm:w-1/2 md:w-1/4 lg:w-1/4 mt-5 flex items-center justify-center'>Download Resume <LiaFileDownloadSolid size={25}/></a>
            <p className='py-6 text-darkbrown resume-sub'>Some of the technologies I enjoy working with:</p>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 experience-grid'>
                {
                    technologies.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg experience-card ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience