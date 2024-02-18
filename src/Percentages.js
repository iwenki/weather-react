import React from "react";
import "./styles.css";
export default function Percentages() {
  return (
    <ul class="list-group list-group-flush percentages">
      <li className="list-group-item cell" id="precip">
        Feels like:{" "}
      </li>
      <li className="list-group-item cell" id="humid">
        Humidity:{" "}
      </li>
      <li className="list-group-item cell" id="wind">
        Wind:{" "}
      </li>
    </ul>
  );
}
