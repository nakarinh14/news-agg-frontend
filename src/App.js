import React, {useReducer, useState} from 'react';
import {Grid} from "@material-ui/core";
import Header from "./components/header/Header";
import './App.css';
import NewsPost from "./routes/NewsPost";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import {Redirect, Switch, Route} from "react-router-dom";
import Temp from "./routes/Temp"
import CssBaseline from "@material-ui/core/CssBaseline";
import {authReducer, AuthStateContext} from "./utilities/auth_util";
import RedirectArticle from "./routes/RedirectArticle";
import History from "./routes/History";
import Bookmark from "./routes/Bookmark";
import PrivateRoute from "./components/PrivateRoute";
import {ThemeProvider} from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
    },
}));

function App() {
    const classes = useStyles();
    const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"))
    const [authReduced, dispatch] = useReducer(authReducer, {state:  isAuthenticated});
    const mediaDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [prefersDarkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("dark_mode")) || mediaDarkMode
    );

    const toggleTheme = () => {
        localStorage.setItem("dark_mode", JSON.stringify(!prefersDarkMode))
        setDarkMode(!prefersDarkMode)
    }

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                    neutral: {
                        background: '#303030'
                    }
                },
            }),
        [prefersDarkMode],
    );
    return (
        <ThemeProvider theme={theme}>
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
                                    <Header toggleTheme={toggleTheme} />
                                </Grid>
                                <Switch>
                                    <Route path="/recent">
                                        <NewsPost />
                                    </Route>
                                    <Route path="/hot">
                                        <Temp />
                                    </Route>
                                    <PrivateRoute path="/bookmarks">
                                        <Bookmark />
                                    </PrivateRoute>
                                    <PrivateRoute path="/history">
                                        <History />
                                    </PrivateRoute>
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
        </ThemeProvider>
    );
}

export default App;
