import React, {useState} from 'react';
import {Card, CardContent, Typography, CardMedia, IconButton} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import yellow from "@material-ui/core/colors/yellow";
import Link from '@material-ui/core/Link';

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
    },
    bookmarkIcon: {
        marginRight: 0,
    }
}))

function NewsCard(props) {

    const classes = useStyles();
    const data = props.newsData;
    const [hoverState, setHover] = useState(false)
    const [bookmarkState, setBookmark] = useState(data.bookmark_id)
    const postBookmark = (route, cond) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}${route}`,
            {

                news_id: data.id
            }, {withCredentials: true})
            .then(() => {
                setBookmark(cond);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const updateBookmark = () => {
        if(!bookmarkState){
            postBookmark('/api/news/bookmark/add', true);
        } else {
            postBookmark('/api/news/bookmark/remove', false);
        }
    }
    return (
        <Card
            className={classes.root}
            variant="outlined"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
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
                        <IconButton
                            edge="end"
                            size="small"
                            className={classes.bookmarkIcon}
                            disableRipple
                            style={{ backgroundColor: 'transparent' }}
                            onClick={updateBookmark}
                        >
                            {bookmarkState ?
                                <BookmarkIcon  style={{ color: yellow[300] }} /> :
                                <BookmarkBorderIcon
                                    style={{visibility: hoverState ? 'visible': 'hidden'}}
                                />
                            }
                        </IconButton>
                    </Grid>
                </Grid>
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
                        {data.timestamp}
                    </Typography>
                </div>
            </CardContent>
            <CardMedia
                className={classes.media}
                image={data.img}
            />
        </Card>
    );
}

export default NewsCard;
