import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
import MovieApi from "./service/movie_api";

const authService = new AuthService();

const movieApi = new MovieApi(process.env.REACT_APP_MOVIE_API_KEY);

ReactDOM.render(
    <React.StrictMode>
        <App authService={authService} movieApi={movieApi} />
    </React.StrictMode>,
    document.getElementById("root")
);
