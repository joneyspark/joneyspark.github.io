import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const Services = () => {
    const servicesData = [
        {
            name: 'Fluride Treatment',
            img: 'fluoride.png'
        },
        {
            name: 'Cavity Filing',
            img: 'cavity.png'
        },
        {
            name: 'Teath Whitening',
            img: 'tooth.png'
        }

    ]
    return (
        <section className="section-service">
            <div className="section-heading mt-5 mb-5 text-center">
                <h5 style={{color: '#00c2d8', fontWeight:'bold', textTransform:'uppercase'}}>Our Services</h5>
                <h2>Services We Provide </h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;