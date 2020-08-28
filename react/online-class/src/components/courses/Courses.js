import React from 'react';
import './Courses.css';
const Courses = (props) => {
    const {course, name, course_img, lectures, course_length, rating, regular_price, sections, source, enrolled, discount_price, created_by, course_url } = props.course;
    return (
        <div className="col-md-4 coures-container">
            <div className="card">
                <div className="card-body">
                    <img src={course_img} alt=""/>
                    <h5 className="card-title">{name}</h5>
                    <div className="course-details-card d-flex justify-content-between">
                        <div className="details-left">
                            <p> <small>Sections: {sections}</small> </p>
                            <p> <small>Lectures: {lectures}</small> </p>
                            <p> <small>Length: {course_length}</small> </p>
                            <p> <small>Enrolled: {enrolled}</small> </p>
                            <p> <small><del>Regular Price: {regular_price}</del></small> </p>
                        </div>
                        <div className="detail-right">
                            <p> <small>Created By <a href={created_by}>Name</a></small> </p>
                            <p> <small><a href={course_url}>View Course</a></small> </p>
                            <p> <small>Rating: {rating}</small> </p>
                            <p> <small>Source: {source}</small> </p>
                            <p> <small>Discount Price: {discount_price}</small> </p>
                        </div>
                    </div>
                    <div className="enroll-div">
                        <button className="btn btn-primary" onClick={()=>{props.handleCourse(props.course)}}>Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;