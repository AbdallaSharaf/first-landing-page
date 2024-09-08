import React from 'react'
import { TEAM as team } from '../../Config'
const Team = () => {
  return (
    <section id="team" className='flex flex-col justify-center text-center mx-auto bg-white py-20'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="pt-4 text-4xl font-bold">
            MEET THE TEAM
        </h2>
        <div className='mx-auto my-3 bg-blue-500 h-1 w-14'></div>
        <p className='font-thin text-lg text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-4 px-20 md:px-0 gap-10 mx-auto mt-16 w-[100%] md:w-[70%]'>
        {team.map((item)=>
        <div key={item.name} className='flex flex-col'>
            <img src={item.img}/>
            <h2 className='text-gray-800 mt-3 font-semibold text-lg'>{item.name}</h2>
            <p className='text-gray-400 font-thin'>{item.job}</p>
        </div>
        )}
    </div>
    </section>
  )
}

export default Team