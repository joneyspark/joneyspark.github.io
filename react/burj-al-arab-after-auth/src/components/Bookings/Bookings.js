import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() =>{
        fetch(`http://localhost:4000/getBooking?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setBookings(data);
            console.log(data);
        })
    }, [])
    return (
        <div>
            <h3>You have: {bookings.length}</h3>
            { 
            bookings.map(booking => <li> {booking.name} from: {(new Date(booking.checkInDate).toDateString('dd/MM/yyyy'))} to: {(new Date(booking.checkOutDate).toDateString('dd/MM/yyyy'))}</li>)
            }

        </div>
    );
};

export default Bookings;