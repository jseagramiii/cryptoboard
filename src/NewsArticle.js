import React from 'react'

const NewsArticle = ({ article }) => {
  return (
    <div className='article'>
      <a href={article.url}>
        <h3>
          <em>{article.title}</em>
        </h3>
      </a>
      <p>
        <em>"{article.body}"</em>
      </p>
      <a href={article.url}>
        <span>
          <img
            style={{ maxWidth: '15em' }}
            src={article.imageurl}
            alt='article'
          />
        </span>
      </a>
      <h4>Source - {article.source}</h4>
      <hr />
    </div>
  )
}

export default NewsArticle
