import React from 'react';
import ReactDOM from 'react-dom';
import { CourseBox } from '../common/CourseBox';

export function Courses () {
    return (
        <>
            <section className= 'courses'> 
                <div className = 'course-container'>
                <h2>Visita mis cursos!</h2>
                <div className='course-box-container'>
                    <CourseBox nameCourse = 'Curso 1'></CourseBox>
                    <CourseBox nameCourse = 'Curso 2'></CourseBox>
                    <CourseBox nameCourse = 'Curso 3'></CourseBox>
                </div>
                <div className='course-box-container'>
                    <CourseBox nameCourse = 'Curso 4'></CourseBox>
                    <CourseBox nameCourse = 'Curso 5'></CourseBox>
                    <CourseBox nameCourse = 'Curso 6'></CourseBox>
                </div>
                </div>
            </section>
        </>
    );
}