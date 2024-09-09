import React from 'react'
import { TESTIMONIALS as testimonials } from '../../Config'
const Testimonials = () => {
  return (
    <section id="testimonials" className='flex flex-col justify-center text-center mx-auto py-20 bg-gray-100'>
        <h2 className="pt-4 text-4xl font-bold">
            WHAT OUR CLIENTS SAY
        </h2>
        <div className='mx-auto my-3 bg-blue-500 h-1 w-14'></div>
        <div className='my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] lg:w-[70%] mx-auto gap-8 px-8'>
            {testimonials.map((item, id)=>
                <div key={id} className='flex gap-3'>
                    <img className='w-16 h-16 rounded-full' src={item.img}/>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-400 font-thin text-sm text-start italic'>"{item.text}"</p>
                        <p className='text-start font-semibold text-gray-600 text-sm'>- {item.name}</p>
                    </div>
                </div>
            )}
        </div>
    </section>
  )
}

export default Testimonials