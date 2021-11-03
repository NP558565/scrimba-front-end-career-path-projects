import React, { useState } from "react";

import { Cards, Search } from "./components";

export const App = () => {
  const [movies, setMovies] = useState([]);

  const handleMoviesChange = (results) => setMovies(results);

  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <Search onMoviesChange={handleMoviesChange} />
      <Cards movies={movies} />
    </div>
  );
};
