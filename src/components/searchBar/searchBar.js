// components/SearchBar.js
import React,{ useState } from 'react';
import "./searchBar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={handleSearch}>
        Search
        
        </button>
    </div>
  );
}

export default SearchBar;
