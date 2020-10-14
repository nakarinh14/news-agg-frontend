import React from 'react';
import {Card, CardHeader, CardContent, Typography, CardMedia} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 100,
        width: 250
    },
}))

function NewsCard(props) {

    const classes = useStyles();
    const data = props.newsData;
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                title={data.title}
                subheader={data.date}>

            </CardHeader>
            <CardMedia
                className={classes.media}
                image={data.img}
                title="Contemplative Reptile"
            >

            </CardMedia>
            <CardContent>
                <Typography
                    variant="caption">
                    {data.desc}
                </Typography>
            </CardContent>
        </Card>
    );
}


export default NewsCard;
