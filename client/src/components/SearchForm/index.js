import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group exercises">
        <label htmlFor="exercise-name">{props.name}</label>
        <input
          // value={props.name}
          onChange={props.handleInputChange}
          name="exercise-name"
          list="exercises"
          className="form-control"
          placeholder="Pick your own."
          id="exercise-name"
        />
        <datalist id="exercises">
          {props.datalist.map(data => (
            <option value={data.id} key={data.id} >Hi</option>
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>

      
      <div className="form-group category">
        <label htmlFor="category-name">{props.name}</label>
        <input
          // value={props.name}
          onChange={props.handleInputChange}
          name="category-name"
          list="category"
          className="form-control"
          placeholder="Pick your own."
          id="categroy-name"
        />
        <datalist id="category">
          {props.datalist.map(data => (
            <option value={data.category} key={data.category} >Hi</option>
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
