import PropTypes from "prop-types";
import React from "react";

import styles from "./Cards.module.css";

function renderMovies(movies) {
  return movies.map((movie) => (
    <figure key={movie.id} className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt="Poster"
        className={styles.img}
      />
      <figcaption>
        <h2 className="h2">
          {movie.title}&nbsp;&mdash;&nbsp;
          {`${new Intl.DateTimeFormat("en-US").format(
            new Date(movie.release_date)
          )}`}
        </h2>
        <h3>Avg. Rating: {movie.vote_average}</h3>
        <p>{movie.overview}</p>
      </figcaption>
    </figure>
  ));
}

export const Cards = ({ movies }) => {
  // Only render movies that have posters
  return (
    <div className={styles.container}>
      {renderMovies(movies.filter(({ poster_path }) => poster_path))}
    </div>
  );
};
Cards.propTypes = { movies: PropTypes.array.isRequired };
