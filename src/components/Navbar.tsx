import React from 'react';
import Link from 'next/link';

const Navbar= () => {
  return (
    <nav className="bg-white shadow-lg absolute top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                AI Platform
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/Message" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Message
            </Link>
            <Link href="/Mail" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Mail
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;