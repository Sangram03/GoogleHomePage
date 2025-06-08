import React, { useState } from 'react';
import { Search, Mic, Camera } from 'lucide-react';
import GoogleLogo from './GoogleLogo';

const SearchSection: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // In a real implementation, this would navigate to search results
      console.log('Searching for:', searchValue);
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <GoogleLogo />
      
      <form onSubmit={handleSearch} className="w-full max-w-xl mb-8">
        <div className={`relative flex items-center border rounded-full px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200 ${
          isFocused ? 'shadow-md border-transparent' : 'border-gray-300'
        }`}>
          <Search size={20} className="text-gray-400 mr-3" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="flex-1 outline-none text-base"
            maxLength={2048}
            autoComplete="off"
          />
          <div className="flex items-center space-x-3 ml-3">
            <button
              type="button"
              className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Search by voice"
            >
              <Mic size={20} className="text-gray-500" />
            </button>
            <button
              type="button"
              className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Search by image"
            >
              <Camera size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
      </form>

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <button 
          onClick={handleSearch}
          className="bg-gray-50 text-gray-700 px-6 py-3 rounded border border-gray-300 hover:border-gray-400 hover:shadow-sm transition-all duration-200 font-medium"
        >
          Google Search
        </button>
        <button className="bg-gray-50 text-gray-700 px-6 py-3 rounded border border-gray-300 hover:border-gray-400 hover:shadow-sm transition-all duration-200 font-medium">
          I'm Feeling Lucky
        </button>
      </div>

      <div className="mt-8 text-sm text-gray-600 text-center">
        <p>Google offered in: 
          <a href="#" className="text-blue-600 hover:underline ml-1">हिन्दी</a>
          <a href="#" className="text-blue-600 hover:underline ml-2">বাংলা</a>
          <a href="#" className="text-blue-600 hover:underline ml-2">తెలుగు</a>
          <a href="#" className="text-blue-600 hover:underline ml-2">मराठी</a>
          <a href="#" className="text-blue-600 hover:underline ml-2">தமிழ்</a>
          <a href="#" className="text-blue-600 hover:underline ml-2">ગુજરાતી</a>
          <a href="#" className="text-blue-600 hover:underline ml-2">ಕನ್ನಡ</a>
          <a href="#" className="text-blue-600 hover:underline ml-2">മലയാളം</a>
          <a href="#" className="text-blue-600 hover:underline ml-2">ਪੰਜਾਬੀ</a>
        </p>
      </div>
    </main>
  );
};

export default SearchSection;