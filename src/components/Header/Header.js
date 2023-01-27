import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SeachForm/SearchForm';
import "./Header.css";


function Header() {
  return (
    <>
    <div className='holder'>
    <header className='header'>
    <Navbar />
    <div className='header-content flex flex-c text-center text-white'>
    <h2 className='header-title text-capitalize'>
    find your favorite book
    </h2>
    <br />
    <p className='header-text fs-18 fw-3'>
    Have you always wanted to be part of a book club but never had the time?
    <br/> Now you can join Bookclub from the comfort of your own home!
    </p>
    <SearchForm />
    </div>
    </header>
    </div>

    <Outlet />
    </>
  )
}

export default Header