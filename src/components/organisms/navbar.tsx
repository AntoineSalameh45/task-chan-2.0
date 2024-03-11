/**
 * Navbar Component
 * 
 * This component represents the navigation bar of the application.
 * It includes links to different pages of the application.
 */

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-white font-semibold text-xl">Task-chan</Link>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center">
          <Link href="/tasks/active" className="text-white mr-4">Active</Link>
          <Link href="/tasks/completed" className="text-white mr-4">Completed</Link>
          <Link href="/tasks/details" className="text-white">Details</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;