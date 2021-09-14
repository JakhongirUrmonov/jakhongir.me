import React from "react";
import resume from "../../../assets/resume.pdf";

function CustomButton({ text, white, mail }) {
  return (
    <a
      className={white ? "custom-button white" : "custom-button"}
      href={mail ? "mailto:jakhongir.urmonov@gmail.com" : resume}
    >
      {text}
    </a>
  );
}

export default CustomButton;
