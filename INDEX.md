# Repository Index

## Table of Contents
- [Overview](#overview)
- [Directory Structure](#directory-structure)
- [Key Files](#key-files)
- [Modules & Components](#modules--components)
- [Entry Points & Main Workflows](#entry-points--main-workflows)
- [Dependencies & Tech Stack](#dependencies--tech-stack)
- [Navigation](#navigation)

## Overview
NeuroLogix is an Astro-powered, static marketing site for the Veralogix "Cyber-Glow" concept. It delivers a single-page landing experience and a privacy page, with client-side animation scripts for ambient particles, cursor effects, and CTA button interactions.

## Directory Structure
```
.
├── src/                 # Astro source files
│   ├── components/      # Reusable Astro UI components
│   ├── pages/           # Route-based pages (Astro routing)
│   ├── scripts/         # Client-side TypeScript effects
│   ├── styles/          # Global CSS styles
│   └── env.d.ts         # Astro/TS environment definitions
├── astro.config.mjs     # Astro configuration
├── package.json         # Project metadata and scripts
├── package-lock.json    # Dependency lockfile
├── tsconfig.json        # TypeScript configuration
├── README.md            # Product/vision overview
├── AGENTS.md            # Agent definitions and responsibilities
└── node_modules/        # Installed dependencies (generated)
```

## Key Files
- `astro.config.mjs` — Astro configuration (build/dev defaults).
- `package.json` — Scripts (`dev`, `build`, `preview`) and dependency list.
- `tsconfig.json` — TypeScript settings for Astro tooling.
- `src/env.d.ts` — Type definitions for Astro and TypeScript.
- `README.md` — High-level product narrative and context.
- `AGENTS.md` — Agent roles and triggers used in the concept design.

## Modules & Components
- `src/pages/index.astro` — Main landing page with hero content, agent grid, and footer. Imports `EnergyCard` and global styles.
- `src/pages/privacy.astro` — Privacy page describing data collection/usage.
- `src/components/EnergyCard.astro` — Card component used in the agent grid.
- `src/scripts/ambient.ts` — Generates ambient particle effects (respects reduced motion).
- `src/scripts/buttonFX.ts` — CTA button press/burst effects and keyboard activation.
- `src/scripts/cursor.ts` — Custom neon cursor for pointer devices.
- `src/styles/global.css` — Global visual system: neon theme, layout, animations.

## Entry Points & Main Workflows
- **Astro routes**: Each file in `src/pages/` becomes a route.
  - `/` → `src/pages/index.astro`
  - `/privacy` → `src/pages/privacy.astro`
- **Client-side effects**: `index.astro` loads scripts via `<script type="module" src="/src/scripts/...">`.
- **Development**: `npm run dev` starts the Astro dev server.
- **Production**: `npm run build` builds static output; `npm run preview` serves it.

## Dependencies & Tech Stack
- **Astro** (`astro`) — Static site framework and routing.
- **TypeScript** — Used for client scripts and configuration.
- **CSS** — Custom neon styling in `src/styles/global.css`.

## Navigation
- [README](README.md)
- [Agent Definitions](AGENTS.md)
- [Landing Page](src/pages/index.astro)
- [Privacy Page](src/pages/privacy.astro)
- [Global Styles](src/styles/global.css)
- [Scripts](src/scripts/)
