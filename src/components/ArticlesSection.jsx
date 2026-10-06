import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { SectionHeading } from './Section'
import ArticleCard from './ArticleCard'
import { articles } from '../data/articles'

/** Navy editorial section: مقالات آموزشی */
export default function ArticlesSection() {
  return (
    <section className="section section-articles" aria-label="مقالات آموزشی">
      <div className="container">
        <SectionHeading label="دانش فنی" title="مقالات آموزشی" />
        <div className="articles-grid">
          {articles.slice(0, 4).map((a, i) => (
            <Reveal key={a.id} delay={i * 70}><ArticleCard article={a} /></Reveal>
          ))}
        </div>
        <Reveal className="articles-more">
          <Link to="/articles" className="btn btn-outline-light">مشاهده همه مقالات</Link>
        </Reveal>
      </div>
    </section>
  )
}
