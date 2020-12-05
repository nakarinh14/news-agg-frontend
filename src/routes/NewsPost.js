import React, {useEffect, useRef, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import NewsCard from "../components/feed/NewsCard";
import axios from 'axios';
import {Typography} from "@material-ui/core";
import date_util from "../utilities/date_util";
import getFilterPublishers from "../utilities/filters_util";
import {makeStyles} from "@material-ui/core/styles";
// import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    bg: {
        backgroundColor: theme.palette.background.default
    },
}));


function NewsPost() {
    const classes = useStyles();
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1);
    const loader = useRef(null);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    }
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 0.8
        };
        const currentElement = loader.current
        const observer = new IntersectionObserver(handleObserver, options); // For infinite scrolling
        if (currentElement) {
            observer.observe(currentElement)
        }
        return () => {
            if (currentElement){
                observer.unobserve(currentElement)
            }
        }
    }, []);

    useEffect(() => {
        const fetchNews = () => {
            const current_date = new Date();
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/news`,
                {params: {publishers: getFilterPublishers() , page: page, limit: 20}, withCredentials: true}
                )
                .then(res => {
                    const requestedData = res.data
                    requestedData.forEach(data => data.timestamp = date_util(current_date, new Date(data.timestamp)))
                    setPosts(curr_posts => curr_posts.concat(requestedData))
                })
                .catch(err => {
                    console.log(err)
                })
        }
        fetchNews();
    }, [page])

    return (
        <Grid container
              direction="column"
              alignItems="center"
              className={classes.bg}
              spacing={3}
        >
            <Grid
                item
                xs={12}
            >
                <Typography
                    align="left"
                    variant="h4"
                    style={{marginTop: 10, fontWeight: 500}}
                >
                    Recent News
                </Typography>
            </Grid>
            {
                posts.map((post, index) =>
                    <Grid
                        item
                        key={index}
                        xs={12}
                    >
                        <NewsCard newsData={post} />
                    </Grid>
                )
            }
            <div ref={loader} />
        </Grid>
    );
}


export default NewsPost;
