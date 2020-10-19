import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contat-us">
            <div className="container w-50">
                <div className="row justify-content-center ">
                    <div className="col-12 text-center">
                        <h5 style={{color: '#00c2d8', fontWeight:'bold', textTransform:'uppercase'}}>contact us</h5>
                        <h1 style={{color: '#fff'}} className="mt-3 mb-3">Always Connect with us</h1>
                    </div>
                    <div className="col-md-12">
                        <form className="form">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email Address" id="InputEmail1" aria-describedby="emailHelp" />
                            </div>
                            
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" id="InputSubject" aria-describedby="subjectHelp" />
                            </div>

                            <div className="form-group">
                                <textarea className="form-control" rows="5" placeholder="Your Message*"></textarea>
                            </div>
                            <button className="btn btn-primary mt-3 text-center" style={{backgroundImage: 'linear-gradient( 45deg, #18d2b4, #0fcfe8)', border:'none', display: 'inline-block', textTransform: 'uppercase'}}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;