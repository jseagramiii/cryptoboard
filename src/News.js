import React from 'react'
import NewsArticle from './NewsArticle'

const News = ({news}) => {
    return (
        <div>
            <NewsArticle news={news} />
        </div>
    )
}

export default News
