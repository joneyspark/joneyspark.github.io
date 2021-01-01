import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API_URL } from '../../../App';
import './Services.css';
import {useSpring, animated} from 'react-spring'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Services = () => {
    
    // const props = useSpring({ scroll: 100, from: { scroll: 0 } })

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const [services, setServices] = useState([]);

    const [loading, setLoading] = useState(true);

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
                            loading === true ? 
                            
                            <div className="d-flex justify-content-center w-100">
                                <div className="spinner-border text-center text-info" role="status">
                                <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                              :
                                services.map(service => 
                                <div className="col-md-4" key={service._id}>
                                    <animated.div 
                                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                    style={{ transform: props.xys.interpolate(trans) }}
                                    >
                                        <div className="service-box text-center" onClick={() => goService(service._id)}>
                                            <img width="80" src={`data:image/png;base64,${service.image.img}`} alt="" className="img-fluid pb-4" />
                                            <h5>{service.service}</h5>
                                            <p>{service.serviceDetail}</p>
                                        </div>
                                    </animated.div>
                                </div>
                            )
                        }
                    
                </div>
            </div>
        </section>
    );
};

export default Services;