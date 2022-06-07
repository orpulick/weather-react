import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form id="search-form" className="mb-3">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type in city name..."
            className="form-control"
            id="city-input"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="search-button btn wd-100"
          />
        </div>
      </div>
    </form>
  );
}
