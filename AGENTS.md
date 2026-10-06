# ATRYA Electronic (BaseCode dev environment)

Persian RTL e-commerce site for آتریا الکترونیک. React 18 + Vite 6 + react-router-dom v6, plain CSS design system (no Tailwind). Fonts: Vazirmatn (Google Fonts).

## Run

```bash
docker compose -f docker-compose.base44.yml up -d
```

Vite dev server on host port 3000 (container 5173). Dependencies install at container startup against the bind-mounted source; edits hot-reload.

## Verify

- `docker compose -f docker-compose.base44.yml ps` — `web` healthy
- `curl -s http://localhost:3000/` — app HTML (SPA fallback works for all routes)
- All routes: `/`, `/shop`, `/product/:id`, `/articles`, `/article/:id`, `/about`, `/contact`, `/checkout`, `/wishlist`, `/brands`

## Structure

- `src/data/products.js` — 23 REAL products (names, prices, photos from atryaelectronic.com). Add products here.
- `src/data/articles.js` — 4 educational articles (sections, FAQ, related products)
- `src/data/site.js` — nav, top bar, benefits, business hours, contact, CDN base + logo URLs
- `src/context/StoreContext.jsx` — cart + wishlist (localStorage: `atrya-cart`, `atrya-wishlist`, `atrya-orders`)
- `src/styles/global.css` — design tokens at top: `--navy #031731`, `--gold #F7B500`
- `src/components/` — TopBar, Header (search with suggestions), CartDrawer, HeroBanner (real ATRYA banners), CategoryTabs (gold pills), ProductCard, ProductCarousel, ProductFilters, OnyxSection, WhyAtrya, ArticlesSection, HoursSection, Seo (title/meta/JSON-LD per route)

## Critical notes

- **RTL:** `<html dir="rtl" lang="fa-IR">` in index.html. Numbers via `toLocaleString('fa-IR')` / helpers in `src/utils/format.js`.
- **Images are hotlinked** from atryaelectronic.com — curl to that host fails from the sandbox (TLS), so they cannot be downloaded locally. `SmartImg` falls back to a neutral placeholder if a full-size URL 404s.
- **Vite polling is enabled** (`watch.usePolling`) — bind-mount inotify events do not propagate reliably in this sandbox; without polling, edited modules are served stale.
- Product images must NEVER be redesigned/relabeled — they are the official ONYX product photos.
- No secrets needed; no backend — all data is client-side modules structured for a later API swap. Checkout deliberately does NOT fake a payment success: it records the order and states the payment gateway is not yet connected.
- No admin panel: BaseCode runs the site as a static SPA without a database; `src/data/*` modules are the edit point for products/articles.
