import React from 'react';
import ReactDOM from 'react-dom';

export function Button (props) {
    return (
        <button className='btn'>{props.text}</button>
    );
}