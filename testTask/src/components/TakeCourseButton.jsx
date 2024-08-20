import React from "react";

function TakeCourseButton(props) {
  const { title } = props;

  return (
    <div className="takeCourseButtonContainer">
      <p className="takeCourseButtonTitle">{title}</p>
    </div>
  );
}

export default TakeCourseButton;
