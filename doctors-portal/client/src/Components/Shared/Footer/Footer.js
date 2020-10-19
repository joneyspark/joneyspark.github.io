import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer mt-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-link">
                            <strong>Quick Links</strong>
                            <ul>
                                <li> <a href="#">Emergency Dental Care</a> </li>
                                <li> <a href="#">check up</a> </li>
                                <li> <a href="#">Treatment of Personal Disease</a> </li>
                                <li> <a href="#">Tooth Extraction</a> </li>
                                <li> <a href="#">Check up</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-link">
                            <strong>Services</strong>
                            <ul>
                                <li> <a href="#">Emergency Dental Care</a> </li>
                                <li> <a href="#">check up</a> </li>
                                <li> <a href="#">Treatment of Personal Disease</a> </li>
                                <li> <a href="#">Tooth Extraction</a> </li>
                                <li> <a href="#">Check up</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-link">
                            <strong>Oral Health</strong>
                            <ul>
                                <li> <a href="#">Emergency Dental Care</a> </li>
                                <li> <a href="#">check up</a> </li>
                                <li> <a href="#">Treatment of Personal Disease</a> </li>
                                <li> <a href="#">Tooth Extraction</a> </li>
                                <li> <a href="#">Check up</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-link">
                            <strong>Our Address</strong>
                            <h5>New York - 101010 Hudson yards</h5>
                            <ul>
                                <li> <a href="#">Facebook</a> </li>
                                <li> <a href="#">Google Plus</a> </li>
                                <li> <a href="#">Twitter</a> </li>
                            </ul>
                            <b>Call Now</b>
                            <button className="btn btn-primary mt-3" style={{backgroundImage: 'linear-gradient( 45deg, #18d2b4, #0fcfe8)', border:'none', textTransform: 'uppercase'}}>+20 255 502 89</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center mt-5">
                <p style={{color: 'gray'}}>Copyright 2020 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;