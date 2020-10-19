import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './AppointmentHeader.css';
const AppointmentHeader = ({handleDateChange}) => {
    return (
            <div className="container">
                <main className="row d-flex align-items-center" style={{height:'550px'}}>
                    <div className="col-md-4 offset-md-1">
                        <h1 style={{color: '#3a4256'}} className="pb-3=2 mb-5">Appoinment</h1>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                            className='custom-calendar'
                        />
                    </div>
                    
                    <div className="col-md-6 offset-md-1" style={{zIndex: '100', position:'relative'}}>
                        <img src={process.env.PUBLIC_URL + '/images/chair.png'} alt="" className="img-fluid" />
                    </div>
                </main>
            </div>
    );
};

export default AppointmentHeader;