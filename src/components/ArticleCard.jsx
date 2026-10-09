import React from 'react'
import SmartImg from './SmartImg'
import Icon from './Icon'
import { toFa } from '../utils/format'

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
        <div className="ac-meta">
          <span><Icon name="clock" size={13} /> {toFa(article.readingTime)} دقیقه مطالعه</span>
        </div>
        <h3>
          <a href={article.url} target="_blank" rel="noopener">{article.title}</a>
        </h3>
        <a href={article.url} target="_blank" rel="noopener" className="ac-more">
          بیشتر بخوانید
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
        </a>
      </div>
    </article>
  )
}
