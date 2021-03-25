import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => (
    <header className={styles.header}>
        <h1 className={styles.logo}>HJDB</h1>
        {onLogout && (
            <div>
                <input type='text' placeholder='Search' />
                <button onClick={onLogout}>Logout</button>
            </div>
        )}
    </header>
);

export default Header;
