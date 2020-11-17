import React from 'react'

const NewsArticle = ({article}) => {

    return (
        <div className='article'>
            <hr/>
            <a href={article.url}>
                <h2><em>{article.title}</em></h2>
            </a>
            <h4>Source - {article.source}</h4>
            <span><img style={{maxWidth: '10em'}} src={article.imageurl} alt="article"/></span>
            <span style={{fontSize: '1em'}}><p>"{article.body}"</p></span>   
        </div>
    )
}

export default NewsArticle
