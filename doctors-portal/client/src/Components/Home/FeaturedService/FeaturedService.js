import React from 'react';

const FeaturedService = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center mt-5 pt-5 mb-5 pb-5">
                <div className="col-md-5">
                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/images/feature-services.png'} alt="" />
                </div>
                <div className="col-md-6">
                    <h1 style={{fontSize: '3em', color: '#3a4256'}} className="mb-5">Exceptional Dental <br /> Care, On Your Terms</h1>
                    <p style={{color: 'gray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  </p>
                    <button className="btn btn-primary mt-4" style={{backgroundImage: 'linear-gradient( 45deg, #18d2b4, #0fcfe8)', border:'none', textTransform: 'uppercase'}}>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;