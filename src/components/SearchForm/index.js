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
          onClick={props.handleSortAlphabetically}
          className="btn btn-success"
        >
          Sort by ABC
        </button>
        {/* <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Sort by Y
        </button> */}
      </div>
    </form>
  );
}

export default SearchForm;
