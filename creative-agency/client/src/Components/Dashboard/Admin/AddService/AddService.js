import React, { useContext, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { API_URL, UserContext } from '../../../../App';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const commonBtn = {
    backgroundColor: '#111430',
    color: '#fff',
    padding: '7px 40px',
    display: 'inline-block',
    border: 'none',
    borderRadius: '5px',
}

const AddService = () => {

    const[loggedInUser] = useContext(UserContext);
    
    const [serviceInfo, setServiceInfo] = useState({});
    const [file, setFile ] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...serviceInfo };
        newInfo[e.target.name] = e.target.value;
        setServiceInfo(newInfo);
    }

    console.log(serviceInfo);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const { register, label, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('service', serviceInfo.service)
        formData.append('serviceDetail', serviceInfo.serviceDetail)
        console.log(file);

        fetch(API_URL + '/addService', {
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
                                <h5 style={{marginLeft: '25px'}}>Order</h5>
                            </div>
                            <div>
                                <h5>{sessionStorage.getItem('name')}</h5>
                            </div>
                        </div>
                        <div className="col-md-6 pb-5 mt-3">
                            <form onSubmit={handleSubmit(onSubmit)} className="order-form">

                            <label>{label}</label>
                                <input name="service" onBlur={handleBlur} ref={register({ required: true })} placeholder="Service Title" className="form-control" />
                                <small className="error">{errors.service && <span>This field is required</span>}</small>

                                <textarea row="5" name="serviceDetail" onBlur={handleBlur} ref={register({ required: true })} placeholder="Service Description" className="form-control"></textarea>
                                <small className="error">{errors.serviceDetail && <span>This field is required</span>}</small>

                                <input name="file" onBlur={handleFileChange} className="form-control" type="file" />
                                <small className="error">{errors.file && <span>This field is required</span>}</small>
                                <button className="btn btn-primary common-btn form-control" style={commonBtn} type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddService;