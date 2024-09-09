import React from 'react'
import { SERVICES as services } from '../../Config'
import Feature from '../Features/Feature/Feature'
const Services = () => {
  return (
    <div id='services' className='bg-gradient-to-r from-blue-500 to-blue-400 py-24 flex flex-col justify-center text-center mx-auto text-gray-100'>
        <h1 className='text-4xl font-bold'>OUR SERVICES</h1>
        <div className='mx-auto my-3 bg-gray-100 h-1 w-16'></div>
        <p className='text-gray-200 mx-10 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        <div className='grid grid-cols-1 mt-10 gap-6 md:grid-cols-2 lg:grid-cols-3 w-[100%] md:w-[80%] mx-auto px-4'>
            {services.map((item, id)=>
            <div className='px-3 py-4' key={id}>
                <Feature icon={item.icon} title={item.name} text={item.text}/> 
            </div>
            )}
        </div>
    </div>
  )
}

export default Services