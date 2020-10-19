import React from 'react';

const blogs = [
    {
        doctor: 'Dr. Joney Spark',
        title: 'check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.incididunt ut labore et dolore magna aliqua.',
        photo: 'photo-1.png',
        location: 'California',
        date: '22 Aug 2018'
    },
    
    {
        doctor: 'Dr. Winson Herry',
        title: '2 times of brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.incididunt ut labore et dolore magna aliqua.',
        photo: 'photo-2.png',
        location: 'Italy',
        date: '22 April 2019'
    },
    {
        doctor: 'Dr. Jhon Herry',
        title: 'The tooth cancer is taking a challange',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.incididunt ut labore et dolore magna aliqua.',
        photo: 'photo-3.png',
        location: 'UK',
        date: '23 April 2019'
    },
]
const Blog = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="section-heading mt-5 mb-5 text-center col-12">
                        <h5 style={{color: '#00c2d8', fontWeight:'bold', textTransform:'uppercase'}}>Our Blog</h5>
                        <h2>From Out Blog News </h2>
                    </div>
                    {
                        blogs.map( blog => 
                        <div className="col-md-4">
                            <div className="blog-content shadow-sm p-4 bg-white">
                                <div className="d-flex align-items-center pb-4">
                                    <img src={process.env.PUBLIC_URL + '/images/' + blog.photo} alt="" />
                                    <div className="blog-doctor pl-4">
                                        <h5>{blog.doctor}</h5>
                                        <p>{blog.date}</p>
                                    </div>
                                </div>
                                    <h4 style={{color: '#3a4256'}} className="pb-4">{blog.title}</h4>
                                    <p style={{color: 'gray'}}>{blog.description}</p>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;