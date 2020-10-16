import React from 'react';
import {Grid, Button} from "@material-ui/core";
import Header from "./Header";
import './App.css';
import NewsPost from "./NewsPost";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const news_list = [
    {
        url: "https://www.posttoday.com/ent/news/635062",
        category: "entertainment",
        date: "35 min ago",
        title: "คนใกล้ชิด “ซาร่า” แจงภาพอัลตราซาวด์ปลอม ทำไมเหมือนของ “เซเลน่า โกเมซ”",
        desc: "คนใกล้ชิด “ซาร่า” ช่วยเคลียร์ภาพอัลตราซาวด์ปลอม ทำไมเหมือนของ “เซเลน่า โกเมซ”",
        publisher: "posttoday",
    },
    {
        url: "https://www.sanook.com/news/8271814/",
        img:"https://s.isanook.com/ns/0/ud/1654/8271814/home.jpg",
        category: "entertainment",
        date: "35 min ago",
        title: "เผยภาพบ้านหรู 15 ล้าน จมน้ำท่วม คนกรุงหนีไปเขาใหญ่แต่ไม่รอด”",
        desc: "คนใกล้ชิด “ซาร่า” ช่วยเคลียร์ภาพอัลตราซาวด์ปลอม ทำไมเหมือนของ “เซเลน่า โกเมซ”",
        publisher: "posttoday",
    },
    {
        url: "https://www.posttoday.com/ent/news/635062",
        category: "entertainment",
        date: "35 min ago",
        title: "คนใกล้ชิด “ซาร่า” แจงภาพอัลตราซาวด์ปลอม ทำไมเหมือนของ “เซเลน่า โกเมซ”",
        desc: "คนใกล้ชิด “ซาร่า” ช่วยเคลียร์ภาพอัลตราซาวด์ปลอม ทำไมเหมือนของ “เซเลน่า โกเมซ”",
        publisher: "posttoday",
    },
    {
        url: "https://www.thairath.co.th/news/foreign/1950076",
        img: "https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GBwSJPtW3bqy1LXY7m.jpg",
        category: "entertainment",
        date: "1 hour ago",
        title: "สรุปข่าวต่างประเทศรอบสัปดาห์ ดีเบตปธน.สหรัฐฯยกเลิก ยอดโควิดทั่วโลกพุ่ง”",
        desc: "แม็กซ์ตัดความสัมพันธ์กับปานแก้วแล้ว และกำลังมีผู้หญิงคนใหม่อีก เอมฟิวส์ขาด รับไม่ได้อีกแล้ว ตัดสินใจขอหย่า ยิ่งทำให้แม็กซ์ไม่พอใจ”",
        publisher: "thairath",
    },
    {
        url: "https://www.thairath.co.th/entertain/news/1949079",
        img: "https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GBwzLEtNIh1ciXakHw.jpg",
        category: "entertainment",
        date: "2 hour ago",
        title: "ร้อยเล่ห์มารยา EP.4 เบลล่า ขอหย่า หลุยส์ เพราะทนความเจ้าชู้ไม่ไหว”",
        desc: "แม็กซ์ตัดความสัมพันธ์กับปานแก้วแล้ว และกำลังมีผู้หญิงคนใหม่อีก เอมฟิวส์ขาด รับไม่ได้อีกแล้ว ตัดสินใจขอหย่า ยิ่งทำให้แม็กซ์ไม่พอใจ”",
        publisher: "thairath",
    },
    {
        url: "https://www.thairath.co.th/entertain/news/1949079",
        img: "https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GBwzLEtNIh1ciXakHw.jpg",
        category: "entertainment",
        date: "15 min ago",
        title: "ร้อยเล่ห์มารยา EP.4 เบลล่า ขอหย่า หลุยส์ เพราะทนความเจ้าชู้ไม่ไหว”",
        desc: "แม็กซ์ตัดความสัมพันธ์กับปานแก้วแล้ว และกำลังมีผู้หญิงคนใหม่อีก เอมฟิวส์ขาด รับไม่ได้อีกแล้ว ตัดสินใจขอหย่า ยิ่งทำให้แม็กซ์ไม่พอใจ”",
        publisher: "thairath",
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid>
                <Grid>
                    <Header />
                </Grid>

                    className={classes.paper}
                >
                <NewsPost newsList={news_list} />

            </Grid>
        </div>
    );
}

export default App;
