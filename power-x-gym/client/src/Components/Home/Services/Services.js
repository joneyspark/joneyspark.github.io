import React from 'react';

const services = [
    {
        id: 1,
        name: 'Progression',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut',
        icon:'icon-1.png',
        backgroundImg: 'service-1.jpg',
    },
    
    {
        id: 2,
        name: 'Workout',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut',
        icon:'icon-2 .png',
        backgroundImg: 'service-2.jpg',
    },
    {
        id: 1,
        name: 'Nutrition',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut',
        icon:'icon-3.png',
        backgroundImg: 'service-3.jpg',
    },

]


const Services = () => {

    console.log(services);
    return (
        <div className="container">
            <div className="row">
                {
                    services.map( service => 
                        <div className="col-md-4" styles={{ backgroundImage:`url(process.env.PUBLIC_URL + '/images/' ${service.backgroundImg})`}} >
                            <div className="serviceBox">
                                <img src={service.icon} />
                                <h1>{service.name}</h1>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;