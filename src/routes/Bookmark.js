import React, {useEffect, useState} from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import date_util from "../utilities/date_util";
import NewsCardBookmark from "../components/feed/NewsCardBookmark";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default
    }
}));

function Bookmark() {
    const [posts, setPosts] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const fetchHistory = () => {
            const current_date = new Date();
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/news/bookmark`,
                {withCredentials: true}
            )
                .then(res => {
                    const requestedData = res.data;
                    requestedData.forEach(data => data.timestamp = date_util(current_date, new Date(data.timestamp)));
                    setPosts(curr_posts => curr_posts.concat(requestedData))
                })
                .catch(err => {
                    console.log(err)
                })
        }
        fetchHistory();
    }, [])

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            className={classes.root}
            spacing={3}
        >
            <Grid
                item
                xs={12}>
                <Typography
                    align="left"
                    variant="h4"
                    style={{marginTop: 10, fontWeight: 500}}>Bookmarks</Typography>

            </Grid>
            {
                posts.map((post, index) =>
                    <Grid
                        item
                        key={index}
                        xs={12}
                    >
                        <NewsCardBookmark newsData={post}/>
                    </Grid>
                )
            }
        </Grid>
    );
}

export default Bookmark;