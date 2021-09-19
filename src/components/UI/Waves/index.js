import React from "react";
import topWave from "../../../assets/images/top.webp";
import bottomWave from "../../../assets/images/bottom.webp";

function Waves({ position, id }) {
  return (
    <div className="waves">
      <img
        className={position === "top" ? "top-wave" : "bottom-wave"}
        src={position === "top" ? topWave : bottomWave}
        alt="waves"
        id={id}
      />
    </div>
  );
}

export default Waves;
