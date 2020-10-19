import React from 'react';

const Navbar = () => {
    return (
        <div className="container" style={{zIndex: '999', position:'relative'}}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link mr-4" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="#">Dental Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" style={{color: '#fff'}} href="#">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" style={{color: '#fff'}} href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" style={{color: '#fff'}} href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;