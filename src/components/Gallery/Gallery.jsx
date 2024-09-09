import React from 'react'
import { GALLERY as gallery} from '../../Config'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { useState } from 'react';

const Gallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(gallery[1]);

    const openModal = (image) => {
        console.log(image)
        setSelectedImage(image);
        setModalIsOpen(true);
    };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <section id="gallery" className='flex flex-col justify-center text-center mx-auto bg-white py-20'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="pt-4 text-4xl font-bold">
            GALLERY
        </h2>
        <div className='mx-auto my-3 bg-blue-500 h-1 w-14'></div>
        <p className='font-thin text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
    </div>
    <div className='mt-16 gap-[1px]  grid grid-cols-1 w-[100%] md:w-[80%] mx-auto md:grid-cols-3 z-auto'>
        {gallery.map((item)=>
        <div key={item.id || item.smallImage} className='relative group'>
        <img
          src={item.smallImage}
          alt={item.alt || 'Gallery Image'}
        />
        <div className='absolute inset-0 flex justify-center items-center bg-blue-500 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform' onClick={() => openModal(item)}>
          <p className='text-white text-xl font-thin'>
            {item.title || 'Image Title'}
          </p>
        </div>
      </div>
        )}
    </div>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
        className="relative bg-white z-50 flex justify-center items-center"
        contentLabel="Modal"
        appElement={document.getElementById('root')}
      >
        <div className="bg-white p-6">
            <img src={selectedImage.largeImage} className="w-full" onClick={closeModal} />
        </div>
    </Modal>
    </section>
  )
}

export default Gallery