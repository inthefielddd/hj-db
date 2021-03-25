import React, { useEffect } from "react";
import styles from "./movie.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router";

const Movie = ({ authService }) => {
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange((user) => {
            if (!user) {
                history.push("/");
            }
        });
    });
    return (
        <section className={styles.movie}>
            <Header onLogout={onLogout} />
            <h1>movie</h1>
            <Footer />
        </section>
    );
};

export default Movie;
