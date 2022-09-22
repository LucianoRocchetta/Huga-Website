import React from "react";
import ReactDOM from "react-dom";
import { ContactInput } from "../common/ContactInput";
import { Button } from "../common/Button.jsx";

export function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <form>
        <ContactInput type="text" placeholder="Tu nombre"></ContactInput>
        <ContactInput type="email" placeholder="Tu email"></ContactInput>
        <ContactInput type="textArea" placeholder="Tu mensaje"></ContactInput>
        <Button text="Enviar mensaje"></Button>
      </form>
    </div>
  );
}
