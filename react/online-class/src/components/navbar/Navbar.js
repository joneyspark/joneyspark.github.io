import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    const carts = props.carts;
    return (
       <div className="nav-menu">
           <nav className="d-flex justify-content-between align-items-center">
               <div className="logo">
                <a href="/">CoursePera</a>
               </div>
               <div className="menu">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/courses">Courses</a>
                <a href="/contact">Contact us</a>
               </div>
               <div className="header-cart">
            <strong>Course in cart: <span>{carts.length}</span></strong>
               </div>
           </nav>
       </div>
    );
};

export default Navbar;