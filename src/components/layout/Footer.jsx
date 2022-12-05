import React from "react";
import ReactDOM from "react-dom";
import { Contact } from "../sections/Contact.jsx";


export function Footer() {
  return (
    <footer>
      <Contact />
      <div className="footer-container">
        <h2>Huga-Website all rights reserved © 2022</h2>
        <h3>Developed by Rocchetta Luciano</h3>
      </div>
    </footer>
  );
}
