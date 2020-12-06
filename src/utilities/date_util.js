export default function date_util(currDate, newsDate) {

    currDate = Date.UTC(currDate.getUTCFullYear(),currDate.getUTCMonth(), currDate.getUTCDate() ,
        currDate.getUTCHours(), currDate.getUTCMinutes(), currDate.getUTCSeconds(), currDate.getUTCMilliseconds());

    newsDate = Date.UTC(newsDate.getUTCFullYear(),newsDate.getUTCMonth(), newsDate.getUTCDate() ,
        newsDate.getUTCHours(), newsDate.getUTCMinutes(), newsDate.getUTCSeconds(), newsDate.getUTCMilliseconds());

    const diff = (currDate - newsDate)/1000;
    const day = diff/(3600*24);
    if(day > 1) return `${Math.floor(day)} days ago`

    const hrs = diff/3600;
    if(hrs > 1) return `${Math.floor(hrs)} hrs ago`

    const mins = diff/60;
    if(mins > 1) return `${Math.floor(mins)} mins ago`

    return `${Math.floor(diff)} secs ago`;
}
