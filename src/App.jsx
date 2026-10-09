import React, { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { StoreProvider } from './context/StoreContext'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import OrderForm from './pages/OrderForm'
import Wishlist from './pages/Wishlist'
import Brands from './pages/Brands'

function ScrollToTop() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search])
  return null
}

function NotFound() {
  return (
    <section className="page-hero"><div className="container">
      <h1>صفحه یافت نشد</h1>
      <p style={{ marginTop: 12 }}>ممکن است آدرس تغییر کرده باشد.</p>
      <Link to="/" className="btn btn-gold" style={{ marginTop: 20 }}>بازگشت به صفحه اصلی</Link>
    </div></section>
  )
}

export default function App() {
  return (
    <StoreProvider>
      <ScrollToTop />
      <TopBar />
      <Header />
      <CartDrawer />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-form" element={<OrderForm />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </StoreProvider>
  )
}
