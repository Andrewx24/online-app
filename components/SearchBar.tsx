'use client';
import { useState } from "react";


const  SearchBar =()=> {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here (e.g., redirect to a search results page or filter a list)
    console.log('Searching for:', query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-sm mx-auto">
      <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;