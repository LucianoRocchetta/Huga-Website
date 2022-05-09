import React from 'react';
import ReactDOM from 'react-dom';
import { Contact } from '../sections/Contact.js';

export function Footer () {
    return (
        <footer>
           <Contact />
            <div className = 'footer-container'>
                <h2>Huga-Website all rights reserved © 2022</h2>
            </div>
        </footer>
    );
}