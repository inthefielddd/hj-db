import React from "react";
import styles from "./movie_item.module.css";

const MovieItem = ({ movie, onMovieButton }) => {
    return (
        <li className={styles.movie} onClick={() => onMovieButton(movie)}>
            <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </li>
    );
};

export default MovieItem;
