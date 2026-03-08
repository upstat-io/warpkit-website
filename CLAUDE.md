# WarpKit Website

Marketing and documentation website for [WarpKit](https://github.com/upstat-io/warpkit), a Svelte 5 SPA framework.

## Project Context

- WarpKit source lives at `../warpkit/` (one folder up)
- WarpKit is built by [Upstat](https://upstat.io) and used in production for their application
- The framework is alpha-stage software
- Guide and API docs live in the warpkit repo and are loaded at build time via Astro content collections

## Stack

Astro 5 + Svelte 5 components. Inter (Google Fonts) for body/headings, IBM Plex Mono for code.

## Commands

- `npm run dev` — Dev server on port **4323**
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build on port 4323

## Content Collections

Docs are loaded directly from `../warpkit/` using Astro's `glob` loader (no sync script needed).

| Collection | Source | Pattern |
|------------|--------|---------|
| `guide` | `../warpkit/guide/` | `[0-9][0-9]-*.md` |
| `docs` | `../warpkit/docs/` | `[!_]*.md` (excludes `_llms.md`, `_index.md`) |

All source markdown files require YAML frontmatter: `title` (string), `description` (string, optional), `order` (number).

### CI/CD

GitHub Actions clones the `upstat-io/warpkit` repo into `./warpkit/` before building so the relative `../warpkit/` path resolves correctly. See `.github/workflows/deploy.yml`.

---

## Design System

**Star Trek TNG-inspired, subtly adopted to modern glassy aesthetic.** Not a literal LCARS replica — LCARS as DNA filtered through glassmorphism. A modern website that happens to feel like it was designed by someone who grew up on the Enterprise-D.

### Color Palette

```
--bg:              #060a14    Deep space navy
--bg-raised:       #0c1222    Elevated surfaces
--bg-surface:      #111a2e    Cards, interactive surfaces

--text:            #c8d0e0    Body text
--text-muted:      #7a8599    Secondary text, labels
--text-bright:     #eef1f7    Headlines, emphasis

--amber:           #f5a623    Primary accent (TNG amber)
--mauve:           #c4a0e8    Secondary accent (TNG lavender)
--cyan:            #7dd3fc    Tertiary accent (TNG blue)
--coral:           #e07a5f    Quaternary accent

--glass-bg:        rgba(12, 18, 34, 0.6)    Panel fill
--glass-border:    rgba(255, 255, 255, 0.08) Panel borders
--glass-blur:      24px                      Backdrop blur
```

### Design Rules

- **Glass panels** as primary surface — translucent with `backdrop-filter: blur(24px)` and subtle shine gradient overlay (`var(--glass-shine)`)
- **LCARS-subtle accent bars** — pill-shaped colored segments (`.lcars-bar`) as decorative section dividers. Not literal LCARS panels — just the DNA
- **Rounded shapes** — `border-radius` on everything. Pill buttons for CTAs (`border-radius: 9999px`)
- **Warm amber** as primary accent, mauve/cyan/coral as supporting palette
- **Smooth transitions** — `0.2s` for hover states, subtle `translateY(-1px)` or `translateY(-2px)` lifts
- **Starfield** canvas background — sparse, slowly drifting stars, respects `prefers-reduced-motion`
- **NO brutalist elements** — no hard square edges, no monospace for body text, no uppercase headings on content pages
- **Clean modern typography** — Inter font, slightly negative letter-spacing on headings, sentence case
- **Gradient accents** — amber-to-mauve gradient on hero text, logo mark, featured elements

### Typography

- **Font**: Inter (300/400/500/600/700) via Google Fonts
- **Code font**: IBM Plex Mono (400/500) self-hosted
- **Headings**: 600 weight, `letter-spacing: -0.01em` to `-0.025em`, sentence case
- **Body**: 400 weight, `line-height: 1.6`, max-width `65ch`
- **Labels/badges**: 500 weight, `0.75-0.85rem`, slight positive letter-spacing

### Logo & Favicon

- **Gradient rounded square** (`#f5a623` → `#c4a0e8` at 135deg) with dark warp drive icon inside
- Warp icon: chevron pointing right with trailing warp streaks, fill `#060a14`
- Same treatment on both favicon and nav logo mark

### Component Patterns

| Component | Description |
|-----------|-------------|
| `.glass` class | Shared glass panel: blur + border + shine overlay pseudo-element |
| `.lcars-bar` | Flex row of `<span>` segments with pill `border-radius`, colored via `.seg-amber` etc. |
| `FeatureCard` | Glass card with small colored accent bar at top, `accent` prop (amber/mauve/cyan/coral) |
| `CodeWindow` / `HeroCode` | Faux editor chrome with colored dots titlebar, glass background |
| `Starfield` | Canvas-based animated star background, fixed position, respects reduced motion |
| `DocsSidebar` | Sticky glass sidebar for guide/docs, auto-populated from content collections |
| `Nav` | Fixed glass nav with logo mark, text links, GitHub icon, pill CTA button |
| `Footer` | LCARS accent bar + brand/links/meta row |

### Syntax Highlighting (in code examples)

```
.kw  (keywords):    var(--mauve)   #c4a0e8
.str (strings):     var(--amber)   #f5a623
.fn  (functions):   var(--cyan)    #7dd3fc
.key (object keys): var(--coral)   #e07a5f
```

---

## Project Structure

```
src/
  content.config.ts           — Astro content collections (guide + docs)
  layouts/
    Base.astro                — HTML shell, meta tags, Inter font, global CSS
    Docs.astro                — Docs/guide layout with sidebar + article styling
  styles/
    global.css                — Design system variables, reset, glass utilities
  lib/
    base.ts                   — Base URL helper
  components/
    Nav.svelte                — Glass navbar with warp logo, links, CTA
    Footer.svelte             — LCARS bar + footer links
    Starfield.svelte          — Animated canvas star background
    FeatureCard.svelte        — Glass feature card with accent pip
    HeroCode.svelte           — Syntax-highlighted code example
    CodeWindow.svelte         — Reusable editor chrome wrapper
    GlitchText.svelte         — Text decode animation
    DocsSidebar.astro         — Auto-generated sidebar from collections
  pages/
    index.astro               — Landing page
    guide/
      index.astro             — Guide table of contents
      [...slug].astro         — Dynamic guide chapter pages
    docs/
      index.astro             — API reference index
      [...slug].astro         — Dynamic API docs pages
public/
  favicon.svg                 — Gradient square + warp icon
  robots.txt
  fonts/                      — IBM Plex Mono woff2 files
.github/
  workflows/deploy.yml        — GitHub Pages deployment (clones warpkit repo)
```

## WarpKit Packages Reference

| Package | Description |
| ------- | ----------- |
| `@warpkit/core` | Router, state machine, events, components |
| `@warpkit/data` | Data fetching, caching, mutations |
| `@warpkit/cache` | Cache implementations (Memory, Storage, E-Tag) |
| `@warpkit/forms` | Schema-driven form state management |
| `@warpkit/validation` | StandardSchema validation (Zod, TypeBox) |
| `@warpkit/websocket` | WebSocket client with reconnection |
| `@warpkit/auth-firebase` | Firebase authentication adapter |
| `@warpkit/types` | Shared TypeScript types |
