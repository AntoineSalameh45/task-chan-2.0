import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white font-semibold text-xl">Task-chan</Link>
        </div>
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
