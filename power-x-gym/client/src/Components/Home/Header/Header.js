import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <section className="header-banner">
            <Navbar></Navbar>
            <Banner></Banner>
        </section>
    );
};

export default Header;