import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img src={process.env.PUBLIC_URL + '/images/' + service.img} alt="" />
            <h5 className="mt-4 mb-4">{service.name}</h5>
            <p style={{color: 'gray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    );
};

export default ServiceDetail;