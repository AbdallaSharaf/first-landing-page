import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faPaperclip, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
// Assuming you're using React Icons for convenience, you can import it as well

const iconMap = {
    faCoffee,
    faPaperclip,
    faCar,
    faHeart,
  };

const Feature = ({icon, title, text}) => {
    const iconComponent = iconMap[icon]
  return (
    <div className='flex flex-col'>
        <div>
            <FontAwesomeIcon size='2x' className='bg-gradient-to-r from-indigo-400 to-blue-400 w-10 h-10 p-8 rounded-full shadow-md' icon={iconComponent} />
            <h2 className='text-xl font-semibold mt-8 mb-3'>{title}</h2>
            <p className='font-thin text-gray-500'>{text}</p>
        </div>
    </div>
  )
}

export default Feature