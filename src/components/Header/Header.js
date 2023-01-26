import React from 'react'
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SeachForm/SearchForm';
import "./Header.css";


function Header() {
  return (
    <div className='holder'>
    <header className='header'>
    <Navbar />
    <div className='header-content flex flex-c text-center text-white '>
    <h2 className='header-title text-capitalize'>
    find your favorite book
    </h2>
    <br />
    <p className='header-text fs-18 fw-3'>
    lorem text
    </p>
    <SearchForm />
    </div>
    </header>
    </div>
  )
}

export default Header