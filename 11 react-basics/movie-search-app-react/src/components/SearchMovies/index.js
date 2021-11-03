import React, { useState } from "react";
import PropTypes from "prop-types";

import apiRepo from "api";

import styles from "./SearchMovies.module.css"; // Import css modules stylesheet as styles

const api = apiRepo();

export const SearchMovies = ({ onMoviesChange }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const searchMovies = async (event) => {
    event.preventDefault();

    const { results } = await api.index(query);
    onMoviesChange(results);
  };

  return (
    <form className={styles.form} onSubmit={searchMovies}>
      <label htmlFor="query" className={styles.label}>
        Movie Name
      </label>
      <input
        type="search"
        id="query"
        placeholder="i.e. Jurassic Park"
        className={styles.input}
        onChange={handleInputChange}
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};
SearchMovies.propTypes = {
  onMoviesChange: PropTypes.func,
};
