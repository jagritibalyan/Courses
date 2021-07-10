import React, {useState} from 'react';
import CourseItem from './CourseItem';

const Courses = ({courseList}) => {
    return (
        <div>
             <h2>Courses List:</h2>
            {courseList.map(c=>{
                return <CourseItem  course = {c}/>
            })}
            
        </div>
    );
};


export default Courses;



