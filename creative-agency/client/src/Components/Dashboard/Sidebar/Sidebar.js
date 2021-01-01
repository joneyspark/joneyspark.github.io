import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faShoppingBag, faComment } from '@fortawesome/free-solid-svg-icons'
import { API_URL } from '../../../App';
import { Link } from 'react-router-dom';
const Sidebar = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(API_URL + `/getAdmin?email=${sessionStorage.getItem('email')}`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(result => {
            setUsers(result[0]);
            setLoading(false);
        })
    }, []);

    

    return (
        <div>
            <Link to="/">
                <img width="150" className="img-fluid pb-3 mt-3" src={process.env.PUBLIC_URL + '/images/logos/logo.png'} alt="" />
            </Link>

            {   loading === true ? 
                <div className="d-flex justify-content-center w-100">
                    <div className="spinner-border text-center text-info" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                </div> 
                :
                users &&
                users.role === 'Admin' ?
                <ul className="nav flex-column custom-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard/admin/adminServiceLists"><FontAwesomeIcon icon={faShoppingCart} /> Service List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/admin/addService"><FontAwesomeIcon icon={faShoppingBag} /> Add Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#"><FontAwesomeIcon icon={faComment} /> Make Admin</Link>
                    </li>
                </ul>
                :
                <ul className="nav flex-column custom-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard/order/:id"><FontAwesomeIcon icon={faShoppingCart} /> Order</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/servicelist"><FontAwesomeIcon icon={faShoppingBag} /> Service List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/review"><FontAwesomeIcon icon={faComment} /> Review</Link>
                    </li>
                </ul>
            }

           
        </div>
    );
};

export default Sidebar;