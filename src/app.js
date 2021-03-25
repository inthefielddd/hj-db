import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Movie from "./components/movie/movie";

function App({ authService }) {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Login authService={authService} />
                    </Route>
                    <Route exact path='/movie'>
                        <Movie authService={authService} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
