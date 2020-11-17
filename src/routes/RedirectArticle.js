import React from "react";
import {Typography} from "@material-ui/core";
import {useParams} from "react-router-dom";
import axios from 'axios';
function RedirectArticle(){

    const { id } = useParams();
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/news/history`, {news_id: id, timestamp: new Date()}, {withCredentials: true})
        .then(res => {
            window.location.href = res.data.url;
        })
        .catch((err) => console.log(err))

    return(
        <Typography>Redirecting... {id}</Typography>
    )
}

export default RedirectArticle;