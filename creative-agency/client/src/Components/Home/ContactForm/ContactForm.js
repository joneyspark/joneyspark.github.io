import React from 'react';
import Copyright from '../../Shared/Copyright/Copyright';
const commonBtn = {
    backgroundColor: '#111430',
    color: '#fff',
    padding: '7px 40px',
    display: 'inline-block',
    border: 'none',
    borderRadius: '5px',
}
const ContactForm = () => {
    return (
        <section className="contact-form" style={{backgroundColor: '#FBD062',  padding: '20px 0'}}>
            <div className="container" style={{ padding: '100px 0'}}>
                <div className="row">
                    <div className="col-md-5 custom-contact-header">
                        <h1 className="h1">
                            Let us handle your <br />projct, professionally.
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut</p>
                    </div>
                    <div className="col-md-6 offset-md-1">
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="email" className="form-control" style={{border: 'none', padding: '30px 15px'}} placeholder="Your Email Address" />
                            </div>
                            
                            <div className="form-group">
                                <input type="text" className="form-control" style={{border: 'none', padding: '30px 15px'}} placeholder="Your Name/Company name" />
                            </div>
                            
                            <div className="form-group">
                                <textarea className="form-control" style={{border: 'none'}} placeholder="Your Message" rows="10"></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary common-btn" style={commonBtn}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Copyright></Copyright>
        </section>
    );
};

export default ContactForm;