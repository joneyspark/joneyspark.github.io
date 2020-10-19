import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const infoData = [
    {
        title: 'Opeaning hours',
        description: 'We are open 7 days',
        icon: faClock,
        background:'primary'
    },
    
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, nY 1003 USA',
        icon: faMapMarker,
        background:'dark'
    },
    {
        title: 'Call us Now',
        description: '+15692458713',
        icon: faPhone,
        background:'primary'
    }
]

const BusinessInfo = () => {

    return (
        <div className="container">
            
            <section className="row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </section>
        </div>
    );
};

export default BusinessInfo;