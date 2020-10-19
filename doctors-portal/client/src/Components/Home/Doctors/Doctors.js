import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const doctors = [
    {
        doctors: 'Dr. Joney Spark',
        phone: '+880-125 125 636',
        photo: 'doctor.png'
    },
    
    {
        doctors: 'Dr. Caudi',
        phone: '+880-454 125 636',
        photo: 'doctor.png'
    },
    {
        doctors: 'Dr. Boney Spark',
        phone: '+880-125 548 636',
        photo: 'doctor.png'
    },

]

const Doctors = () => {
    return (
        <section className="doctors-section mt-5 pt-5 mb-5 pb-5">
            <div className="container">
                <div className="row">
                    <h3 style={{color: '#00c2d8', fontWeight:'bold', textTransform:'uppercase'}} className="text-center col-12">our doctors</h3>
                    {
                        doctors.map( doctor => 
                            <div className="col-md-4">
                                <div className="doctors-wrapper text-center">
                                    <img src={process.env.PUBLIC_URL + '/images/' + doctor.photo}  alt="" className="img-fluid" />
                                    <h4>{doctor.doctor}</h4>

                                    <div className="d-flex align-items-center align-content-center justify-content-center">
                                        <FontAwesomeIcon icon={faPhone} style={{color: '#00c2d8'}}></FontAwesomeIcon>
                                        <a href={'tel:' + doctor.phone} style={{color: 'gray'}}>{doctor.phone}</a>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Doctors;