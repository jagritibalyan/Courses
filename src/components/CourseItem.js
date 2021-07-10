import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const CourseItem = ({course}) => {
    return (
        <Link to={
            {
                pathname: "/courses/:id",
                state: {
                    course: course,
                },
            }
        }>
        {course.name}
        </Link>
    ); 
};

export default CourseItem;