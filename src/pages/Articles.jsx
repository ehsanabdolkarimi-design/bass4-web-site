import React from 'react'
import { Breadcrumbs } from '../components/Section'
import ArticleCard from '../components/ArticleCard'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { articles } from '../data/articles'
import { toFa } from '../utils/format'

export default function Articles() {
  return (
    <>
      <Seo title="مقالات آموزشی" description="مقالات آموزشی آتریا الکترونیک درباره پاور سوئیچینگ، انتخاب ولتاژ و آمپر و ایرادهای رایج منابع تغذیه." />
      <section className="page-hero" aria-label="مقالات آموزشی">
        <div className="container">
          <Breadcrumbs items={[{ label: 'صفحه اصلی', to: '/' }, { label: 'مقالات آموزشی' }]} />
          <h1>مقالات آموزشی</h1>
          <p>دانش فنی پاور سوئیچینگ و منابع تغذیه — به زبان ساده و دقیق</p>
        </div>
      </section>

      <section className="section" aria-label="فهرست مقالات">
        <div className="container">
          <div className="articles-grid">
            {articles.map((a, i) => (
              <Reveal key={a.id} delay={i * 60}><ArticleCard article={a} /></Reveal>
            ))}
          </div>
          <p className="articles-note">{toFa(articles.length)} مقاله منتشر شده — هر هفته مقاله جدید اضافه می‌شود.</p>
        </div>
      </section>
    </>
  )
}
