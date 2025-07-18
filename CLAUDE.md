# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Awwwards-quality Next.js boilerplate designed for highly aesthetic websites. It prioritizes flexibility over convenience, using a custom SCSS system by default. However, Tailwind CSS and shadcn/ui can be used when explicitly instructed by the user.

## Commands

```bash
# Development
npm run dev          # Start Next.js development server
npm run turbo        # Start with Turbopack (faster builds)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Architecture Overview

This is a **Next.js 15.2.4** application using App Router with internationalization (i18n). The project follows a multi-language architecture with Japanese as the default locale.

### Key Architectural Decisions

1. **Routing Structure**: Dynamic `[lang]` segments for i18n support. All routes are prefixed with locale (e.g., `/ja/`, `/en/`)

2. **Component Organization**:

   -  `/components/` - Global, reusable components (Lenis, Loader, AppSetup, etc.)
   -  `/app/[lang]/_components/` - Page-specific components (Header, Footer)
   -  `/app/[lang]/_layout/` - Layout components (Inner, PageTransition)
   -  Page components use underscore prefix for organization (e.g., `_home`)
   -  Component folder structure:
      ```
      ComponentName/
        ├── index.tsx
        └── component.module.scss
      ```

3. **State Management**: Zustand store in `/app/[lang]/_context/useAppStore.ts`

4. **Styling Architecture**:

   -  **MANDATORY**: Use SCSS modules (`.module.scss`) for all component styles
   -  Import styles: `import s from "./component.module.scss"`
   -  Global styles import: `@use "@/css" as *;` at the top of each SCSS file
   -  **Unit System**: `1px = 1rem` (special configuration via `--liquid-htmlroot`)
   -  **Breakpoints**: lg(1200px), md(960px), sm(560px) with `@include mq()`
   -  CSS processing with PostCSS and SMACSS property ordering
   -  Compiled CSS output in `/src/assets/css/`

5. **Animation Framework**:

   -  GSAP for complex animations
   -  Lenis for smooth scrolling
   -  CSS transitions for simple hover effects using `@include transition`
   -  Predefined easings: `$easeOutQuart`, etc.

6. **CMS Integration**: MicroCMS setup in `/app/[lang]/_libs/cms.ts`

7. **Middleware**: Handles locale detection and optional Basic Auth protection

### Styling Guidelines

#### CSS Modules Pattern

```typescript
import s from "./header.module.scss";
import classnames from "classnames";

export const Header = () => (
   <header className={classnames(s.header, s.fixed)}>
      <div className={s.inner}>Content</div>
   </header>
);
```

#### SCSS Example

```scss
@use "@/css" as *;

.component {
   width: 100rem; // 100px
   margin: $spacing-2; // 24rem
   color: $color-txt;

   @include mq(md) {
      width: 80rem; // Responsive
   }

   @include hover {
      opacity: 0.7;
   }
}
```

#### Predefined Variables

-  **Spacing**: `$spacing-1`(16rem), `$spacing-2`(24rem), `$spacing-3`(32rem)
-  **Colors**: `$color-bg`, `$color-txt`, `$color-key`, `$color-grey0-5`
-  **Duration**: `$duration-standard`(0.3s), `$duration-emphasized`(0.5s)
-  **Z-index**: Use CSS variables like `--z-index-header`

### Component Patterns

#### TypeScript Props

```typescript
type ComponentProps = {
   /** JSDoc for prop description */
   variant?: "primary" | "secondary";
   children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Component = ({
   variant = "primary",
   children,
   className,
   ...rest
}: ComponentProps) => {
   return (
      <div className={classnames(s.component, s[variant], className)} {...rest}>
         {children}
      </div>
   );
};
```

#### Import Order

1. React imports
2. Next.js imports
3. External libraries
4. Internal components
5. Types
6. SCSS (last)

### Layout Components

-  **Inner Container**: Use `<Inner width="default|outer|wide|narrow" />`
   -  default: 1128rem
   -  outer: 1360rem
   -  wide: 1280rem
   -  narrow: 960rem

### i18n Patterns

```typescript
// Page component
const PageName = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
   const { lang } = await params;
   const dict = await getDictionary(lang);
   return <div>{dict.key}</div>;
};

// Layout component
const Layout = async ({
   children,
   params,
}: {
   children: React.ReactNode;
   params: Promise<{ lang: Locale }>;
}) => {
   const { lang } = await params;
   return <>{children}</>;
};
```

#### Navigation with i18n

**IMPORTANT**: Always use `LocaleLink` component instead of Next.js default `Link` for internal navigation:

```typescript
// ❌ DON'T use Next.js Link directly
import Link from "next/link";
<Link href="/about">About</Link>;

// ✅ DO use LocaleLink component
import { LocaleLink } from "@/components/LocaleLink";
<LocaleLink href="/about">About</LocaleLink>;
```

LocaleLink automatically handles locale prefixes and ensures correct routing in the multi-language setup.

### Environment Variables

Required for CMS:

-  `MICROCMS_SERVICE_DOMAIN`
-  `MICROCMS_API_KEY`

Optional for Basic Auth:

-  `BASIC_AUTH_USERNAME`
-  `BASIC_AUTH_PASSWORD`

### Best Practices

1. **Performance**:

   -  Use Next.js Image component for optimization
   -  Dynamic imports for code splitting
   -  Import only necessary GSAP modules

2. **Accessibility**:

   -  Semantic HTML elements
   -  Proper focus management (`:focus-visible`)
   -  ARIA attributes where needed

3. **Animation**:

   -  GSAP for complex animations
   -  `will-change` property for performance
   -  Reference @blankcanvas for WebGL integration

4. **DO NOT**:
   -  Use inline styles (except for dynamic values)
   -  Forget to handle both ja/en locales
   -  Mix client/server components without "use client"
   -  Use default exports for components
