import React, {useState}from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Courses from './components/courses/Courses';
import Banner from './components/banner/Banner';
import fakedata from '../src/fakedata/randomcourses.json';
import Single from './components/single-course/Single';
function App() {
  const first10 = fakedata.slice(0, 10);
  const [courses] = useState(first10);
  const [carts, setCarts] = useState([]);

  const handleCourse = (course) =>{
    const newCart = [...carts, course];
    setCarts(newCart);
  }
  return (
    <div className="container">
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
        <Single carts={carts} ></Single>
      <div className="row mt-5">
        {
          courses.map(course => <Courses course={course} key={course.id} handleCourse={handleCourse}></Courses>)
        }
      </div>
    </div>
  );
}

export default App;
