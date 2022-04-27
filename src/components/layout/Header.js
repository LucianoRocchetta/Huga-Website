import React from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import personal from '../../assets/personal.png';
import { Button } from '../common/Button.jsx';

export function Header () {
    return (
        <header className = "header">
            <div className = "header-intro">
                <h2>Hola, soy Anto!</h2>
                <p>Soy diseñadora gráfica y de indumentaria recibida en la Universidad de Buenos Aires. Me especializo en ilustración y fotografía, conceptualización y comunicación. Contame tu idea y hagámosla realidad!</p>
                <Button text = "Acerca de Mi"></Button>
            </div>
            <div className = "header-img">
                <img className = "personal-img" src = {personal}></img>
            </div>
        </header>
    );
}