import { React, useState } from "react";
import DownloadModel from "./assets/3DModels/model.spline";
import KeyboardImage from "./assets/images/Keyboard.png";
import Header from "./components/Header";
import Logo from "./components/Logo";
import PlayGameButton from "./components/PlayGameButton";
import DownloadModelButton from "./components/DownloadModelButton";
import SplineScene from "./components/Spline";
import ReturnButton from "./components/ReturnButton";


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handlePlayGameClick = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  const handleReturnClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <div className="appMainContainer">
      <div className="logoContainer">
        <Logo />
      </div>
      <div className="contentContainer">
        <div className="relativeContainer">
          <div className="textContainer">
            <h1 className="title">3D Room with Game Keyboards</h1>
            <p className="description">
              Learn how to create a 3D scene in Spline with game interactions
              like moving, jumping, mouse events and dark mode state.
            </p>
          </div>
          <div className="buttonContainer">
            <a href={DownloadModel} target="_blank" rel="noreferrer">
              <DownloadModelButton />
            </a>
            <PlayGameButton onClick={handlePlayGameClick} />
          </div>
          <div className="gradientLine" />
          <div className="keyboardContainer1">
            <h2 className="subtitle">Keyboard key</h2>
            <img
              className="keyboardImage"
              src={KeyboardImage}
              alt="Keyboards image"
            />
          </div>
        </div>
        <div
          className={`splineWrapper ${
            isOpen ? (isClosing ? "isClosed" : "isOpen") : ""
          }`}
        >
          <Header />
          <ReturnButton isOpen={isOpen} onClick={handleReturnClick} />
          <SplineScene className="splineScene"/>
        </div>
        <div className="keyboardContainer2">
          <h2 className="subtitle">Keyboard key</h2>
          <img
            className="keyboardImage"
            src={KeyboardImage}
            alt="Keyboards image"
          />
        </div>
      </div>
    </div>
  );
}
