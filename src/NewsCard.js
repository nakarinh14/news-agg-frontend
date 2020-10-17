import React from 'react';
import {Card, CardContent, Typography, CardMedia, CardActionArea} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
    },
    media: {
        height: 240,
        width: 500
    },
    thaiFont: {
        fontFamily: 'Kanit',
        fontWeight: 500,
        fontSize: 20
    },
    subFont: {
        fontWeight: 400,
        color: theme.palette.text.secondary
    },
    publisherFont: {
        textTransform: "capitalize"
    }
}))

function NewsCard(props) {

    const classes = useStyles();
    const data = props.newsData;
    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea
                disableRipple
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <CardContent>
                    <Typography
                        className={classes.thaiFont}
                        gutterBottom
                    >
                        {data.title}
                    </Typography>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Typography
                            className={`${classes.subFont} ${classes.publisherFont}`}
                            align='left'
                            display='inline'
                            variant="subtitle2"
                        >
                            {data.publisher}
                        </Typography>
                        <Typography
                            className={classes.subFont}
                            align='right'
                            display='inline'
                            variant="subtitle2"
                        >
                            {data.date}
                        </Typography>
                    </div>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    image={data.img}
                    title="Contemplative Reptile"
                />
            </CardActionArea>
        </Card>
    );
}


export default NewsCard;
