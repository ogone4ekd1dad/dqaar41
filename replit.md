# KKIVBAG - Luxury Telegram Shop

## Overview

KKIVBAG is a luxury handbag and accessories e-commerce showcase website built for a Telegram-based shop located in Voronezh, Russia. The application displays products from premium brands (Guess, Michael Kors, Karl Lagerfeld, etc.) and directs customers to Telegram for purchases. This is a catalog-style website without cart/checkout functionality - all transactions happen via Telegram communication with the shop owner, Yana.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom luxury color palette (burgundy/beige theme)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll animations
- **Fonts**: Cormorant Garamond (display headings) and Montserrat (body text)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **Build Tool**: Vite for frontend, esbuild for server bundling
- **Development**: Hot module replacement via Vite dev server

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Validation**: Zod schemas auto-generated from Drizzle schemas via drizzle-zod
- **Database**: PostgreSQL (connection via `DATABASE_URL` environment variable)

### API Design
- **Route Definitions**: Centralized in `shared/routes.ts` with Zod validation
- **Endpoints**:
  - `GET /api/products` - List products with optional category/featured filters
  - `GET /api/products/:id` - Get single product details
  - `GET /api/categories` - List all categories
  - `GET /api/reviews/:productId` - Get reviews for a product

### Key Design Patterns
- **Monorepo Structure**: Client (`client/`), server (`server/`), and shared code (`shared/`) in single repository
- **Path Aliases**: `@/` for client source, `@shared/` for shared code
- **Type Safety**: End-to-end TypeScript with shared types between frontend and backend
- **Static Assets**: Product images served from `attached_assets/products/`

## External Dependencies

### Database
- **PostgreSQL**: Primary data store accessed via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session store for Express (configured but not actively used for this catalog site)

### Third-Party Services
- **Telegram**: Primary sales channel - products link to Telegram channel/posts via `telegramLink` field
- **Google Fonts**: Cormorant Garamond and Montserrat font families

### Key NPM Packages
- **drizzle-orm** / **drizzle-kit**: Database ORM and migration tooling
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-icons**: Icon library (includes Telegram icon)
- **wouter**: Client-side routing
- **zod**: Runtime type validation