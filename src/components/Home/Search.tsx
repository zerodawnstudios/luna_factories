import { SearchIcon } from 'lucide-react';
import React from 'react';

const Search = () => {
  return (
    <div className="relative min-w-96 shadow-lg shadow-black/30 rounded-2xl overflow-hidden">
      <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-4" />
      <input type="text" className="w-full pl-12 py-3 outline-0" />
      <button className="px-4 text-white font-light h-full absolute right-0 top-1/2 -translate-y-1/2 bg-primary">
        SEARCH
      </button>
    </div>
  );
};

export default Search;
