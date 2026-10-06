# Horizon Properties (BaseCode dev environment)

Premium real estate website. React 18 + Vite 6 + react-router-dom v6, plain CSS design system (no Tailwind).

## Run

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

Serves the Vite dev server on host port 3000 (container 5173). Dependencies are installed at container startup (`npm install`) against the bind-mounted source — edits hot-reload.

## Verify

- `docker compose -f docker-compose.base44.yml ps` — `web` should be `healthy`
- `curl -s http://localhost:3000/ | head` — must return the app HTML
- `curl -s http://localhost:3000/properties` — SPA fallback serves index.html

## Structure

- `src/data/properties.js` — all property listings (add/edit properties here; images live in `public/images/`)
- `src/data/team.js` — agents / team members (referenced by property listings)
- `src/components/` — Header, Footer, Hero, PropertyCard, FeaturedCarousel, PropertyFilters, Gallery, CTASection, Reveal (scroll-in animation), TeamCard
- `src/styles/global.css` — single design-system stylesheet: CSS variables at the top (`--navy`, `--gold`, `--ivory`, spacing/typography scale)

## Notes

- Property images are downloaded from Unsplash into `public/images/` (no runtime external image dependency).
- Favorites are persisted in localStorage (`horizon-favorites`).
- No secrets needed; no external services.
