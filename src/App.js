import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import Header from "./components/Header";
import './App.css';
import NewsPost from "./routes/NewsPost";
import {makeStyles} from "@material-ui/core/styles";
import {Redirect, Switch, Route} from "react-router-dom";
import Temp from "./routes/Temp"
import CssBaseline from "@material-ui/core/CssBaseline";
import {AuthStateContext} from "./context/auth-context";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
    },
}));

function App() {
    const classes = useStyles();
    const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"))
    const [authState, setAuthState] = useState(isAuthenticated)
    const setAuth = (condition) => {
        localStorage.setItem("isAuthenticated", JSON.stringify(condition))
        setAuthState(condition)
    }
    return (
        <>
            <CssBaseline />
            <div className={classes.root}>
                <Grid>
                    <AuthStateContext.Provider value={{authState, setAuth}}>
                        <Grid>
                            <Header />
                        </Grid>
                        <Switch>
                            <Route path="/recent">
                                <NewsPost />
                            </Route>
                            <Route path="/hot">
                                <Temp />
                            </Route>
                            <Route path="/bookmarks">
                                <Temp />
                            </Route>
                            <Route
                                path="/"
                                render={() => {
                                    return (
                                        <Redirect to="/recent" />
                                    )
                                }}
                            />
                        </Switch>
                    </AuthStateContext.Provider>
                </Grid>
            </div>
        </>
    );
}

export default App;
