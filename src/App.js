import React from 'react';
import {Grid} from "@material-ui/core";
import Header from "./Header";
import './App.css';
import NewsPost from "./NewsPost";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid>
                <Grid>
                    <Header />
                </Grid>
                <NewsPost />
            </Grid>
        </div>
    );
}

export default App;
