import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="px-6 py-3 border-b border-gray-300">
        <p className="text-gray-600 text-sm">India</p>
      </div>
      <div className="px-6 py-3 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
          <a href="#" className="text-gray-600 hover:underline transition-all duration-200">
            Advertising
          </a>
          <a href="#" className="text-gray-600 hover:underline transition-all duration-200">
            Business
          </a>
          <a href="#" className="text-gray-600 hover:underline transition-all duration-200">
            How Search works
          </a>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
          <a href="#" className="text-gray-600 hover:underline transition-all duration-200">
            Privacy
          </a>
          <a href="#" className="text-gray-600 hover:underline transition-all duration-200">
            Terms
          </a>
          <a href="#" className="text-gray-600 hover:underline transition-all duration-200">
            Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;