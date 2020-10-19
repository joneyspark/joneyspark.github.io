import React from 'react';

const HeaderMain = () => {
    return (
        <div className="container">
            <main className="row d-flex align-items-center" style={{height:'550px'}}>
                <div className="col-md-4 offset-md-1">
                    <h1 style={{color: '#3a4256'}}>You New Smile <br /> Starts Here</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="btn btn-primary" style={{backgroundImage: 'linear-gradient( 45deg, #18d2b4, #0fcfe8)', border:'none', textTransform: 'uppercase'}}>Get Appoinment</button>
                </div>
                
                <div className="col-md-6 offset-md-1" style={{zIndex: '100', position:'relative'}}>
                    <img src={process.env.PUBLIC_URL + '/images/chair.png'} alt="" className="img-fluid" />
                </div>

            </main>
        </div>
    );
};

export default HeaderMain;