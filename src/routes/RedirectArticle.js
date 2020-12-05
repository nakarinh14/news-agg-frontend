import React from "react";
import {Typography} from "@material-ui/core";
import {useParams} from "react-router-dom";
import axios from 'axios';
function RedirectArticle(){

    const { id, url } = useParams();

    console.log(id)
    console.log(url)
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/news/history`, {news_id: id, timestamp: new Date()}, {withCredentials: true})
        .finally(() => {window.location.href = url})

    return(
        <Typography>Redirecting... {id}</Typography>
    )
}

export default RedirectArticle;