import { useState } from "react";
import "../css/Modal.css";

export default function Modal({children, openModal, setOpenModal}) {
    
    return ( 
        <div className={openModal ? "modal__outer" : "modal__outer hidden"}>
            <div className="modal__inner">
                <button className="btn btn__close" onClick={() => setOpenModal(false)}>&#x2715;</button>
                {children}
            </div>
        </div>
    )
}