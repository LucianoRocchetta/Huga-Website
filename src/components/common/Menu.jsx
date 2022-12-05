import React from "react";
import ReactDOM from "react-dom";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { socialMedias } from "../../assets/SVG/index.js";
import { MenuIcon } from "./MenuIcon";

export function Menu(props) {
  return (
    <>
      <div className="menu" id = "menu">
        <img className="menu-logo" src={logo}></img>
        <nav className="menu-nav">
          {props.menuItems.map((item) => {
            return (
              <li className="menu-li" key={`${item}`}>
                <Link to={item} spy={true} smooth={true} offset={-50} duration={700}>{item}</Link>
              </li>
            );
          })}
        </nav>
      </div>
      <div className="menu-social-media">
        <div className="menu-social-media-container">
          {socialMedias.map(data => {
            return <MenuIcon icon={data.socialmedia} url = {data.url}></MenuIcon>;
          })}
        </div>
      </div>
    </>
  );
}
