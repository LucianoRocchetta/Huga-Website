import React from "react";

export function MenuIcon(props) {
  return (
    <img
      alt={props.icon}
      key={props.icon}
      className="menu-icon"
      src={props.icon}
    ></img>
  );
}
