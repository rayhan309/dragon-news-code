import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {

    const {id} = useParams();
    const newsData = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {
        if(id == "0") {
            setCategoryNews(newsData);
        }
        else if (id == "1") {
            const filteredNews = newsData.filter(news => news?.others?.is_today_pick == true);
            setCategoryNews(filteredNews);
        }
        else if(id == 10) {
            setCategoryNews(newsData)
        }
        else{
             const filteredNews = newsData.filter(news => news?.category_id == id);
             console.log(filteredNews)
            setCategoryNews(filteredNews);
        }
    }, [id, newsData]);

    return (
        <div>
            <h3>Dragon News ({categoryNews.length}) Founds</h3>

            <div>
                {
                    categoryNews.map(news => <NewsCard key={news?.id} news={news} />)
                }
            </div>
        </div>
    );
};

export default CategoryNews;