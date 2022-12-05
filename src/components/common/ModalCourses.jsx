import React from "react";
import { IoCloseCircle } from "react-icons/io5";

const showModalOff = (event) => {
  const id = (event.target.getAttribute('buttonId'));
  const modal = document.getElementById(id);
  modal.classList.toggle('enabled');
};

export const ModalCourses = ({ data: { title, description, price, topics, id, url } }) => {
  return (
    <div className="modal-courses disabled" id={id}>
      <div className="modal-container">
        <div className = "modal-bar">
          <h2>{title}</h2>
          <IoCloseCircle 
            buttonId = { id } 
            onClick = { showModalOff }
          />
        </div>
        <p>{description}</p>
        <p>{topics}</p>
        <h3>Precio: {price}</h3>
        <a href = { url } className="btn">Comprar</a>
      </div>
    </div>
  );
};
