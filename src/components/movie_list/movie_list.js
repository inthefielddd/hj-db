import React from "react";
import MovieItem from "../movie_item/movie_item";
import styles from "./movie_list.module.css";

const MovieList = ({ movies, onMovieButton }) => (
    <ul className={styles.movies}>
        {movies && //
            movies.map((movie) => <MovieItem key={movie.id} movie={movie} onMovieButton={onMovieButton} />)}
    </ul>
);

export default MovieList;
