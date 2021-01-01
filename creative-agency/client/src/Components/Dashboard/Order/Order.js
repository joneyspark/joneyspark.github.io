import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { API_URL, UserContext } from '../../../App';
import './Order.css';
import Sidebar from '../Sidebar/Sidebar';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useHistory, useParams } from 'react-router-dom';
const commonBtn = {
    backgroundColor: '#111430',
    color: '#fff',
    padding: '7px 40px',
    display: 'inline-block',
    border: 'none',
    borderRadius: '5px',
    width:'200px'
}

const Order = () => {
    let {id} = useParams();
    const[loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [orderInfo, setOrderInfo] = useState({});
    const [file, setFile ] = useState(null);
    const [loading, setLoading] = useState(true);


    let history = useHistory();

    const handleBlur = (e) => {
        const newInfo = { ...orderInfo };
        newInfo[e.target.name] = e.target.value;
        setOrderInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(API_URL + '/getServices', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            setServices(result);
            setLoading(false);
        })
    }, []);

    var getService = services.filter(service => service._id === id).map(service => {
        return service.serviceDetail;
    });
    var getServiceName = services.filter(service => service._id === id).map(service => {
        return service.service;
    });


    const [selectedValue, setSelectedValue] = useState(id);


    const handleServiceSelect = (e) => {
        const targetVal =  e.target.value;
        setSelectedValue(targetVal);
        console.log(e.target.name)
    }

    const onSubmit = (data, e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', getServiceName)
        formData.append('email', sessionStorage.getItem('email'))
        formData.append('service', selectedValue)
        formData.append('serviceName', getServiceName)
        formData.append('projectdetails', orderInfo.projectdetails || data.projectdetails)
        formData.append('price', orderInfo.price)

        console.log(data);

        fetch(API_URL + '/addOrder', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(result => {
            if(result === true){
                
                NotificationManager.success('Data Saved Successfully', 'Success');
                history.push('/dashboard/servicelist');
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
                            {
                                loading === true ? 
                                <div className="d-flex justify-content-center w-100">
                                    <div className="spinner-border text-center text-info" role="status">
                                    <span className="sr-only">Loading...</span>
                                    </div>
                                </div> 
                                :
                                <form onSubmit={handleSubmit(onSubmit)} className="order-form">

                                    <input name="name" onBlur={handleBlur} ref={register({ required: true })} defaultValue={getServiceName} placeholder="Your Name/Company Name" className="form-control" />
                                    <small className="error">{errors.name && <span>This field is required</span>}</small>

                                    <input name="email" type="email" onBlur={handleBlur} ref={register({ required: true })} defaultValue={sessionStorage.getItem('email')}placeholder="Your Email Address" className="form-control" />
                                    <small className="error">{errors.email && <span>This field is required</span>}</small>

                                    <select name="serviceName" ref={register({ required: true })} onChange={handleServiceSelect} value={selectedValue} className="form-control-custom">
                                        <option value=""> Select a Service </option>
                                        {
                                            services.map(service => 
                                                <option value={service._id} key={service._id}>{service.service}</option>
                                                )
                                        }
                                    </select>
                                    <small className="error">{errors.service && <span>This field is required</span>}</small>

                                        
                                    <input name="projectdetails" ref={register({ required: true })} onBlur={handleBlur} placeholder="Project Details" defaultValue={getService} className="form-control" />
                                    <small className="error">{errors.projectdetails && <span>This field is required</span>}</small>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <input name="price" ref={register({ required: true })} onBlur={handleBlur} placeholder="Price" className="form-control" />
                                            <small className="error">{errors.price && <span>This field is required</span>}</small>
                                        </div>
                                        <div className="col-md-6">
                                            <input name="file" ref={register({ required: true })} onBlur={handleFileChange} className="form-control" type="file" />
                                            <small className="error">{errors.file && <span>This field is required</span>}</small>
                                        </div>
                                    </div>

                                    <button className="btn btn-primary common-btn form-control" style={commonBtn} type="submit">Submit</button>
                                </form>
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>

        
    );
};

export default Order;