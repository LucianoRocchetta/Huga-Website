import React from 'react';
import { ReactDOM } from 'react';
import { Button } from '../common/Button.jsx';

export function CourseBox ({nameCourse}) {
    return (
        <div className = 'course-box'>
            <h2>{nameCourse}</h2>
            <Button text = 'See More'></Button>
        </div>
    );
}