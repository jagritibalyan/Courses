import React, {useState} from 'react';
import { useParams } from 'react-router';

const CourseDetail = ({courseList}) => {
    const {id} = useParams();
    const course = courseList.filter(c => c.id === id);
    console.log(id);
    return (
        <div>
            <h4>Course Name: {course.name}</h4>
            <h4>Course Instructor: {course.instructor}</h4>
            <h4>Course Fees: {course.fees}</h4>
            <h4>Course Duration: {course.duration}</h4>
        </div>
    );
};

export default CourseDetail;