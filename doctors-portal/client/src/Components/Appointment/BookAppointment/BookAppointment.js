import React, { useState } from 'react';
import BookCard from '../BookCard/BookCard';
import './BookAppointment.css';
const bookingsDate = [
    {
        id:1,
        suject: 'Teeth Orthodontics',
        visitinghour:'8:00 AM - 9:00 AM',
        totalspace: 10,
    },
    {
        id:2,
        suject: 'Cosmetic Dentistry',
        visitinghour:'10:05 AM - 11:30 AM',
        totalspace: 10,
    },
    {
        id:3,
        suject: 'Teeth Cleaning',
        visitinghour:'05:05 AM - 6:30 AM',
        totalspace: 10,
    },
    {
        id:4,
        suject: 'Cavity Protection',
        visitinghour:'07:00 AM - 8:30 AM',
        totalspace: 10,
    },
    {
        id:5,
        suject: 'Teeth Treatment',
        visitinghour:'08:00 AM - 9:30 AM',
        totalspace: 10,
    },
    {
        id:6,
        suject: 'Test Teeth',
        visitinghour:'10:00 AM - 11:30 AM',
        totalspace: 10,
    },

]

const BookAppointment = ({date}) => {

    return (
        <div className="container">
            <h2 className="text-center mb-5 pb-b" style={{color: '#10d0e5'}}>Available Appoinments on {date.toDateString()}</h2>
            <div className="row">
                {bookingsDate.map(booking => <BookCard booking={booking} date={date} key={booking.id}></BookCard>)}
            </div>
        </div>
    );
};

export default BookAppointment;