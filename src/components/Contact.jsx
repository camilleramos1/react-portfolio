import React, { useState } from 'react';
import './portfolio.css';

const Contact = () => {

    const [inputError, setInputError] = useState()
    const [nameInput, setInput] = useState()
    const [emailInput, setEmailInput] = useState()
    const [emailInputError, setEmailInputError] = useState()

    function handleInputChange(event) {
        if (event.target.name === 'name') {
            setInput(event.target.value)
        } 
        if (event.target.name === 'email') {
            setEmailInput(event.target.value)
        }
    }

  function inputHandler() {
    if (!nameInput){
        setInputError('*This field is required')
    } else {
        setInputError('')
    }
    if (!emailInput) {
        setEmailInputError('*This field is required')
    } else {
        setEmailInputError('')
    }
  }  

  return (
    <div name="contact" className='w-full h-screen p-4 full-contact'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline contact-title'>Contact</p>
                <p className='py-6 text-darkbrown font-medium'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/7391dd29-5a2f-4903-91ad-a53f19376f0c" method="POST" className='flex flex-col w-full md:w-1/2'> 
                    <input type="text" value={nameInput} name="name" placeholder='Enter your name' 
                    className='p-2 rounded-md text-darkbrown focus:outline-none' onMouseLeave={inputHandler} onChange={handleInputChange}/>
                    <p className='required'>{inputError}</p>

                    <input type="email" value={emailInput} name="email" placeholder='Enter your email' 
                    className='p-2 my-4 rounded-md text-darkbrown focus:outline-none'/>
                    <p className='required'>{emailInputError}</p>

                    <textarea name="message" rows="10" placeholder="Write your message here" className='p-2 border-2 rounded-md text-darkbrown 
                    focus:outline-none'></textarea>

                    <button className='text-darkbrown px-6 py-3 my-8 mx-auto flex items-center rounded-md 
                    hover:scale-110 duration-300 submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact