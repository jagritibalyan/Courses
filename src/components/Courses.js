import React, {useState} from 'react';
import CourseItem from './CourseItem';

const Courses = ({courseList}) => {
    return (
        <div>
             <h2>Courses List:</h2>
             <ul>
                {courseList.map(c=>{
                    return <li><CourseItem   course = {c}/> </li>
                })}

             </ul>
            
            
        </div>
    );
};


export default Courses;



