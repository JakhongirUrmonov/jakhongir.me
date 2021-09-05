import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function Skill({ skill, percentage }) {
  return (
    <div>
      <p>
        <span>{skill}</span>
        <span>{percentage}%</span>
      </p>
      <ProgressBar now={percentage} />
    </div>
  );
}

export default Skill;
