import React from 'react';
import {Grid} from "@material-ui/core";

import NewsCard from "./NewsCard";



function NewsPost(props) {
    const newsItems = props.newsList.map(post =>
        <Grid item>
            <NewsCard newsData={post} />
        </Grid>
    );
    return (
        <Grid container direction="column" alignItems="center" spacing={2}>
            {newsItems}
        </Grid>
    );
}


export default NewsPost;
