import React from "react";

function PlayGameButton(props) {
  const { onClick } = props;

  return (
    <div className="playGameButtonContainer" onClick={onClick}>
      <div className="playGameButtonSecondContainer">
        <div className="playGameButtonGradientCircle">
          <div className="playGameButtonSmallGradientCircle" />
        </div>
        <p className="playGameButtonTitle">Play Game</p>
      </div>
    </div>
  );
}

export default PlayGameButton;
