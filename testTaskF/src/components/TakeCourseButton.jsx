import React from "react";

function CourseButton(props) {
  const { title } = props;

  return (
    <div className="course-button">
      <span className="course-button-title">{title}</span>
    </div>
  );
}

export default CourseButton;
