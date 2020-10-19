import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header';
import Partner from '../Partner/Partner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import WorksSample from '../WorksSample/WorksSample';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Partner></Partner>
            <Services></Services>
            <WorksSample></WorksSample>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;