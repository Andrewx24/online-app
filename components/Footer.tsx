import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
  <footer className='bg-gray-800 p-4 shadow-inner'>
    <div className='container mx-auto flex justify-start items-tsart text-white'>
     <div className='flex space-x-4'>
        <Link href='/' passHref>
          <Image 
            src='/logo.png' 
            alt='logo' 
            width={50} 
            height={50} 
            className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'
          />
        </Link>
        <div className='text-lg'>
          &copy; 2024 My Website
          </div>
      </div>
    </div>


  </footer>
  )
}

export default Footer