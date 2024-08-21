import "./assets/styles/index.css";
import "./assets/styles/components.css";
import "./assets/styles/App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import Logo from "./components/Logo";
import PlayGameButton from "./components/PlayGameButton";
import DownloadModelButton from "./components/DownloadModelButton";
import SplineScene from "./components/SplineScene";
import ReturnButton from "./components/ReturnButton";

import DownloadModel from "./assets/3DModels/model.spline";
import KeyboardImage from "./assets/images/Keyboard.png";

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
    <div className="App">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="content-wrapper">
        <div className="container">
          <div className="text-container">
            <h1 className="title">3D Room with Game Controls</h1>
            <p className="description">
              Learn how to create a 3D scene in Spline with game interactions
              like moving, jumping, mouse events and dark mode state.
            </p>
          </div>
          <div className="button-container">
            <a href={DownloadModel}>
              <DownloadModelButton />
            </a>
            <PlayGameButton onClick={handlePlayGameClick} />
          </div>
          <div className="gradient-line"></div>
          <div className="control-container1">
            <p className="subtitle">Keyboard key</p>
            <img
              src={KeyboardImage}
              alt="controls image"
              className="control-image"
            />
          </div>
        </div>
        <div
          className={`spline-container ${
            isOpen ? (isClosing ? "isClosed" : "isOpen") : ""
          }`}
        >
          <Header />
          <ReturnButton isOpen={isOpen} onClick={handleReturnClick} />
          <SplineScene />
        </div>
        <div className="control-container2">
          <p className="subtitle">Keyboard key</p>
          <img
            src={KeyboardImage}
            alt="controls image"
            className="control-image"
          />
        </div>
      </div>
    </div>
  );
}
