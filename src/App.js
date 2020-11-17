import React, {useReducer} from 'react';
import {Grid} from "@material-ui/core";
import Header from "./components/Header";
import './App.css';
import NewsPost from "./routes/NewsPost";
import {makeStyles} from "@material-ui/core/styles";
import {Redirect, Switch, Route} from "react-router-dom";
import Temp from "./routes/Temp"
import CssBaseline from "@material-ui/core/CssBaseline";
import {authReducer, AuthStateContext} from "./utilities/auth";
import RedirectArticle from "./routes/RedirectArticle";
import History from "./routes/History";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
    },
}));

function App() {
    const classes = useStyles();
    const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"))
    const [authReduced, dispatch] = useReducer(authReducer, {state:  isAuthenticated});

    return (
        <>
            <CssBaseline />
            <div className={classes.root}>
                <Grid>
                    <AuthStateContext.Provider value={{authReduced, dispatch}}>
                        <Switch>
                            <Route path="/article/:id">
                                <RedirectArticle />
                            </Route>
                            <Route path="*">
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
                                    <Route path="/history">
                                        <History />
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
                            </Route>
                        </Switch>
                    </AuthStateContext.Provider>
                </Grid>
            </div>
        </>
    );
}

export default App;
