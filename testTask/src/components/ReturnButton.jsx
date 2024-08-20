import React from "react";
import ButtonImage from "../assets/images/CloseButton.png";
import CloseIcon from "../assets/images/CloseIcon.png";

function ReturnButton(props) {
  const { isOpen, onClick } = props;
  return (
    <div className="returnButtonWrapper">
      <img
        className="returnButtonImage"
        src={ButtonImage}
        alt="return to main page"
      />
      {isOpen && (
        <img
          className="returnButtonIcon"
          onClick={onClick}
          src={CloseIcon}
          alt="icon"
        />
      )}
    </div>
  );
}

export default ReturnButton;
