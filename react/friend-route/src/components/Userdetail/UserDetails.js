import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Contextcategory } from '../../App';

const UserDetails = () => {
    const category = useContext(Contextcategory);
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setFriend(data);
        })
    }, []);
    return (
        <div>
            <h1>Details Counter: {category}</h1>
            <h1>Friend Id: {friendId}</h1>
            <h3>Name: {friend.name}</h3>
            <h3>Phone: {friend.phone}</h3>
            <h3>Email: {friend.email}</h3>
            {friend.company && <h3>compnay name: {friend.company.name}</h3>}
            {friend.address && <h3>Address: {friend.address.city}</h3>}
        </div>
    );
};

export default UserDetails;