import React from 'react';
import './Appointment.css';
const Appointment = () => {
    return (
        <section className="makeappointment-section">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-6">
                        <div className="appointment-img">
                            <img src={process.env.PUBLIC_URL + '/images/doctor.png'} alt="" style={{maxWidth: '100%'}} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="appoinment-text mt-5 pt-4">
                            <h5 style={{color: '#00c2d8', fontWeight:'bold', textTransform:'uppercase'}}>appoinment</h5>
                            <h1 style={{color: '#fff'}} className="mt-3 mb-3">Make an appoinment <br /> Today</h1>
                            <p style={{color: '#fff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="btn btn-primary mt-3" style={{backgroundImage: 'linear-gradient( 45deg, #18d2b4, #0fcfe8)', border:'none', textTransform: 'uppercase'}}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;