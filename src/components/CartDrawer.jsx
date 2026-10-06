import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from './Icon'
import { useStore } from '../context/StoreContext'
import { products } from '../data/products'
import { faPrice } from '../utils/format'

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQty, removeFromCart, clearCart } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setCartOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [setCartOpen])

  const items = cart
    .map((x) => ({ ...x, product: products.find((p) => p.id === x.id) }))
    .filter((x) => x.product)
  const subtotal = items.reduce((s, x) => s + x.product.price * x.qty, 0)

  return (
    <>
      <div className={`drawer-backdrop ${cartOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)} aria-hidden={!cartOpen} />
      <aside
        className={`cart-drawer ${cartOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="سبد خرید"
        aria-hidden={!cartOpen}
      >
        <div className="drawer-head">
          <h3>سبد خرید</h3>
          <button className="icon-btn" onClick={() => setCartOpen(false)} aria-label="بستن سبد خرید"><Icon name="x" size={20} /></button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <Icon name="cart" size={44} />
            <p>سبد خرید شما خالی است.</p>
            <Link to="/shop" className="btn btn-primary" onClick={() => setCartOpen(false)}>مشاهده محصولات</Link>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="cart-item">
                  <Link to={`/product/${product.id}`} onClick={() => setCartOpen(false)}>
                    <img src={product.image} alt={product.name} width="64" height="64" loading="lazy" />
                  </Link>
                  <div className="ci-info">
                    <Link to={`/product/${product.id}`} className="ci-name" onClick={() => setCartOpen(false)}>{product.name}</Link>
                    <span className="ci-price">{faPrice(product.price)}</span>
                    <div className="qty-row">
                      <div className="qty" aria-label="تعداد">
                        <button onClick={() => updateQty(product.id, qty - 1)} aria-label="کاهش تعداد">−</button>
                        <span>{qty.toLocaleString('fa-IR')}</span>
                        <button onClick={() => updateQty(product.id, qty + 1)} aria-label="افزایش تعداد">+</button>
                      </div>
                      <button className="ci-remove" onClick={() => removeFromCart(product.id)} aria-label={`حذف ${product.name}`}>
                        <Icon name="trash" size={16} /> حذف
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="drawer-foot">
              <div className="drawer-total">
                <span>جمع کل:</span>
                <strong>{faPrice(subtotal)}</strong>
              </div>
              <button className="btn btn-gold btn-block" onClick={() => { setCartOpen(false); navigate('/checkout') }}>ادامه و تسویه حساب</button>
              <button className="btn btn-outline btn-block" onClick={() => { setCartOpen(false); navigate('/shop') }}>ادامه خرید</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
