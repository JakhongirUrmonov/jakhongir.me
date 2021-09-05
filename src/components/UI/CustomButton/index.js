import React from "react";
import { Button } from "react-bootstrap";

function CustomButton({ text, white }) {
  return (
    <Button
      variant="light"
      className={white ? "custom-button white" : "custom-button"}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
