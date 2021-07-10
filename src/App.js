import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Courses from './components/Courses';
import data from './data.json';
import {Route, Link} from 'react-router-dom';
import CourseDetail from './components/CourseDetail';

function App() {
  const [courseList, setCourseList] = useState(data);
  return (
    <div className="App">
      <Route 
        exact path = '/' 
        render = {()=>(
          <Courses courseList={courseList} />
      )} />
      

      <Route 
        path = '/courses/:id'
        render = {() => (
          <CourseDetail courseList = {courseList} />
        )}
      />
      
     
      
    </div>
  );
}

export default App;
