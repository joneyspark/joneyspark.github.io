import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const openModal = () => {
      setIsOpen(true);
    }

    const closeModal = () => {
      setIsOpen(false);
    }

    return (
        <div className="col-md-4" key={booking.id}>
            <div className="booking-box shadow-sm pt-5 pb-5 pl-3 pr-3 mb-5 bg-white text-center">
                <strong>{booking.suject}</strong>
                <p>{booking.visitinghour}</p>
                <small>{booking.totalspace} Spaces Available</small>
                <button onClick={()=>openModal()} className="btn btn-primary" style={{backgroundImage: 'linear-gradient( 45deg, #18d2b4, #0fcfe8)', border:'none', textTransform: 'uppercase'}}>Get Appoinment</button>
                <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.suject} date={date} ></AppointmentForm>
            </div>
        </div>
    );
};

export default BookCard;