import React from 'react';
import ReactDOM from 'react-dom';

export function MenuIcon (props) {
    return (
        <img key = {`${props.icon}`} className = 'menu-icon' src = {props.icon}></img>
    );
}