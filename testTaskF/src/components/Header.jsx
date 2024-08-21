import React from "react";

import CourseButton from "./TakeCourseButton";

function Header() {
  return (
    <div className="header">
      <a href="">
        <p className="header-caption">login</p>
      </a>
      <a href="">
        <CourseButton title="take course" />
      </a>
    </div>
  );
}

export default Header;
