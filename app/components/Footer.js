'use client'
import Link from 'next/link';
import { FaFacebookF, FaTimes, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useState, useEffect } from 'react';


const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // This ensures the year updates if the component stays mounted across year boundaries
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="pt-16 pb-8 px-6 lg:px-12 bg-stone-100">
      <div className='container max-w-9xl mx-auto px-6 lg:px-12'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Head Office</h3>
            <p className="text-gray-600 text-sm">
              CSB Study Abroad<br />
              Chandiwala Mansion - Level<br />
              123 Main Street<br />
              Dhaka, Bangladesh
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact US</h3>
            <p className="flex flex-col space-y-2">
              Phone: +880 123 456 7890<br />
              Email: info@csb.com
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <FaFacebookF className="text-white-600" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <FaTimes className="text-white-600" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <FaInstagram className="text-white-600" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <FaLinkedinIn className="text-white-600" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t pt-8">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm text-gray-600">
              © {currentYear} CSB. All rights reserved.
            </p>
            <div className="flex flex-wrap space-x-4 text-sm text-gray-600">
              <Link href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-blue-600">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;