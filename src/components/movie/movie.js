import React, { useEffect, useState } from "react";
import styles from "./movie.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router";
import MovieList from "../movie_list/movie_list";
import MovieItem from "../movie_item/movie_item";

const Movie = ({ authService, movieApi }) => {
    const history = useHistory();
    const [movies, setMovies] = useState([]);

    //인기있는 영화
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topratedMovies, setTopratedMovies] = useState([]);

    const onLogout = () => {
        authService.logout();
    };
    //search
    const search = (query) => {
        movieApi //
            .search(query)
            .then((movies) => {
                setMovies(movies);
                setPopularMovies(null);
                setUpcomingMovies(null);
                setTopratedMovies(null);
            });
    };

    //인기있는 영화 목록가져오기
    useEffect(() => {
        movieApi //
            .popular()
            .then((movies) => {
                setPopularMovies(movies);
            });
    }, [movieApi]);

    //개봉예정작
    useEffect(() => {
        movieApi //
            .upcoming()
            .then((movies) => {
                setUpcomingMovies(movies);
            });
    }, [movieApi]);

    //인기순위
    useEffect(() => {
        movieApi //
            .topRated()
            .then((movies) => {
                setTopratedMovies(movies);
            });
    }, [movieApi]);

    //유저가 없다면 다시 홈화면 렌더
    useEffect(() => {
        authService.onAuthChange((user) => {
            if (!user) {
                history.push("/");
            }
        });
    });
    return (
        <section className={styles.movie}>
            <Header className={styles.header} onLogout={onLogout} onSearch={search} />

            <section className={styles.category}>
                {search && (
                    <div className={styles.search_movies}>
                        {movies.map((movie) => (
                            <>
                                <h2 className={styles.title}>Searching Movie: {movie.title}</h2>
                                <MovieItem movie={movie} />
                            </>
                        ))}
                    </div>
                )}

                <div className={styles.toprated}>
                    <h2 className={styles.title}>Top Rated Movies</h2>
                    <MovieList movies={topratedMovies} />
                </div>

                <div className={styles.popular}>
                    <h2 className={styles.title}>Popular Movies</h2>
                    <MovieList movies={popularMovies} />
                </div>

                <div className={styles.upcoming}>
                    <h2 className={styles.title}>Upcoming Movies</h2>
                    <MovieList movies={upcomingMovies} />
                </div>
            </section>
            <Footer />
        </section>
    );
};

export default Movie;
