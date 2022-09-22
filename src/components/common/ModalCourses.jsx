import React from 'react';

const showModalOff = ( event ) => {
    event.target.offsetParent.classList.toggle('enabled');
}


export const ModalCourses = ({data:{title, description, price, id}}) => {
    return (
        <div className = 'modal-courses disabled' id = {id}>
            <div className = 'modal-container'>
                <button onClick={showModalOff}>X</button>
                <h2>{title}</h2>
                <p>Descripción: {description}</p>
                <h3>Precio: {price}</h3>
                <button className = 'btn'>Comprar</button>
            </div>
        </div>
    );
}