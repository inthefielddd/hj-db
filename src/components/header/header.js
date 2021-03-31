import React, { useRef } from "react";
import { useHistory } from "react-router";
import styles from "./header.module.css";

const Header = ({ onLogout, onSearch }) => {
    const inputRef = useRef();
    const history = useHistory();

    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    };

    const onClick = () => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const onLogo = () => {
        history.push("/");
    };
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.logo} onClick={onLogo}>
                    HJDB
                </h1>
            </div>
            {onLogout && (
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={`${styles.button} ${styles.search}`} onClick={onClick}>
                            <div>
                                <i className={`fas fa-search ${styles.icon}`}></i>
                            </div>
                            <span className={styles.text}>검색</span>
                        </button>
                        <input ref={inputRef} className={styles.input} type='text' placeholder='Search' onKeyPress={onKeyPress} />
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button}>
                            <i className={`fas fa-user ${styles.icon}`}></i>
                        </button>
                    </li>

                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogout}>
                            <i className={`fas fa-sign-out-alt ${styles.icon}`}></i>
                        </button>
                    </li>
                </ul>
            )}
        </header>
    );
};

export default Header;
