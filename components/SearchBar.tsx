'use client';
import { useState, useEffect } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [content, setContent] = useState([
    "This is some example text.",
    "Feel free to search for any word within this text.",
    "Try searching for 'example' or 'search'."
  ]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    highlightText(query);
  };

  const highlightText = (query) => {
    const elements = document.querySelectorAll('.searchable-content');
    elements.forEach(element => {
      const regex = new RegExp(`(${query})`, 'gi');
      element.innerHTML = element.textContent.replace(regex, '<span class="bg-yellow-300">$1</span>');
    });
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <form onSubmit={handleSearch}>
        <div className="flex items-center border-b border-secondary py-2">
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
      <div className="mt-4">
        {content.map((text, index) => (
          <p key={index} className="searchable-content">{text}</p>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
