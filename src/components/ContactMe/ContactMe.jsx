import React from 'react';
import { useForm } from 'react-hook-form';
import { Contact } from '../../Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const ContactMe =() => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted Successfully")
  };

  return (
    <div id='contact' className='bg-gradient-to-r from-indigo-500 to-blue-400 pt-28 pb-14'>
        <div className='mx-auto mb-10 text-white px-4 grid grid-cols-1 w-[100%] md:w-[80%] md:grid-cols-3 '>
            <div className='md:col-span-2'>
                <div className='pb-12'>
                    <h1 className='font-bold text-4xl'>GET IN TOUCH</h1>
                    <div className='my-3 bg-gray-300 opacity-35 h-1 w-12'></div>
                    <h2 className='opacity-70 '>Please fill out the form below to send us an email and we will get back to you as soon as possible.</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col md:flex-row'>
                    <div className='mx-0 md:mr-4 mb-4 w-full md:w-1/2'>
                    <input
                        className='mb-1 px-2 py-1 w-full border-[1px] text-black border-gray-200 focus:border-gray-400 focus:outline-none'
                        {...register("name", { required: true })}
                        id="name"
                        type="text"
                        placeholder="Name"
                        />
                    {errors.name && <p className='text-red-800 w-full'>Name is required</p>}
                    </div>
                    <div className='mx-0 md:ml-4 mb-4 w-full md:w-1/2'>
                    <input
                        className='mb-1 px-2 py-1 text-black w-full border-[1px] border-gray-200 focus:border-gray-400 focus:outline-none'
                        {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                        id="email"
                        type="email"
                        placeholder="Email"
                        />
                    {errors.email && <p className='text-red-800 w-full'>Invalid email format</p>}
                    </div>
                    </div>
                    <div className='mb-10'> 
                    <textarea
                        className='w-full h-24 px-2 py-1 text-black border-[1px] border-gray-200 focus:border-gray-400 focus:outline-none'
                        {...register("message", { required: true })}
                        id="message"
                        placeholder="Message"
                        />
                    {errors.message && <p className='text-red-800'>Message is required</p>}
                    </div>
                    <button className='mb-12 px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out' type="submit">SEND MESSAGE</button>
                </form>
            </div>
            <div className='lg:ml-20 px-8 text-opacity-75'>
                <h3 className='mt-16 text-xl font-thin mb-8'>Contact Info</h3>
                <p className='text-sm my-4'><FontAwesomeIcon className='mr-2' icon={faMapMarker} color='white'/> Address</p>
                <p className='text-sm mb-6 text-opacity-60 text-white'>{Contact.address}</p>
                <p className='text-sm my-4'><FontAwesomeIcon icon={faPhone} className='mr-2' color='white'/> Mobile No.</p>
                <p className='text-sm mb-6 text-opacity-60 text-white'>{Contact.phone}</p>
                <p className='text-sm my-4'><FontAwesomeIcon icon={faEnvelope} className='mr-2' color='white'/> Email</p>
                <p className='text-sm mb-6 text-opacity-60 text-white'>{Contact.email}</p>
            </div>
        </div>
        <div className='flex justify-center mx-auto w-full md:w-[80%] border-t-2 border-gray-300 border-opacity-30 pt-12'>
            <Link to='https://www.facebook.com/'>
                <FontAwesomeIcon className='mx-3 p-3 w-6 h-6 rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-[#608dfd]' icon={faFacebookF} color='white'/>
            </Link>
            <Link to='https://x.com/?lang=en'>
                <FontAwesomeIcon className='mx-3 p-3 w-6 h-6 rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-[#608dfd]' icon={faTwitter} size="lg" color="white" />
            </Link>
            <Link to='https://www.instagram.com/'>
                <FontAwesomeIcon className='mx-3 p-3 w-6 h-6 rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-[#608dfd]' icon={faInstagram} size="lg" color="white" />
            </Link>
        </div>
    </div>
  );
}

export default ContactMe;