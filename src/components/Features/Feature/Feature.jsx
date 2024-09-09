import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faPaperclip, faCoffee, faHeart, faStar, faCheckCircle, faFile, faGlobe } from '@fortawesome/free-solid-svg-icons';
// Assuming you're using React Icons for convenience, you can import it as well

const iconMap = {
    faCoffee,
    faPaperclip,
    faCar,
    faHeart,
    faCheckCircle,
    faFile,
    faGlobe,
    faStar,
  };

const Feature = ({cmp, icon, title, text}) => {
    const iconComponent = iconMap[icon]
  return (
    <div className='flex flex-col'>
        <div>
            <FontAwesomeIcon size='2x' className={`bg-gradient-to-r from-indigo-400 to-blue-400 ${cmp === 'features' ? 'w-10 h-10 p-7' : 'w-11 h-11 p-9'} rounded-full shadow-md`} icon={iconComponent} color='white' />
            <h2 className='text-xl font-semibold mt-8 mb-3'>{title}</h2>
            <p className={`px-5 font-thin text-center tracking-tight ${cmp === 'features' ? 'text-gray-500' : 'text-gray-200'}`}>{text}</p>
        </div>
    </div>
  )
}

export default Feature