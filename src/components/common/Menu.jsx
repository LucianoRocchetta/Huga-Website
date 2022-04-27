import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import { behance, email, facebook, instagram, whatsapp} from '../../assets/SVG/index.js';
import { MenuIcon } from './MenuIcon';

const menuICons = [behance, email, facebook, instagram, whatsapp];

export function Menu (props) {
    return (
        <div className = 'menu'>
            <img className = 'menu-logo' src = {logo}></img>
            <nav className = 'menu-nav'>
                {props.menuItems.map((item) => {
                    return <li className = "menu-li" key = {`${item}`}>{item}</li>
                })}
            </nav>
            <div className = 'menu-social-media'>
                {menuICons.map((icon) => {
                    return <MenuIcon icon = {icon}></MenuIcon>
                })}
            </div>
        </div>
    );
}