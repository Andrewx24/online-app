import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-gray-800 p-4 shadow-inner'>
      <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center text-white'>
        <Link href='/' passHref>
          <Image 
            src='/logo.png' 
            alt='logo' 
            width={50} 
            height={50} 
            className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'
          />
        </Link>
        <div className='mt-4 sm:mt-0 text-lg text-center sm:text-left'>
          &copy; 2024 My Website
        </div>
      </div>
    </footer>
  );
}

export default Footer;
