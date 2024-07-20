'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="text-white">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center">
          <Link href="/" className="text-white py-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="text-white py-2" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/contact" className="text-white py-2" onClick={toggleMenu}>
            Contact
          </Link>
          <Link href="/store" className="text-white py-2" onClick={toggleMenu}>
            Store
          </Link>
          <Link href="/store/cart" className="text-white py-2 flex items-center" onClick={toggleMenu}>
            Cart <FaShoppingCart className="ml-1" />
          </Link>
          <Link href="/sign-in" className="text-white py-2" onClick={toggleMenu}>
            Sign In
          </Link>
          <Link href="/sign-up" className="text-white py-2" onClick={toggleMenu}>
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
