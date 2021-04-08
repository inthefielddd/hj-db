import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
    const history = useHistory();

    //goToMovie
    //"movie"로 id와 같이 이동
    const goToMovie = (userId, name, photo) => {
        history.push({
            pathname: "/movie",
            state: {
                id: userId, //
                userName: name,
                photoURL: photo,
            },
        });
    };

    //로그인 로직
    const onLogin = (event) => {
        authService //
            .login(event.currentTarget.textContent)
            .then((data) => goToMovie(data.user.uid, data.user.displayName, data.user.photoURL));
    };

    //사용자 값이 바꼈을때
    useEffect(() => {
        authService.onAuthChange((user) => {
            console.log(user);
            user && goToMovie(user.uid, user.displayName, user.photoURL);
        });
    });

    return (
        <section className={styles.login}>
            <Header className={styles.header} />
            <section className={styles.wrapper}>
                <div className={styles.box}>
                    <h1 className={styles.title}>Login</h1>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <button className={styles.button} onClick={onLogin}>
                                <i className={`fab fa-google ${styles.icon}`}></i>
                                <span className={styles.text}>Google</span>
                            </button>
                        </li>
                        <li className={styles.item}>
                            <button className={styles.button} onClick={onLogin}>
                                <i className={`fab fa-github ${styles.icon}`}></i>
                                <span className={styles.text}>Github</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer className={styles.footer} />
        </section>
    );
};

export default Login;
