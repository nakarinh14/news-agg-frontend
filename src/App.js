import React from 'react';
import {Grid} from "@material-ui/core";
import Header from "./Header";
import './App.css';
import NewsPost from "./routes/NewsPost";
import {makeStyles} from "@material-ui/core/styles";
import {Redirect, Switch, Route} from "react-router-dom";
import Temp from "./routes/Temp"
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
    },
}));

function App() {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <div className={classes.root}>
                <Grid>
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
                </Grid>
            </div>
        </>
    );
}

export default App;
