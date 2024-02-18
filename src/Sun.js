import React from "react";
import "./styles.css";
import Percentages from "./Percentages";

export default function Sun() {
  return (
    <div className="row sun">
      <div className="col">
        <img
          className="mainsun"
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          alt="weatherIcon"
          id="icon"
        ></img>
      </div>
      <div className="col">
        <Percentages />
      </div>
    </div>
  );
}
