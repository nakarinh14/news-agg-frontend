
const publishers = ["thairath", "posttoday", "blognone", "matichon"]

export default function getFilterPublishers(){
    const tmp = localStorage.getItem("publisherFilters");
    return tmp ? JSON.parse(tmp) : publishers
}
