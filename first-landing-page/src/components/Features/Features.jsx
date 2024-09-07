import React from 'react'
import { FEATURES as features } from '../../Config'
import Feature from './Feature/Feature'

const Features = () => {
  return (
    <div id="features" className='flex flex-col justify-center text-center mx-auto bg-gray-100'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="pt-4 text-4xl font-bold">
                FEATURES
            </h2>
            <div className='mx-auto my-3 bg-blue-500 h-1 w-14'></div>
            <div className='mt-16 mb-4 grid grid-cols-2 gap-4 md:grid-cols-4'>
                {features.map((item, id)=>{
                    return <Feature key={id} icon={item.icon} title={item.title} text={item.text}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Features