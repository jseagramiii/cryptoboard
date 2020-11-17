import { Container } from '@chakra-ui/react'
import React from 'react'
import NewsArticle from './NewsArticle'


const News = ({news}) => {
    
    return (
        <div className='scroll news'>
                {news.slice(0, 15).map((article) => (
                    <NewsArticle key={article.id} article={article}  />
                ))}
        </div>
    )
}

export default News
