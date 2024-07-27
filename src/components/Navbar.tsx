import React from 'react';
import 'tailwindcss/tailwind.css';
import { MenuIcon } from '@heroicons/react/solid'; // Add Heroicons for menu icon

const Navbar: React.FC<{ onOpenSidebar: () => void }> = ({ onOpenSidebar }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between lg:hidden">
      <button onClick={onOpenSidebar} className="text-white">
        <MenuIcon className="w-6 h-6" />
      </button>
      <h1 className="text-xl font-bold">Recommendation</h1>
    </nav>
  );
};

export default Navbar;
