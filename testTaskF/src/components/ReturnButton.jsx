import React from "react";

import ButtonImage from "../assets/images/CloseButton.png";
import CloseIcon from "../assets/images/CloseIcon.png";

function ReturnButton(props) {
  const { isOpen, onClick } = props;
  return (
    <div className={`closeButton ${isOpen ? "open" : ""}`}>
      <img src={ButtonImage} alt="close-button" className="closeButton-image" />
      {isOpen && (
        <img
          onClick={onClick}
          src={CloseIcon}
          alt="close-icon"
          className="closeButton-icon"
        />
      )}
    </div>
  );
}

export default ReturnButton;
