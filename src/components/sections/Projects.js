import React, { useEffect, useState } from 'react';
import { ProjectItem } from '../common/ProjectItem';

export function Projects () {
    const categories = ['Figurines', 'Estampas', 'Ilustraciones', 'Fichas tecnicas'];

    async function requestDataProjects () {
        try {
            const request = await fetch('DB/projects.json');
            const responseJson = await request.json();
            setData(responseJson)
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(()=>{requestDataProjects()},[])
    const [data, setData] = useState([]); 

    const updateProjects = (event) => {
        let newData = []
        data.map((element) => {
            if (element.category === event.target.id) {
                newData.push(element);
            } 
        }
        )
        setData(newData);
    }

    return (
        <>
            <section className = 'projects'>
                <div>
                    <ul className = "categories">
                        {
                        categories.map((category) => {
                            return <li><a id = {category} onClick={event => updateProjects(event)} key = {category}>{category}</a></li>
                        })
                        }
                    </ul>
                </div>
                <div className = 'projects-box'>
                    {data.map((child) => {
                        return <ProjectItem data = {child}/>;
                    })}
                </div>
            </section>
        </>
    );
}