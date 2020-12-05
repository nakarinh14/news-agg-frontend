import React, {useEffect, useState} from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import date_util from "../utilities/date_util";
import NewsCardSm from "../components/feed/NewsCardSm";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default
    },
}));

function History(){
    const [posts, setPosts] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        const fetchHistory = () => {
            const current_date = new Date();
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/news/history`,
                {withCredentials: true}
            )
                .then(res => {
                    const requestedData = res.data;
                    requestedData.forEach(data => data.last_access = date_util(current_date, new Date(data.last_access)));
                    setPosts(curr_posts => curr_posts.concat(requestedData))
                })
                .catch(err => {
                    console.log(err)
                })
        }
        fetchHistory();
    }, [])

    return (
        <Grid container
              direction="column"
              alignItems="center"
              spacing={3}
              className={classes.root}
        >
            <Grid
                item
                xs={12}>
                <Typography
                    align="left"
                    variant="h4"
                    style={{marginTop: 10, fontWeight: 500}} >History</Typography>

            </Grid>
            {
                posts.map((post, index) =>
                    <Grid
                        item
                        key={index}
                        xs={12}
                    >
                        <NewsCardSm newsData={post} />
                    </Grid>
                )
            }
        </Grid>
    );
}

export default History;