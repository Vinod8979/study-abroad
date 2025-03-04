'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white shadow-md rounded-b-[10px]">
      <div className="container mx-auto py-3 px-4 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
            <Image
              src="/logo.png"
              alt="Logo"
              width={32} // Adjust the width as needed
              height={25} // Adjust the height as needed
              className="h-auto w-auto"
            />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link href="/#about" className="text-gray-800 hover:text-blue-600">About</Link>
            <Link href="#services" className="text-gray-800 hover:text-blue-600">Services</Link>
            <Link href="#events" className="text-gray-800 hover:text-blue-600">Events</Link>
            <Link href="#Contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/#" 
                className="text-gray-800 hover:text-blue-600 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/#about" 
                className="text-gray-800 hover:text-blue-600 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#services" 
                className="text-gray-800 hover:text-blue-600 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#events" 
                className="text-gray-800 hover:text-blue-600 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="#Contact" 
                className="text-gray-800 hover:text-blue-600 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;