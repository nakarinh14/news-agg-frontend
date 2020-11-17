export default function parseDate(currDate, newsDate){
    const diff = (currDate.getTime() - newsDate.getTime())/1000;
    const day = diff/(3600*24);
    if(day > 1) return `${Math.floor(day)} days ago`

    const hrs = diff/3600;
    if(hrs > 1) return `${Math.floor(hrs)} hrs ago`

    const mins = diff/60;
    if(mins > 1) return `${Math.floor(mins)} mins ago`

    return `${Math.floor(diff)} secs ago`;
}
