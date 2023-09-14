import React from 'react'
import './about.css'

const About = () => {
  return (
    <div name="about" className='w-full h-screen'>
      <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full about-me-all'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline about-me'>About Me</p>
        </div>

        <p className='text-xl mt-10'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, delectus molestiae magnam 
          fuga sed ex asperiores voluptatibus ipsa ipsam doloremque!
        </p>

        <br/>

        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Natus dignissimos non aperiam quo facilis, quas fugit molestias nulla adipisci corporis?
        </p>
      </div>
    </div>
  )
}

export default About