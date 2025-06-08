import React from 'react';
import { Grid3X3, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 text-sm">
      <div className="flex space-x-4">
        <a href="#" className="text-gray-700 hover:underline transition-all duration-200">
          About
        </a>
        <a href="#" className="text-gray-700 hover:underline transition-all duration-200">
          Store
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-700 hover:underline transition-all duration-200">
          Gmail
        </a>
        <a href="#" className="text-gray-700 hover:underline transition-all duration-200">
          Images
        </a>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200">
          <Grid3X3 size={20} className="text-gray-700" />
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-200 font-medium">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;