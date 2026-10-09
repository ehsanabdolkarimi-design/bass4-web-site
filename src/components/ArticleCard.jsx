import React from 'react'
import SmartImg from './SmartImg'

/** Real blog-post card — same image and link as atryaelectronic.com/blog/ */
export default function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <a
        href={article.url}
        target="_blank"
        rel="noopener"
        className="ac-media"
        aria-label={article.title}
      >
        <SmartImg src={article.image} alt={article.title} className="ac-img" />
      </a>
      <div className="ac-body">
        <h3>
          <a href={article.url} target="_blank" rel="noopener">{article.title}</a>
        </h3>
      </div>
    </article>
  )
}
