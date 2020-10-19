import React, { useContext, useState } from 'react';

import { useForm } from "react-hook-form";

import {NotificationContainer, NotificationManager} from 'react-notifications';
import { API_URL, UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
const commonBtn = {
    backgroundColor: '#111430',
    color: '#fff',
    padding: '7px 40px',
    display: 'inline-block',
    border: 'none',
    borderRadius: '5px',
    width: '200px'
}


const Review = () => {
    const[loggedInUser] = useContext(UserContext);
    
    const [reviewInfo, setReviewInfo] = useState({});
    const [file, setFile ] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...reviewInfo };
        newInfo[e.target.name] = e.target.value;
        setReviewInfo(newInfo);
    }

    console.log(reviewInfo);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const { register, label, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('clientName', reviewInfo.clientName)
        formData.append('designation', reviewInfo.designation)
        formData.append('reivewDesc', reviewInfo.reivewDesc)
        formData.append('email', sessionStorage.getItem('token'))
        console.log(file);

        fetch(API_URL + '/addReview', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(result => {
            if(result === true){
                NotificationManager.success('Data Saved Successfully', 'Success');
            }
        })
        .catch(result => {
            if(result === false){
                NotificationManager.error('Error message', 'Click me!', 5000, () => {
                    alert('callback');
                  });
                }
            })
        e.target.reset();
    };
    return (
        <div className="container-fluid">
            <NotificationContainer/>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <div style={{height: '100vh', backgroundColor: '#F4F7FC'}}>
                        <div className="d-flex align-items-center justify-content-between" style={{backgroundColor: '#fff', padding: '20px'}}>
                            <div>
                                <h5 style={{marginLeft: '25px'}}>Review</h5>
                            </div>
                            <div>
                                <h5>{sessionStorage.getItem('name')}</h5>
                            </div>
                        </div>
                        <div className="col-md-6 pb-5 mt-3">
                            <form onSubmit={handleSubmit(onSubmit)} className="order-form">

                            <label>{label}</label>
                                <input name="clientName" onBlur={handleBlur} ref={register({ required: true })} placeholder="Client Name" className="form-control" />
                                <small className="error">{errors.clientName && <span>This field is required</span>}</small>
                                
                                <input name="designation" onBlur={handleBlur} ref={register({ required: true })} placeholder="Client Designation" className="form-control" />
                                <small className="error">{errors.designation && <span>This field is required</span>}</small>

                                <textarea row="5" name="reivewDesc" onBlur={handleBlur} ref={register({ required: true })} placeholder="Reivew Content" className="form-control"></textarea>
                                <small className="error">{errors.reivewDesc && <span>This field is required</span>}</small>

                                <input name="file" onBlur={handleFileChange} className="form-control" type="file" />
                                <small className="error">{errors.file && <span>This field is required</span>}</small>
                                <button className="btn btn-primary common-btn form-control" style={commonBtn} type="submit">Submit Review</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Review;