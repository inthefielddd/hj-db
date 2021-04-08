import React from "react";
import styles from "./movie_detail.module.css";
import Modal from "react-modal";

const MovieDetail = ({ movie }) => {
    console.log(movie);
    return (
        <Modal isOpen={true}>
            <section className={styles.detail}>
                <iframe
                    className={styles.movie}
                    title='youtube video player'
                    type='text/html'
                    width='100%'
                    height='500px'
                    src={`https://www.youtube.com/embed/${movie.id}`}
                    frameBorder='0'
                    allowFullScreen></iframe>
                <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <h3>개봉일:{movie.release_date}</h3>
                <h4>예상평점:{movie.vote_average}</h4>
                <ul>
                    <li>{movie.genre}</li>
                </ul>
            </section>
        </Modal>
    );
};

export default MovieDetail;
