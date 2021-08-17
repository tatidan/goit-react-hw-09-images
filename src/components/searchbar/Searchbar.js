import React, { useState } from "react";

const initialState = {
  query: "",
  page: 1,
};

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState(initialState);
  // console.log(state);

  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    setState((prev) => ({ ...prev, query: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.query);
    onSubmit(state.query);
    reset();
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={state.query}
        />
      </form>
    </header>
  );
};

export default Searchbar;
