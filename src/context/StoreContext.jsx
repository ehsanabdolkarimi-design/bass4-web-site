import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'

const CART_KEY = 'atrya-cart'
const WISH_KEY = 'atrya-wishlist'

const read = (key, fallback = []) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback
  } catch {
    return fallback
  }
}

const StoreContext = createContext(null)
export const useStore = () => useContext(StoreContext)

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => read(CART_KEY))
  const [wishlist, setWishlist] = useState(() => read(WISH_KEY))
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => { localStorage.setItem(CART_KEY, JSON.stringify(cart)) }, [cart])
  useEffect(() => { localStorage.setItem(WISH_KEY, JSON.stringify(wishlist)) }, [wishlist])

  // cart items: [{ id, qty }]
  const addToCart = useCallback((id, qty = 1) => {
    setCart((c) => {
      const found = c.find((x) => x.id === id)
      if (found) return c.map((x) => (x.id === id ? { ...x, qty: Math.min(x.qty + qty, 99) } : x))
      return [...c, { id, qty }]
    })
    setCartOpen(true)
  }, [])

  const updateQty = useCallback((id, qty) => {
    setCart((c) => (qty <= 0 ? c.filter((x) => x.id !== id) : c.map((x) => (x.id === id ? { ...x, qty: Math.min(qty, 99) } : x))))
  }, [])

  const removeFromCart = useCallback((id) => setCart((c) => c.filter((x) => x.id !== id)), [])
  const clearCart = useCallback(() => setCart([]), [])

  const toggleWish = useCallback((id) => {
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]))
  }, [])

  const cartCount = useMemo(() => cart.reduce((n, x) => n + x.qty, 0), [cart])
  const inCart = useCallback((id) => cart.some((x) => x.id === id), [cart])
  const inWish = useCallback((id) => wishlist.includes(id), [wishlist])

  return (
    <StoreContext.Provider
      value={{ cart, cartCount, addToCart, updateQty, removeFromCart, clearCart, wishlist, toggleWish, inWish, inCart, cartOpen, setCartOpen }}
    >
      {children}
    </StoreContext.Provider>
  )
}
