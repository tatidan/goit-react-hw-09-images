import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modalRoot");

const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={largeImageURL} alt="img" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
