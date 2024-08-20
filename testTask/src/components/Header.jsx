import React from "react";
import TakeCourseButton from "./TakeCourseButton";

function Header() {
  return (
    <div className="headerContainer">
      <a href="index.html" target="_blank" rel="noreferrer">
        <p className="headerLoginLink">login</p>
      </a>
      <a href="index.html" target="_blank" rel="noreferrer">
        <TakeCourseButton title="take the course" />
      </a>
    </div>
  );
}

export default Header;
