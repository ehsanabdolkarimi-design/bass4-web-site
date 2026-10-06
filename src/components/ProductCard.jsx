import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import SmartImg from './SmartImg'
import { useStore } from '../context/StoreContext'
import { categoryLabel } from '../data/products'
import { faPrice } from '../utils/format'

/** Reusable product card — used in grids and carousels. */
export default function ProductCard({ product }) {
  const { addToCart, toggleWish, inWish } = useStore()
  const wished = inWish(product.id)

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="pc-media" aria-label={product.name}>
        <SmartImg className="pc-img" src={product.image} alt={product.name} width="300" height="300" />
      </Link>
      <button
        className={`wish-btn ${wished ? 'active' : ''}`}
        onClick={() => toggleWish(product.id)}
        aria-label={wished ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}
        aria-pressed={wished}
      >
        <Icon name="heart" size={16} />
      </button>
      <div className="pc-body">
        <span className="pc-brand">{product.brand === 'ONYX' ? 'برند ONYX' : product.brand}</span>
        <h3 className="pc-name"><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
        <p className="pc-spec">{product.short}</p>
        <div className="pc-foot">
          <span className="pc-price">{faPrice(product.price)}</span>
          <button
            className="btn btn-gold btn-sm pc-add"
            onClick={() => addToCart(product.id)}
            disabled={product.stock !== 'موجود'}
            aria-label={`افزودن ${product.name} به سبد خرید`}
          >
            <Icon name="cart" size={15} />
            افزودن
          </button>
        </div>
      </div>
      <span className="sr-only">{categoryLabel(product.category)}</span>
    </article>
  )
}
