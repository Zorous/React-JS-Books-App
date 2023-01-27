import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

import logo from '../../images/logo.jpg';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleNavbar = () => (setToggleMenu(!toggleMenu))


    return (
    <nav className='navbar' id='navbar'>
            <div className='container navbar-content flex'>
                <div className='brand-and-toggler flex flex-sb'>
                    <Link className='navbar-brand flex' to="/">
                        <img src={logo} alt='logo' />
                        <span className='text-uppercase fw-7 fs-24 ls-1'>bookclub</span>
                    </Link>
                    <button type='button' className='navbar-toggler-btn'
                        onClick={handleNavbar}>
                        <HiOutlineMenuAlt3 size={35} style={{
                            color: `${toggleMenu ? "#fff" : "#0fbcf9"}`
                        }}></HiOutlineMenuAlt3>
                    </button>
                </div>

                <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                    <ul className='navbar-nav'>
                        <li className='navbar-item'>
                            <Link to="/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><span className='nav-linkX'>Home</span></Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to="/about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
      
    )
}

export default Navbar