import React from 'react';

const partnerLogos = [
    {
        id:1,
        img: 'slack.png',
    },
    
    {
        id:2,
        img: 'google.png',
    },
    {
        id:3,
        img: 'uber.png',
    },
    {
        id:4,
        img: 'netflix.png',
    },
    {
        id:5,
        img: 'airbnb.png',
    },

]

const Partner = () => {
    
    return (
        <section className="partner-section" style={{marginTop: '180px', marginBottom: '60px'}}>
            <div className="container w-75">
                <div className="row d-flex align-items-center custom-partner-wrapper">
                    {
                        partnerLogos.map(logo => <div style={{width: '20%'}} key={logo.id}>
                            <img width="150" src={process.env.PUBLIC_URL + '/images/logos/' + logo.img } alt="" className="img-fluid"/>
                        </div>)

                    }
                </div>
            </div>
        </section>
    );
};

export default Partner;