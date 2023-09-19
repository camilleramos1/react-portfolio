import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex justify-center items-center w-full h-20 px-4 full-footer'>
        <div>
            <div>
                <p className='text-darkbrown'>Camille Ramos 2023</p>
                <p className='footer-link flex items-center'><FaGithub size={20}/> <FaLinkedin size={20}/></p>
            </div>
        </div>
    </div>
  )
}

export default Footer