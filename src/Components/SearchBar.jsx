import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); 
  };

  const clearSearch = () => {
    setQuery("");       
    onSearch("");          
  };


  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="What are you looking for?..."
        value={query}
        onChange={handleSearch}
      />

      {}
      {query && (
        <button id="search-close"
          onClick={clearSearch}         
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;