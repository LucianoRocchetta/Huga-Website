import React from "react";

export const ProjectItem = (props) => {
    return (
        <div className= "project-item">
            <img alt = {props.data.projectName} src = {props.data.imageUrl}></img>
            <h2>{props.data.projectName}</h2>
        </div>
    )
}