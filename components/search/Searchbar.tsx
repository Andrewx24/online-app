import React from 'react';

const Searchbar = () => {
  return (
    <div> 
      <input type="text" placeholder="Search" className="p-2 border border-gray-300 rounded-lg" />
      <button className="bg-blue-500 text-white p-2 rounded-lg">Search</button>
    </div>
  );
}

export default Searchbar;
