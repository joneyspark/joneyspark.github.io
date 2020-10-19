import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import './Header.css';
const Header = () => {
    return (
        <section className="header">
            <Navbar></Navbar>
            <Banner></Banner>
        </section>
    );
};

export default Header;