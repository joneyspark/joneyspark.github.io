import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './Testimonial.css';
const testimonals = [
    {
        client: 'Joney Spark',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.incididunt ut labore et dolore magna aliqua.',
        photo: 'photo-1.png',
        location: 'California'
    },
    
    {
        client: 'Winson Herry',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.incididunt ut labore et dolore magna aliqua.',
        photo: 'photo-2.png',
        location: 'Italy'
    },
    {
        client: 'Jhon Herry',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.incididunt ut labore et dolore magna aliqua.',
        photo: 'photo-3.png',
        location: 'UK'
    },

]

const Testimonial = () => {

    return (
       <section className="testimonal-section mt-5 pt-5 mb-5 pb-5">
           <div className="container">
               <div className="row">
                <div className="testimonal-heading text-left col-md-12 pb-5 mb-5">
                    <h5 style={{color: '#00c2d8', fontWeight:'bold', textTransform:'uppercase'}}>testimonal</h5>
                    <h1 style={{color: '#3a4256'}} className="mt-3 mb-3">What's Our Patients <br /> Says</h1>
                    <div className="quote-icon">
                        <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                    </div>
                </div>
                {
                    testimonals.map( testimonal => 
                    <div className="col-md-4">
                        <div className="testimonal-content shadow-sm p-5 bg-white">
                            <p>{testimonal.description}</p>
                            <div className="photo-designation">
                                <div>
                                    <img src={process.env.PUBLIC_URL + '/images/' + testimonal.photo} />
                                </div>
                                <div className="mt-3">
                                    <b>{testimonal.client}</b>
                                    <br />
                                    <small>{testimonal.location}</small>
                                </div>
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

export default Testimonial;