import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="#" >
                    <img width="150" src={process.env.PUBLIC_URL + '/images/logos/logo.png'} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto custom-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Our Portfolio</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Our Team</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact us</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link login-btn" to="/login">Login</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;