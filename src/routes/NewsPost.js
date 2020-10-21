import React, {useEffect, useRef, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import NewsCard from "../components/NewsCard";
import axios from 'axios';
// import CircularProgress from "@material-ui/core/CircularProgress";

const parseDate = (currDate, newsDate) => {
    const diff = (currDate.getTime() - newsDate.getTime())/1000;
    const day = diff/(3600*24);
    if(day > 1) return `${Math.floor(day)} days ago`

    const hrs = diff/3600;
    if(hrs > 1) return `${Math.floor(hrs)} hrs ago`

    const mins = diff/60;
    if(mins > 1) return `${Math.floor(mins)} mins ago`

    return `${Math.floor(diff)} secs ago`;
}

function NewsPost() {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1);
    const loader = useRef(null);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    }
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 0.8
        };
        const observer = new IntersectionObserver(handleObserver, options); // For infinite scrolling
        if (loader.current) {
            observer.observe(loader.current)
        }
    }, []);

    useEffect(() => {
        const news_list = [
            {
                url: "https://www.posttoday.com/ent/news/635062",
                category: "entertainment",
                date: "2020-10-09 16:00:00+07",
                title: "คนใกล้ชิด “ซาร่า” แจงภาพอัลตราซาวด์ปลอม ทำไมเหมือนของ “เซเลน่า โกเมซ”",
                desc: "คนใกล้ชิด “ซาร่า” ช่วยเคลียร์ภาพอัลตราซาวด์ปลอม ทำไมเหมือนของ “เซเลน่า โกเมซ”",
                publisher: "posttoday",
            },
            {
                url: "https://www.sanook.com/news/8271814/",
                img:"https://s.isanook.com/ns/0/ud/1654/8271814/home.jpg",
                category: "entertainment",
                date: "2020-10-09 16:10:00+07",
                title: "เผยภาพบ้านหรู 15 ล้าน จมน้ำท่วม คนกรุงหนีไปเขาใหญ่แต่ไม่รอด”",
                desc: "คนใกล้ชิด “ซาร่า” ช่วยเคลียร์ภาพอัลตราซาวด์ปลอม ทำไมเหมือนของ “เซเลน่า โกเมซ”",
                publisher: "posttoday",
            },
            {
                url: "https://www.posttoday.com/ent/news/635062",
                category: "entertainment",
                date: "2020-10-09 16:20:00+07",
                title: "คนใกล้ชิด “ซาร่า” แจงภาพอัลตราซาวด์ปลอม ทำไมเหมือนของ “เซเลน่า โกเมซ”",
                desc: "คนใกล้ชิด “ซาร่า” ช่วยเคลียร์ภาพอัลตราซาวด์ปลอม ทำไมเหมือนของ “เซเลน่า โกเมซ”",
                publisher: "posttoday",
            },
            {
                url: "https://www.thairath.co.th/news/foreign/1950076",
                img: "https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GBwSJPtW3bqy1LXY7m.jpg",
                category: "entertainment",
                date: "2020-10-17 16:00:00+07",
                title: "สรุปข่าวต่างประเทศรอบสัปดาห์ ดีเบตปธน.สหรัฐฯยกเลิก ยอดโควิดทั่วโลกพุ่ง”",
                desc: "แม็กซ์ตัดความสัมพันธ์กับปานแก้วแล้ว และกำลังมีผู้หญิงคนใหม่อีก เอมฟิวส์ขาด รับไม่ได้อีกแล้ว ตัดสินใจขอหย่า ยิ่งทำให้แม็กซ์ไม่พอใจ”",
                publisher: "thairath",
            },
            {
                url: "https://www.thairath.co.th/entertain/news/1949079",
                img: "https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GBwzLEtNIh1ciXakHw.jpg",
                category: "entertainment",
                date: "2020-10-16 16:00:00+07",
                title: "ร้อยเล่ห์มารยา EP.4 เบลล่า ขอหย่า หลุยส์ เพราะทนความเจ้าชู้ไม่ไหว”",
                desc: "แม็กซ์ตัดความสัมพันธ์กับปานแก้วแล้ว และกำลังมีผู้หญิงคนใหม่อีก เอมฟิวส์ขาด รับไม่ได้อีกแล้ว ตัดสินใจขอหย่า ยิ่งทำให้แม็กซ์ไม่พอใจ”",
                publisher: "thairath",
            },
            {
                url: "https://www.thairath.co.th/entertain/news/1949079",
                img: "https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GBwzLEtNIh1ciXakHw.jpg",
                category: "entertainment",
                date: "2020-10-17 16:08:00+07",
                title: "ร้อยเล่ห์มารยา EP.4 เบลล่า ขอหย่า หลุยส์ เพราะทนความเจ้าชู้ไม่ไหว”",
                desc: "แม็กซ์ตัดความสัมพันธ์กับปานแก้วแล้ว และกำลังมีผู้หญิงคนใหม่อีก เอมฟิวส์ขาด รับไม่ได้อีกแล้ว ตัดสินใจขอหย่า ยิ่งทำให้แม็กซ์ไม่พอใจ”",
                publisher: "thairath",
            }
        ]
        const fetchNews = (condition) => {
            const current_date = new Date();
            if(condition){ // Get news... should contain query parameters. for now us fake data.
                news_list.forEach(data => data.date = parseDate(current_date, new Date(data.date)))
                setPosts((curr_posts) => curr_posts.concat(news_list))
            } else{
                axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/news`,
                    {
                        params: {
                            page: page,
                            limit: 20
                        }})
                    .then(res => {
                        const requestedData = res.data
                        console.log(requestedData)
                        requestedData.forEach(data => data.date = parseDate(current_date, new Date(data.date)))
                        setPosts(curr_posts => curr_posts.concat(requestedData))
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
        fetchNews(false);
    }, [page])

    return (
        <Grid container
              direction="column"
              alignItems="center"
              spacing={3}
        >
            {
                posts.map((post, index) =>
                    <Grid
                        item
                        key={index}
                        xs={12}
                    >
                        <NewsCard newsData={post} />
                    </Grid>
                )
            }
            <div ref={loader} />
            {/*<CircularProgress />*/}
        </Grid>
    );
}


export default NewsPost;
