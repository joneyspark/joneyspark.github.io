import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Sidebar from '../Sidebar/Sidebar';
import { API_URL } from '../../../App';
import AppoinmentsByDate from '../AppoinmentsByDate/AppoinmentsByDate';
const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        fetch('http://localhost:4000/appointmentsByDate', {
            method: "POST",
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date})
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    }

    console.log('SELECT DATE>>>', selectedDate);
    console.log("SET APPOINMENT >>>", appointments);

    /* useEffect( () => {
        fetch('http://localhost:4000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate})
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    }, [selectedDate]) */

    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5">
                <h1>Calendar</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                    className='custom-calendar'
                />
            </div>
            
            <div className="col-md-5">
                <AppoinmentsByDate appointments={appointments}></AppoinmentsByDate>
            </div>

        </div>
    );
};

export default Dashboard;