import React from "react";

export function ContactInput({ type, placeholder }) {
  if (type == "text") {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="contact-input"
      ></input>
    );
  } else if (type == "email") {
    return (
      <input
        type="email"
        placeholder={placeholder}
        className="contact-input"
      ></input>
    );
  } else if (type == "textArea") {
    return (
      <textarea placeholder={placeholder} className="input-textarea"></textarea>
    );
  }
}
