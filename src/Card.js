import React from "react";
import "./styles.css";
import "./card.css";
import Form from "./Form";
import Dailyforecast from "./Dailyforecast";
import Sun from "./Sun";
export default function Card() {
  return (
    <div className="Card">
      <div className="card-body">
        <Form />
      </div>
      <div className="row city">
        <div className="col-sm-6" id="place"></div>
      </div>
      <div className="row currentTime">
        <div className="col-sm-6" id="timeDay"></div>
      </div>
      <Sun />
      <div className="row temp">
        <div className="col-sm-6">
          <span id="degrees"></span>
          <a href="#" id="celsius" class="active">
            °C
          </a>
          |
          <a href="#" id="units">
            °F
          </a>
        </div>
      </div>
      <div className="row forecast">
        <div className="col-sm-6" id="description"></div>
      </div>
      <hr />
      <Dailyforecast />
    </div>
  );
}
