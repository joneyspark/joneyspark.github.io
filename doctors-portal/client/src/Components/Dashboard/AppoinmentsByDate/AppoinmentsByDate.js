import React from 'react';

const AppoinmentsByDate = ({appointments}) => {
    console.log("AppoinmentsByDate>>", appointments);
    return (
        <div>
            {appointments.length ?
            <h1>Appointment: {appointments.length}</h1> : <h1>There is no Appointment</h1>}
        </div>
    );
};

export default AppoinmentsByDate;