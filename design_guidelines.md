# Portfolio Application Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by Linear's sophisticated animations, Vercel's dark theme execution, and modern portfolio leaders like Awwwards-featured sites. The design prioritizes visual storytelling, smooth interactions, and professional presentation.

## Core Design Principles
1. **Dark-First Sophistication**: Premium dark theme with strategic light accents
2. **Motion as Enhancement**: Purposeful animations that guide attention and create delight
3. **Hierarchy Through Contrast**: Clear visual hierarchy using size, color, and spacing
4. **Professional Polish**: Every interaction refined and intentional

## Color Palette

### Dark Mode (Primary Theme)
- **Background Base**: 222 15% 8% (deep charcoal)
- **Background Elevated**: 222 15% 12% (cards, panels)
- **Background Subtle**: 222 15% 16% (hover states)
- **Primary Brand**: 250 95% 65% (vibrant purple-blue)
- **Primary Hover**: 250 95% 70%
- **Accent**: 160 85% 55% (cyan-green for CTAs and highlights)
- **Text Primary**: 0 0% 95% (near white)
- **Text Secondary**: 0 0% 65% (muted content)
- **Text Tertiary**: 0 0% 45% (labels, metadata)
- **Border**: 222 15% 20% (subtle dividers)
- **Success**: 142 76% 55% (skill levels, achievements)

## Typography
- **Primary Font**: Inter (Google Fonts) - headings, UI elements
- **Secondary Font**: JetBrains Mono (Google Fonts) - code snippets, technical details
- **Display**: text-6xl to text-8xl, font-bold (hero headlines)
- **Headings**: text-3xl to text-5xl, font-semibold (section titles)
- **Body**: text-base to text-lg, font-normal (content)
- **Small**: text-sm, font-medium (labels, metadata)

## Layout System
**Spacing Units**: Use Tailwind units of 4, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12 between major elements
- Card padding: p-6 to p-8
- Container max-width: max-w-7xl with px-6 to px-8

## Component Library

### Navigation
- Sticky header with blur backdrop (backdrop-blur-xl bg-background/80)
- Desktop: Horizontal nav with active page indicator (animated underline)
- Mobile: Slide-in drawer with staggered menu item animations
- Logo on left, nav center, CTA button on right
- Scroll-triggered shadow and background opacity change

### Hero Section (Home Page)
- **Layout**: Full viewport height (min-h-screen), centered content with parallax background effect
- **Content**: Large animated headline with gradient text, subtitle, dual CTAs (View Projects + Contact)
- **Visual**: Animated particle/dot grid background (subtle, non-distracting), profile image with animated border gradient
- **Animation**: Typing effect on headline, fade-up entrance for content elements

### About Section
- Two-column layout: Profile image (left) with animated glow effect, content (right)
- Animated skill bars with percentage reveals on scroll
- Personal statement with highlighted keywords
- Download Resume button with icon

### Projects Showcase
- Filterable grid (All, Web, Mobile, Design categories) with smooth transitions
- Project cards with:
  - Hover: Lift effect (translate-y), glow, overlay reveal
  - Image with gradient overlay
  - Tech stack badges (pill-shaped, primary color)
  - Title, brief description
  - Links: Live Demo + GitHub (icon buttons with tooltips)
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)

### Skills Section
- Category grouping (Frontend, Backend, Tools, Design)
- Circular progress indicators with animated fill on scroll
- Icon integration (Font Awesome via CDN for tech logos)
- Hover: Scale effect, show proficiency percentage

### Education Timeline
- Vertical timeline with animated connecting line
- Cards with:
  - Institution logo/icon (left)
  - Degree, field, years (right)
  - Animated entrance: Stagger from bottom
  - Hover: Border glow effect

### Contact Section
- Two-column layout: Form (left), Social links + Info (right)
- Form inputs with:
  - Floating labels that animate on focus
  - Border highlight animation (primary color)
  - Validation states (success/error colors)
- Social media grid with animated icon buttons (scale + glow on hover)
- Include: GitHub, LinkedIn, Twitter, Email, Resume download

### Social Networks Section
- Animated icon grid with stagger effect
- Each icon: Background glow on hover, smooth scale transform
- Links open in new tab
- Display follower/connection counts if applicable

## Animations & Interactions

### Page Transitions
- Fade + slide transitions between routes (Framer Motion)
- Loading state: Subtle pulse on brand logo

### Scroll Animations
- Fade-up reveals for sections (IntersectionObserver)
- Parallax effect on hero background (slower scroll speed)
- Progress bar at top showing read progress

### Hover Effects
- Cards: transform scale-105, shadow-2xl, border-primary/20
- Buttons: Gradient shift, scale, glow
- Links: Underline expand from center
- Images: Slight zoom (scale-110), brightness increase

### Micro-interactions
- Button ripple effect on click
- Smooth color transitions (duration-300)
- Tooltip appears on icon hover (fade-in)

## Images
**Hero Section**: Professional headshot or creative self-portrait with subtle parallax effect, circular frame with animated gradient border
**Project Cards**: Project screenshots/mockups with 16:9 aspect ratio, overlay gradient (dark to transparent top to bottom)
**About Section**: Square profile photo with glassmorphism frame effect

## Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support with visible focus states (ring-2 ring-primary)
- Reduced motion support: Disable animations if prefers-reduced-motion
- High contrast maintained (WCAG AAA where possible)
- Form validation with screen reader announcements

## Advanced Features
- Smooth scroll behavior (scroll-behavior: smooth)
- Intersection observer for lazy loading and animations
- Cursor trail effect on hero section (optional, subtle)
- Theme toggle for light mode (if requested later)
- Easter egg: Konami code reveals hidden project or message
