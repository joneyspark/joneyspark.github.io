import React from 'react';
import './User.css';
const User = (props) => {
    const {first_name, last_name, email, phone_number, picture, username} = props.user;
    return (
        
        <div className="user-container">
            <p> <img src={process.env.PUBLIC_URL + '/pictures/' + picture} alt=""/></p>
            <p> <strong>Name: </strong> {first_name} {last_name}</p>
            <p> <strong>Email: </strong> {email}</p>
            <p> <strong>Phone: </strong> {phone_number}</p>
            <p> <strong>UserName: </strong> {username}</p>
            <p> <button onClick={()=>props.handleFriend(props.user)}>Add Friend</button></p>
        </div>
    );
};

export default User;