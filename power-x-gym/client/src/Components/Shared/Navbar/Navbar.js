import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="#"><h2>Power <span id="navSpan">X</span></h2></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Services</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Our Classes</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="#">About us</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Pricing</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="#">Blog</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="#">Contact us</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;