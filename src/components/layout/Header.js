import React from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import personalAvatar from '../../assets/avatars/personal.png';
import { Button } from '../common/Button.jsx';

export function Header () {
    return (
        <header className = "header">
            <div className = "header-intro">
                <h1>Hola <br/><span>soy Anto!</span></h1>
                <p>Soy diseñadora gráfica y de indumentaria recibida en la Universidad de Buenos Aires. Me especializo en ilustración y fotografía, conceptualización y comunicación. Contame tu idea y hagámosla realidad!</p>
                <div className = 'header-btn-container'>
                    <Button text = "Trabajemos"></Button>
                    <Button text = "Descargar CV ➜"></Button>
                </div>
            </div>
            <div className = "header-img">
                <img className = "personal-img" src = { personalAvatar }></img>
            </div>
        </header>
    );
}