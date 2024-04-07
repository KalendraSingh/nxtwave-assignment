import React from 'react'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { useState } from 'react';
import "./Index.css";

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleCross = () => {
        setShowMenu(false)
    }

    const mobileMenu =() =>{

        return(
            <div className='mobile-nav-container'>
                <div className='nav-heading'>
                    <h2>NxtWave</h2>
                    <RxCross2 className='cross-icon' onClick={handleCross}/>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className='mobile-button'>
                    <button className='navbar-button mobile-navbar-button'>
                        <CiSettings className='setting-icon' />
                        Login/Signup
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='navbar-container'>
                <div>
                    <h2>NxtWave</h2>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div>
                    <button className='navbar-button'>
                        <CiSettings className='setting-icon' />
                        Login/Signup
                    </button>
                    <RxHamburgerMenu onClick={handleMenu} className='hamburger-menu' />
                </div>
            </div>
            {showMenu && mobileMenu()}
        </div>
    )
}
export default Header;
