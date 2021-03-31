import React from "react";
import MovieItem from "../movie_item/movie_item";
import styles from "./movie_list.module.css";

const MovieList = ({ movies }) => (
    <ul className={styles.movies}>
        {movies && //
            movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
    </ul>
);

export default MovieList;
