# Portfolio Application

## Overview

This is a modern portfolio web application built with React, TypeScript, and Express. It features a dark-themed, animation-rich single-page application showcasing professional work, skills, education, and contact information. The application emphasizes sophisticated visual design with smooth animations inspired by Linear and Vercel, implementing a full-stack architecture with form submission capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Client-side routing using Wouter (lightweight alternative to React Router)
- Single Page Application (SPA) architecture with code-splitting support

**UI Component System**
- Shadcn/ui component library (Radix UI primitives) configured in "new-york" style
- Tailwind CSS for utility-first styling with custom design tokens
- Design system based on dark-first theme with strategic color palette (HSL-based)
- Component aliases configured for clean imports (@/components, @/lib, etc.)

**Animation & Interactions**
- Framer Motion for declarative animations and page transitions
- React Intersection Observer for scroll-based animations
- TSParticles for interactive background particle effects
- Type animation effects for dynamic text display

**State Management**
- TanStack Query (React Query) for server state management and API calls
- React Hook Form with Zod validation for form state
- Custom hooks for UI state (mobile detection, toasts)

**Design Approach**
- Reference-based design inspired by Linear's animations and Vercel's dark theme
- Dark mode primary theme with sophisticated color system
- Typography using Inter (UI) and JetBrains Mono (code) from Google Fonts
- Consistent spacing system using Tailwind's 4px-based scale

### Backend Architecture

**Server Framework**
- Express.js running on Node.js with TypeScript
- ESM module system for modern JavaScript features
- Development mode with tsx for hot reloading
- Production build using esbuild for optimal bundle size

**API Structure**
- RESTful API endpoints under `/api` prefix
- Contact form submission endpoint (POST /api/contact)
- Message retrieval endpoint (GET /api/contact)
- JSON request/response format with Zod schema validation

**Data Layer**
- In-memory storage implementation (MemStorage class) for development
- Interface-based storage abstraction (IStorage) allowing easy database integration
- Schema-first approach using Zod for runtime validation
- Drizzle ORM configured for future PostgreSQL integration

**Request Handling**
- Custom middleware for request logging with timing
- JSON and URL-encoded body parsing
- Global error handler with status code normalization
- Response truncation for cleaner logs

### External Dependencies

**Database Configuration**
- Drizzle ORM configured with PostgreSQL dialect
- Neon Serverless PostgreSQL driver (@neondatabase/serverless)
- Database URL expected via environment variable (DATABASE_URL)
- Migration system configured (migrations output to ./migrations)
- Schema defined in shared/schema.ts

**UI Component Libraries**
- Radix UI primitives for accessible, unstyled components (accordion, dialog, dropdown, etc.)
- Embla Carousel for touch-friendly carousels
- React Day Picker for date selection
- Recharts for data visualization (configured but not actively used)
- Vaul for drawer components

**Form Handling**
- React Hook Form for performant form state management
- @hookform/resolvers for Zod schema integration
- Zod for schema validation and TypeScript type inference

**Animation & Visual Effects**
- Framer Motion for component animations and transitions
- TSParticles (slim version) for particle system
- React Type Animation for typewriter effects
- React Intersection Observer for viewport-based triggers

**Icons & Styling**
- Lucide React for icon components
- React Icons (Simple Icons) for brand/technology logos
- Tailwind CSS with PostCSS and Autoprefixer
- Class Variance Authority (CVA) for component variant management
- clsx and tailwind-merge for conditional class composition

**Development Tools**
- Replit-specific plugins (runtime error modal, cartographer, dev banner)
- Vite plugins for enhanced development experience
- TypeScript with strict mode enabled
- Path aliases for cleaner imports

**Session Management**
- Connect-pg-simple for PostgreSQL session storage (configured but not actively used)
- Session infrastructure prepared for future authentication needs
