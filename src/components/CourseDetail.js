import React, {useState} from 'react';
import { useParams } from 'react-router';

const CourseDetail = ({courseList}) => {
    const {id} = useParams();
    const course = courseList.find(c => c.id === parseInt(id));
    console.log(id);
    if (course){
        return (
            <div>
                <h2>Course Details:</h2>
                <h4>Course Name: {course.name}</h4>
                <h4>Course Instructor: {course.instructor}</h4>
                <h4>Course Fees: {course.fees}</h4>
                <h4>Course Duration: {course.duration}</h4>
            </div>
        );
    }
    else{
        return (
            <h4>Course not found!</h4>
        );
    }
    
};

export default CourseDetail;