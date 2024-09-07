import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id='#' className="w-full bg-center bg-no-repeat bg-cover bg-[url('http://localhost:5173/src/images/intro-bg.jpg')]">
        <div className='bg-black bg-opacity-20'>
        <div className='px-4 pt-80 pb-52 max-w-4xl mx-auto'>
            <div className=' text-white text-center flex flex-col items-center gap-10'>
            <h1 className='text-7xl font-extrabold max-w-3xl'>WE ARE A LANDING PAGE </h1>
            <p className='text-xl font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum</p>
            <button className="py-4 px-8 rounded-full text-lg bg-blue-500 hover:bg-indigo-500 transition-all duration-300 ease-in-out">
                <Link to="#features">
                    Learn more
                </Link>
            </button>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Header;