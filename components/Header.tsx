import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
          <Link href="/"> 
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          </Link>
            <Link href="/" className='mx-4 text-white hover:text-blue-500 transition-colors duration-300'> 
            Home 
            </Link>
            <Link href="/about" className=' mx-4 text-white hover:text-blue-500 transition-colors duration-300'>
            About
            </Link>
           <Link href="/contact" className='mx-4 text-white hover:text-blue-500 transition-colors duration-300'>
           Contact
           </Link>
           <Link href="/store" className='mx-4 text-white hover:text-blue-500 transition-colors duration-300'>
           Store
           </Link>
           <Link href="/store/cart" className='mx-4 text-white hover:text-blue-500 transition-colors duration-300'> 
            Cart <FaShoppingCart />
           </Link>
          </div>
          <div className="flex items-end">
            <Link href="/sign-in" passHref>
              <span className="text-white mx-2 hover:text-blue-500 transition-colors duration-300">
                Sign In
              </span>
            </Link>
            <Link href="/sign-up" passHref>
              <span className="text-white mx-2 hover:text-blue-500 transition-colors duration-300">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
