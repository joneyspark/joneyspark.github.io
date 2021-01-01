import React, { useContext, useEffect, useState } from 'react';
import { API_URL, UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceList.css';

const ServiceList = () => {
    const[loggedInUser] = useContext(UserContext);
    const [userOrder, setUserOrder] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(API_URL + `/orderlists?email=${sessionStorage.getItem('email')}`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(result => {
            setUserOrder(result);
            setLoading(false);
        })
    }, []);

    return (
        
            <div className="container-fluid">
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
                            <div className="row mt-5 ml-3">
                        {
                            loading === true ? 
                            <div className="d-flex justify-content-center w-100">
                                <div className="spinner-border text-center text-info" role="status">
                                <span className="sr-only">Loading...</span>
                                </div>
                            </div> 
                            :
                            userOrder.map( orderlist => 
                                <div className="col-md-5 col-xs-12 mb-3" key={orderlist._id}>
                                    <div className="card orderlist-card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <img src={`data:image/png;base64,${orderlist.image.img}`} alt="" width="80" />
                                                </div>
                                                <div>
                                                    <button className="btn btn-primary done">Done</button>
                                                </div>
                                            </div>
                                            <h5>{orderlist.name}</h5>
                                            <p>{orderlist.projectdetails}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                            
                        </div>
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default ServiceList;