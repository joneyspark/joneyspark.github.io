import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
const Banner = () => {
    return (
        <div className="banner d-flex align-items-center" style={{backgroundImage: `linear-gradient(#1714266b, #17142699), url(/banner-1.jpg)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="banner-content">
                            <h1>The Best Fitness <br/> Stdio in Town</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <button className="btn btn-primary common-btn">Join Us</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="video-icon">
                            <FontAwesomeIcon icon={faPlayCircle} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;