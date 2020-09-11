import React from 'react';
import logo from '../../images/logo.png';
import './header.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <div className="logoSec">
            <img src={logo} alt="logo" className="logo"/>
            </div>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order review</Link>
                <Link to="/manage-intentory">Manage Inventory</Link>
                {
                    loggedInUser.email && <Button onClick={() => setLoggedInUser({})}>Sign Out</Button>
                }
            </nav>
        </div>
    );
};

export default Header;