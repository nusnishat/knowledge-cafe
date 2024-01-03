import React from 'react';
import './Header.css'
import logo from '../../images/profile.png'
const Header = () => {
    return (
        <nav className='header'>
            <div className="header-info">
                <div className="header-name">
                    <h1>Knowledge cafe</h1>
                </div>
                <div className="header-image">
                    <img src={logo} alt="" />
                </div>
            </div>
            <hr />
        </nav>
    );
};

export default Header;