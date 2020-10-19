import React from 'react';
const commonBtn = {
    backgroundColor: '#111430',
    color: '#fff',
    padding: '7px 40px',
    display: 'inline-block',
    border: 'none',
    borderRadius: '5px',
}
const Banner = () => {
    
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-4">
                    <h1>Let’s Grow Your Brand To The Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="btn btn-primary common-btn" style={commonBtn}>Hire us</button>
                </div>
                <div className="col-md-7 offset-md-1">
                    <img src={process.env.PUBLIC_URL + '/images/logos/Frame.png'} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Banner;