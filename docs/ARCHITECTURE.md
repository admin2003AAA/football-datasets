# NovaStream Platform — Architecture Overview

## What is NovaStream?

**NovaStream** is a premium, legal live streaming platform starter built as a professional monorepo scaffold. It is designed for operators who hold licensed rights to broadcast content, and provides a complete production-style codebase baseline.

> ⚠️ **Legal Notice:** NovaStream is designed exclusively for licensed/owned content streaming. It must not be used to distribute unauthorized or pirated content.

---

## Monorepo Structure

```
novastream/                    ← root (npm workspaces + Turborepo)
├── apps/
│   ├── web/                   ← Public streaming frontend (Next.js 14 + Tailwind)
│   ├── admin/                 ← Admin dashboard (Next.js 14 + Tailwind)
│   └── api/                   ← REST API backend (Express + TypeScript)
├── packages/
│   ├── ui/                    ← Shared React components + design tokens
│   ├── types/                 ← Shared TypeScript interfaces/types
│   └── config/                ← Shared constants, utilities, navigation config
├── docs/                      ← Architecture and developer docs
├── turbo.json                 ← Turborepo pipeline config
├── package.json               ← Root workspace package
└── tsconfig.base.json         ← Base TypeScript config
```

---

## Applications

### `apps/web` — Public Platform (Port 3000)

The user-facing streaming platform. Pages:

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, channels, features, pricing teaser |
| `/live` | Live channels grid with real-time viewer counts |
| `/channels` | Full channel catalog with category filtering |
| `/pricing` | Plan comparison page |
| `/devices` | Device compatibility page |
| `/support` | FAQ + contact form |
| `/login` | Sign-in page |
| `/register` | Registration + trial signup |
| `/profile` | Account, subscription, watch history |

**Tech:** Next.js 14 (App Router), TypeScript, Tailwind CSS

### `apps/admin` — Admin Dashboard (Port 3002)

Separate admin panel for platform operators. Pages:

| Route | Description |
|-------|-------------|
| `/dashboard` | Overview: KPIs, revenue chart, top channels |
| `/dashboard/users` | User management table with search/filter |
| `/dashboard/content` | Channel and VOD content management |
| `/dashboard/subscriptions` | Plan performance and subscriber metrics |
| `/dashboard/analytics` | Viewer trends, top content, platform stats |
| `/dashboard/settings` | Platform configuration and feature flags |

**Tech:** Next.js 14 (App Router), TypeScript, Tailwind CSS

### `apps/api` — Backend API (Port 3001)

RESTful API with modular Express + TypeScript architecture.

**Base path:** `/api/v1`

| Module | Routes |
|--------|--------|
| Health | `GET /health`, `GET /health/ready` |
| Auth | `POST /auth/login`, `POST /auth/register`, `GET /auth/me`, `POST /auth/refresh`, `POST /auth/logout` |
| Users | `GET /users`, `GET /users/:id`, `PATCH /users/:id`, `DELETE /users/:id` |
| Channels | `GET /channels`, `GET /channels/:slug`, `GET /channels/:slug/stream`, `GET /channels/catalog/content` |
| Subscriptions | `GET /subscriptions/plans`, `GET /subscriptions/plans/:id`, `POST /subscriptions` |
| Analytics | `GET /analytics/summary`, `GET /analytics/viewers`, `GET /analytics/revenue`, `GET /analytics/top-content` |
| Settings | `GET /settings`, `GET /settings/admin`, `PATCH /settings` |

**Tech:** Node.js, Express, TypeScript, JWT auth, Zod validation, Helmet, rate limiting

---

## Shared Packages

### `packages/types`

Central TypeScript interfaces shared across all apps:
- `User`, `UserRole`, `UserSubscription`
- `Channel`, `ContentItem`, `Category`
- `Plan`, `Subscription`, `BillingPeriod`
- `AnalyticsSummary`, `AnalyticsDataPoint`
- `ApiResponse<T>`, `PaginatedResponse<T>`, `ApiError`
- `PlatformSettings`

### `packages/config`

Shared constants and utilities:
- App metadata (`APP_NAME`, `APP_VERSION`)
- Navigation link definitions (`NAV_LINKS`, `ADMIN_NAV_LINKS`)
- Content categories, plan IDs, supported devices
- HTTP status codes, error codes
- Pagination helpers (`parsePaginationParams`, `buildPagination`)

### `packages/ui`

Shared React component library and design system:
- **Design tokens**: colors, gradients, typography, spacing, shadows, animations
- **Components**: `Button`, `Badge`, `Card`, `StatWidget`, `ChannelCard`
- **Global CSS**: CSS custom properties, scrollbar styling, `.glass-card`, `.gradient-text`

---

## Design System

### Brand Identity: **NovaStream**

| Token | Value |
|-------|-------|
| Primary Blue | `#3B82F6` (Electric Blue) |
| Primary Violet | `#7C3AED` (Deep Violet) |
| Background | `#0A0A0F` (Near black) |
| Card surface | `#13131F` |
| Border | `#24243A` |
| Text primary | `#F0F0F8` |
| Success | `#22C55E` |
| Error | `#EF4444` |

**Visual style:**
- Dark theme with glass-morphism cards
- Brand gradient: Electric Blue → Deep Violet (135°)
- Responsive grid layouts (mobile-first)
- Animated LIVE badges
- Glow effects on active/CTA elements

---

## Security

- JWT access tokens (15 min expiry) + refresh tokens (7 days)
- Role-based access control (`admin`, `moderator`, `subscriber`, `guest`)
- Helmet.js security headers on API
- Rate limiting (200 req/15min per IP)
- CORS configured per environment
- Input validation with Zod

---

## Development Setup

See the root [README](../README.md) for full setup instructions.

```bash
# Install dependencies
npm install

# Start all apps (requires Turborepo)
npm run dev

# Or start individually:
cd apps/api && npm run dev    # API on :3001
cd apps/web && npm run dev    # Web on :3000
cd apps/admin && npm run dev  # Admin on :3002
```

---

## Production Roadmap

### Phase 1 — Current Scaffold ✅
- Monorepo with shared packages
- All page scaffolds complete
- API with all core modules
- Authentication flow
- Design system / brand identity

### Phase 2 — Core Infrastructure
- [ ] Real database (PostgreSQL with Prisma ORM)
- [ ] Redis cache for sessions/rate limiting
- [ ] Payment integration (Stripe)
- [ ] Email service (welcome, reset password)
- [ ] Real user authentication with password hashing (bcrypt)

### Phase 3 — Streaming
- [ ] HLS player integration (Video.js or HLS.js)
- [ ] CDN configuration for stream delivery
- [ ] DRM integration (optional)
- [ ] Stream health monitoring
- [ ] EPG (Electronic Program Guide)

### Phase 4 — Scale & Observability
- [ ] Prometheus + Grafana monitoring
- [ ] Sentry error tracking
- [ ] CI/CD with GitHub Actions
- [ ] Docker + Docker Compose setup
- [ ] Kubernetes manifests

### Phase 5 — Growth Features
- [ ] Recommendation engine
- [ ] Push notifications
- [ ] Mobile apps (React Native)
- [ ] Multi-language support
- [ ] Discount codes
- [ ] Affiliate system
