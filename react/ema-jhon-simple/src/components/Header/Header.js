import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logoSec">
            <img src={logo} alt="logo" className="logo"/>
            </div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;