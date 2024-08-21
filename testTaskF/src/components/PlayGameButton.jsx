import React from "react";

function PlayButton(props) {
  const { onClick } = props;

  return (
    <div className="play-button-wrapper" onClick={onClick}>
      <div className="play-button-container">
        <div className="play-button-circle">
          <div className="play-button-mini-circle"></div>
        </div>
        <span className="play-button-title">Play Game</span>
      </div>
    </div>
  );
}

export default PlayButton;
