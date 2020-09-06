import React from 'react';
import {Link, useHistory} from "react-router-dom";
import './User.css';
const User = (props) => {
    let history = useHistory();
    const {name, phone, email, id} = props.user;
    const handler = (friendId) => {
        history.push(`/friend/${friendId}`);
    }
    return (
        <div className="user-box">
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>See Details {id}</Link>
            <button onClick={() => handler(id)}>Click Details</button>
        </div>
    );
};

export default User;