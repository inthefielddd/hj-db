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
            <section className={styles.wrapper}>
                <h1>movie</h1>
            </section>
            <Footer />
        </section>
    );
};

export default Movie;
