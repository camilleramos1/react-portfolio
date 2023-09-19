import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex justify-center items-center w-full h-20 px-4 full-footer'>
        <div>
            <div>
                <p className='text-darkbrown'>© Camille Ramos 2023</p>
                <p className='footer-link flex items-center pt-2'>
                  <a 
                    href='https://github.com/camilleramos1'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon-link'
                  >
                    <FaGithub size={20}/>
                  </a> 
                  <a 
                    href='https://www.linkedin.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon-link'
                  >
                    <FaLinkedin size={20}/>
                  </a>
                  <a 
                    href='https://twitter.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon-link'
                  >
                    <AiFillTwitterCircle size={20}/>
                  </a> 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer