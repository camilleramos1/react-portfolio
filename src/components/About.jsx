import React from 'react'
import './about.css'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen about-me-all'>
      <div  className='max-w-screen-lg px-4 pt-8 mx-auto flex flex-col justify-center w-full h-full '>
        <div className=' pt-6 sm:pb-4 sm:pt-10 about-me-title'>
          <p className='text-4xl font-bold inline about-me'>About Me</p>
        </div>
        <div className='about-me-sub'>
          <p className='text-xl mt-10 md:text-2xl lg:text-xl'>
            I'm Camille Ramos, a web developer with a passion for crafting digital experiences that are both visually appealing and functional. My journey into web development was sparked by a desire to channel my creativity into something tangible and useful. The prospect of creating websites and applications that not only look great but also provide value to users has been my driving force.
          </p>

          <br/>

          <p className='text-xl md:text-2xl lg:text-xl'>
          During my intensive six-month boot camp for full-stack web development, I had the opportunity to explore various aspects of web development. Among them, front-end development stood out as my true calling. There's something truly captivating about watching a website come to life as I transform design concepts into interactive, user-friendly interfaces.
          </p>

          <br/>

          <p className='text-xl md:text-2xl lg:text-xl'>
            Looking ahead, my aspirations in web development are ambitious. I envision myself as part of an inspiring team that fosters growth and innovation. My goal is to continually learn and evolve, creating web experiences that make a positive impact.
            I'm excited about the possibilities in web development and look forward to the journey ahead.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About