import React from 'react'
import image from './../../assets/images/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ABOUTWHY as why } from '../../Config';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <section id='about' className='grid grid-cols-1 scroll-m-24 md:grid-cols-2 mx-auto px-4 my-20 w-[100%] md:w-[80%] justify-center md:justify-start gap-12'>
        <img className='w-auto' src={image} alt='Your About Image'/>
        <div>
            <h1 className=' text-4xl font-bold'>ABOUT US</h1>
            <div className='my-3 bg-blue-500 h-1 w-14'></div>
            <p className='my-8 font-thin text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h2 className='text-2xl mb-6'>Why Choose Us?</h2>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
            {why.map((item)=>{
                return <p key={item.id} className='ml-6 text-sm text-gray-500'>
                    <FontAwesomeIcon className='mr-2 text-blue-500' icon={faCheck}/>
                    {item.text}
                </p>
            })}
            </div>
        </div>
    </section>
  )
}

export default About