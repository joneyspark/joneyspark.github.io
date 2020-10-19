import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { API_URL } from '../../../App';
const customStyles = {
    content : {
      top                   : '50%',
      width                 : '50%',
      padding               : '30px 15px',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('#root')
const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    data.service = appointmentOn;
    data.date = date;
    data.create = new Date();
    fetch(API_URL + '/addAppointment', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if(result === true){
        closeModal();
        alert("Appointment Created Successfully....")
      }
    })
  }


    return (
        <div>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                  <div className="form-wrapper col-md-12 pt-1 pb-1">
                  <h2 className="text-center text-brand pt-3 pb-2">{appointmentOn}</h2>
                  <strong className="text-center pb-4" style={{display:'inline-block', width: '100%'}}>{date.toDateString()}</strong>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                      <div className="form-group">
                        <input type="text" name="name" ref={register({required: true})} placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                      </div>

                      <div className="form-group">
                        <input type="text" name="phone" ref={register({required: true})} placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                      </div>

                      <div className="form-group">
                        <input type="email" name="email" ref={register({required: true})} placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                      </div>

                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <select className="form-control" name="gender">
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <input type="text" name="age" className="form-control" placeholder="Your Age" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <input type="text" name="weight" className="form-control" placeholder="Your weight" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                          </div>
                        </div>
                      </div>

                      <input className="btn btn-primary float-right" type="submit" />
                  </form>

                  </div>
                
            </Modal>
        </div>
    );
};

export default AppointmentForm;