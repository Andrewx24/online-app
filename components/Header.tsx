// components/Header.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import MobileNavbar from './MobileNavbar';
import Searchbar from '@/components/search/Searchbar';

const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
            </Link>
            <div className="hidden lg:flex flex-wrap mx-4">
              <Link href="/" className="text-white mx-2 hover:text-blue-500 transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="text-white mx-2 hover:text-blue-500 transition-colors duration-300">
                About
              </Link>
              <Link href="/contact" className="text-white mx-2 hover:text-blue-500 transition-colors duration-300">
                Contact
              </Link>
              <Link href="/store" className="text-white mx-2 hover:text-blue-500 transition-colors duration-300">
                Store
              </Link>
              <Link href="/store/cart" className="text-white mx-2 hover:text-blue-500 transition-colors duration-300 flex items-center">
                Cart <FaShoppingCart className="ml-1" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Searchbar />
          </div>
          <div className="hidden lg:flex items-end mt-4 lg:mt-0">
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
          <div className="lg:hidden">
            <MobileNavbar />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;


