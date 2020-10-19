import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './infoCard.css';
const InfoCard = ({info}) => {
    console.log(info);
    return (
        <div className="col-md-4" style={{zIndex: '100'}}>
            <div className={`d-flex align-items-center justify-content-center info-${info.background} info-container`}>
                <div className="info-icon">
                    <FontAwesomeIcon icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;