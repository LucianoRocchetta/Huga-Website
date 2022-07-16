import React from 'react';
import { Button } from '../common/Button.jsx';

export function CourseBox ({nameCourse, image}) {
    return (
        <div className = 'course-box'> 
            <img src = {image}/>
            <h3>{nameCourse}</h3>
            <Button text = 'See More'></Button>
        </div>
    );
}