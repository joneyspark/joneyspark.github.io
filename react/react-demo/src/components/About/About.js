import React from 'react';
import Category from '../Category/Category';

const About = (props) => {
    return (
        <div>
            <h2>This is About Counter: {props.counter}</h2>
            <Category></Category>
        </div>
    );
};

export default About;