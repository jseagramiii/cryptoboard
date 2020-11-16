import React from 'react'
import NewsArticle from './NewsArticle'

const News = ({news}) => {
    return (
        <div>
             {news.slice(0, 7).map((article) => (
                <NewsArticle key={article.id} article={article}  />
            ))}
        </div>
    )
}

export default News
