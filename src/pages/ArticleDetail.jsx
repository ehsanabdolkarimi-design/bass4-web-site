import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Section'
import Icon from '../components/Icon'
import ArticleCard from '../components/ArticleCard'
import Seo from '../components/Seo'
import { getArticle, articles } from '../data/articles'
import { getProduct } from '../data/products'
import { faDate, toFa } from '../utils/format'

export default function ArticleDetail() {
  const { id } = useParams()
  const article = getArticle(id)

  if (!article) {
    return (
      <section className="page-hero"><div className="container">
        <h1>مقاله یافت نشد</h1>
        <Link to="/articles" className="btn btn-gold" style={{ marginTop: 20 }}>بازگشت به مقالات</Link>
      </div></section>
    )
  }

  const relatedProducts = (article.relatedProducts || []).map(getProduct).filter(Boolean)
  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 3)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.excerpt,
      datePublished: article.date,
      author: { '@type': 'Organization', name: 'تیم فنی آتریا الکترونیک' },
      publisher: { '@type': 'Organization', name: 'آتریا الکترونیک' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faq.map(([q, a]) => ({
        '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ]

  const shareUrl = `https://atryaelectronic.com/#/article/${article.id}`

  return (
    <>
      <Seo title={article.title} description={article.excerpt} jsonLd={jsonLd} />
      <section className="page-hero" aria-label={article.title}>
        <div className="container">
          <Breadcrumbs items={[
            { label: 'صفحه اصلی', to: '/' },
            { label: 'مقالات آموزشی', to: '/articles' },
            { label: article.title },
          ]} />
          <span className="article-hero-cat">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <div className="article-hero-meta">
            <span><Icon name="user" size={14} /> تیم فنی آتریا الکترونیک</span>
            <span><Icon name="clock" size={14} /> {toFa(article.readingTime)} دقیقه مطالعه</span>
            <span>{faDate(article.date)}</span>
          </div>
        </div>
      </section>

      <section className="section" aria-label="متن مقاله">
        <div className="container article-layout">
          <article className="article-content">
            <nav className="article-toc" aria-label="فهرست مطالب">
              <strong>فهرست مطالب</strong>
              <ol>
                {article.sections.map((s) => <li key={s.h2}><a href={`#${encodeURIComponent(s.h2)}`}>{s.h2}</a></li>)}
              </ol>
            </nav>

            {article.sections.map((s) => (
              <section key={s.h2} id={encodeURIComponent(s.h2)}>
                <h2>{s.h2}</h2>
                <p>{s.p}</p>
              </section>
            ))}

            <h2>سوالات متداول</h2>
            <div className="faqs">
              {article.faq.map(([q, a], n) => (
                <div className="faq open" key={q}>
                  <h3 className="faq-q-static">{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </div>

            <div className="article-share">
              <span>اشتراک‌گذاری:</span>
              <a href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer">تلگرام</a>
              <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer">واتس‌اپ</a>
              <a href={shareUrl}>کپی لینک</a>
            </div>
          </article>

          <aside className="article-side">
            {relatedProducts.length > 0 && (
              <>
                <h3>محصولات مرتبط</h3>
                <ul className="side-products">
                  {relatedProducts.map((p) => (
                    <li key={p.id}>
                      <Link to={`/product/${p.id}`}>
                        <img src={p.image} alt={p.name} width="56" height="56" loading="lazy" />
                        <span>{p.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h3>مقالات مرتبط</h3>
            <ul className="side-articles">
              {relatedArticles.map((a) => (
                <li key={a.id}><Link to={`/article/${a.id}`}>{a.title}</Link></li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
