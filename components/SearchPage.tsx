'use client';
import { useState } from "react";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const data = [
    "Next.js is a React framework",
    "Tailwind CSS is a utility-first CSS framework",
    "Highlighting words is fun",
    "Global search bar component"
  ];

  const handleSearch = (query) => {
    if (query.length > 0) {
      const regex = new RegExp(`(${query})`, "gi");
      const newResults = data.map((item) => {
        return item.replace(regex, "<mark>$1</mark>");
      });
      setResults(newResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="mt-4 space-y-2">
        {results.map((result, index) => (
          <div
            key={index}
            className="p-2 border border-gray-300 rounded-lg"
            dangerouslySetInnerHTML={{ __html: result }}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
