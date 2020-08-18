import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="name">Search for Employee:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="names"
          type="text"
          className="form-control"
          placeholder="Name"
          id="name"
        />

        <button
          type="submit"
          onClick={props.handleSort}
          className="btn btn-dark"
        >
          Sort Alphabetically
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
