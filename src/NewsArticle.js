import React from 'react'

const NewsArticle = ({article}) => {
    return (
        <div>
            <h3><em>{article.title}</em></h3>
            <h4>Source - <strong>{article.source}</strong></h4>
            <a href={article.guid}>{article.guid}</a>
            <span><img src={article.imageurl} alt="article"/></span>
            <span style={{fontSize: '2em'}}>{article.body}</span>
            <hr/>
        </div>
    )
}

export default NewsArticle
