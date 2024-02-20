import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9679971591c04c0289a007cd24ddbd7e`;

        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));

    },[])
  return (
    <div className='container my-3 '>
      <h2 className='text-center my-2'>Latest <span className='badge bg-danger  '>News</span></h2>
     <div className='row justify-content-center'>
     {
        articles.map((news,index) =>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>

        })
      }
     </div>
    
    </div>
  )
}

export default NewsBoard
