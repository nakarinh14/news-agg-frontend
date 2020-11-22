import React from 'react';
import {Card, CardContent, Typography, CardMedia} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content:{
        display: 'flex',
        flexDirection: 'column',
        width: 450,
    },
    media: {
        width: 130
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
    },
    bookmarkIcon: {
        marginRight: 0,
    }
}))

function NewsCardSm(props) {

    const classes = useStyles();
    const data = props.newsData;

    return (
        <Card
            className={classes.root}
            variant="outlined"
        >
            <div className={classes.content}>
                <CardContent>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                    >
                        <Grid
                            item
                            xs={11}
                        >
                            <Typography
                                className={classes.thaiFont}
                                gutterBottom
                            >
                                <Link target="_blank" href={"/article/"+data.id} color="inherit">
                                    {data.title}
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            direction="column"
                            xs
                        >
                        </Grid>
                    </Grid>
                    <div style={{display: "flex", justifyContent: "space-between", marginTop: "10px"}}>
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
                            Visit {data.last_access}
                        </Typography>
                    </div>
                </CardContent>
            </div>
            <CardMedia
                className={classes.media}
                image={data.img}
            />
        </Card>
    );
}

export default NewsCardSm;
