import React from "react";
import "./styles.css";
export default function Form() {
  return (
    <form id="searchEngine">
      <div className="row">
        <div class="col-sm-12">
          <h1>Weather Forecast</h1>
        </div>
        <div className="col-sm-6">
          <input
            className="form-control form-control-lg"
            id="citySearch"
            type="text"
            placeholder="Enter city"
            autocomplete="off"
            aria-label=".form-control-lg example"
          />
        </div>
        <div className="col-sm-3">
          <button
            type="button[type=button]:not(:disabled)"
            className="btn btn-success w-100"
            id="cityButton"
          >
            Search
          </button>
        </div>
        <div className="col-sm-3">
          <button
            type="button]:not(:disabled)"
            className="btn btn-primary w-100"
            id="currentButton"
          >
            Current
          </button>
        </div>
      </div>
    </form>
  );
}
