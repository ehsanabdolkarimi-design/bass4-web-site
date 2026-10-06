import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { faDate, toFa } from '../utils/format'

/** Neutral editorial cover (no fake photography) — deterministic per article. */
function Cover({ article }) {
  return (
    <svg className="ac-img" viewBox="0 0 600 340" role="img" aria-label={`تصویر مقاله: ${article.title}`} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`g-${article.id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#072347" />
          <stop offset="1" stopColor="#031731" />
        </linearGradient>
      </defs>
      <rect width="600" height="340" fill={`url(#g-${article.id})`} />
      <g stroke="#f7b500" strokeWidth="1.4" opacity="0.5" fill="none">
        <path d="M40 300V160h80v140" />
        <path d="M480 40v120h80" />
        <circle cx="300" cy="170" r="70" />
        <path d="M300 100v40l24 12" />
        <rect x="120" y="60" width="60" height="24" rx="4" />
        <rect x="420" y="240" width="60" height="24" rx="4" />
        <path d="M180 72h40M440 252h40" />
        <path d="M60 90h40M60 100h24" opacity="0.7" />
      </g>
      <path d="M310 130l-40 60h28l-8 44 40-60h-28l8-44Z" fill="#f7b500" />
    </svg>
  )
}

/** Editorial article card (used on Home + Articles page). */
export default function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <Link to={`/article/${article.id}`} className="ac-media" aria-label={article.title}>
        <Cover article={article} />
        <span className="ac-cat">{article.category}</span>
      </Link>
      <div className="ac-body">
        <div className="ac-meta">
          <span><Icon name="clock" size={13} /> {toFa(article.readingTime)} دقیقه مطالعه</span>
          <span>{faDate(article.date)}</span>
        </div>
        <h3><Link to={`/article/${article.id}`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <Link to={`/article/${article.id}`} className="ac-more">ادامه مطلب <Icon name="arrowLeft" size={15} /></Link>
      </div>
    </article>
  )
}
