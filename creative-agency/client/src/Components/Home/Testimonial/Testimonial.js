import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../App';


const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(()=>{
        fetch(API_URL + '/getReviews', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            setTestimonials(result);
        })
    }, []);


    return (
        <section className="testimonial-section mt-5 pt-5 mb-5 pb-5">
            <h1 className="text-center pb-5" style={{color: '#111430'}}>Clients <span style={{color: '#7AB259'}}>Feedback</span></h1>
            <div className="container">
                <div className="row d-flex align-items-center">
                    {
                        testimonials.map(testimonial => 
                            <div className="col-md-4" key={testimonial._id}>
                                <div className="testimonial-box shadow-sm p-3 mb-5">
                                    <div className="d-flex align-items-center">
                                        <img width="80" className="img-fluid" src={`data:image/png;base64,${testimonial.image.img}`} alt="" className="img-fluid" />
                                        <div className="pl-3">
                                        <strong>{testimonial.clientName}</strong><br />
                                        <small>{testimonial.designation}</small>
                                        </div>
                                    </div>
                                    <p className="pt-4" style={{color: 'gray'}}>{testimonial.reivewDesc}</p>
                                </div>
                            </div>
                            )
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Testimonial;