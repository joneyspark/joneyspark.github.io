import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API_URL } from '../../../App';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(API_URL + '/getServices', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            setServices(result);
        })
    }, []);

    let history = useHistory();
    const goService = (id) => {
        history.push(`/dashboard/order/${id}`);
        console.log("service ID >>>", id);
    }
    return (
        <section className="services-section mt-5 pt-5 mb-5 pb-5">
            <div className="container">
                <h1 className="text-center pb-5">Provide awesome <span style={{color: '#7AB259'}}>Servicess</span></h1>
                <div className="row d-flex align-items-center">
                    
                        {
                            services.map(service => 
                            <div className="col-md-4" key={service._id}>
                                <div className="service-box text-center" onClick={() => goService(service._id)}>
                                    <img width="80" src={`data:image/png;base64,${service.image.img}`} alt="" className="img-fluid pb-4" />
                                    <h5>{service.service}</h5>
                                    <p>{service.serviceDetail}</p>
                                </div>
                            </div>
                            )
                        }
                    
                </div>
            </div>
        </section>
    );
};

export default Services;