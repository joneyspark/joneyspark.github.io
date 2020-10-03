import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';
import { UserContext } from '../../App';
import Bookings from '../Bookings/Bookings';

const Book = () => {
    const {bedType} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        checkInDate: new Date(),
        checkOutDate: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDate = {...selectedDate}
        newDate.checkInDate = date;
        setSelectedDate(newDate);
    }
    
    const handleCheckOutDate = (date) => {
        const newDate = {...selectedDate}
        newDate.checkOutDate = date;
        setSelectedDate(newDate);
    }

    const handleBooking =  () => {
        const newBooking = { ...loggedInUser, ...selectedDate }
        fetch('http://localhost:4000/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>
            
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                margin="normal"
                id="check-in-date"
                label="Check In Date"
                format="MM/dd/yyyy"
                value={selectedDate.checkInDate}
                onChange={handleCheckInDate}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            <KeyboardDatePicker
                margin="normal"
                id="check-out-date"
                label="Check Out Date"
                format="MM/dd/yyyy"
                value={selectedDate.checkOutDate}
                onChange={handleCheckOutDate}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            </MuiPickersUtilsProvider>

            <Button variant="contained" onClick={handleBooking} color="primary">Booking</Button>

            <Bookings></Bookings>
        </div>
    );
};

export default Book;