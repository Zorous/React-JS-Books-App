import React, { useEffect, useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';

import './SearchForm.css';

function SearchForm() {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    let tempSearchTerm = searchText.current.value.trim();
    if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
      setSearchTerm("the lost world");
      setResultTitle('Please type something ...')
    }
    else {
      setSearchTerm(searchText.current.value);
    }
    navigate("book");

  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form'>
          <form className='search-form-elem flex flex-sb bg-white'
            onSubmit={handleSubmit}>
            <input type={"text"} className="form-control" placeholder='Search ...'
              ref={searchText} />
            <button type='submit' className='flex flex-c'
              onClick={handleSubmit}>
              <FaSearch className='search-icon text-blue' size={32} />
            </button>
          </form>
          <button className='search-icon-sm'>
          <FaSearch className='text-white'  size={32} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchForm