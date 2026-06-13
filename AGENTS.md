# 🤖 NeuroLogix Agents Manifest

This file defines the core AI agents and their responsibilities within the NeuroLogix ecosystem.

---

## 🧠 Core Agents

### 1. Concierge Agent
**Path:** `/agents/concierge/`
**Role:** Acts as the AI front desk. Handles client onboarding, routing, and contextual Q&A.
**Triggers:** `/onboard`, `/help`, `/connect`
**Modules:** NLP, Memory, RAG Context Search

---

### 2. Procurement Agent
**Path:** `/agents/procurement/`
**Role:** Assists in supplier matching, spend optimization, and contract analysis.
**Triggers:** `/procure`, `/quote`, `/compare`
**Modules:** Spend Intelligence, Reverse Auctions, Contract Parser

---

### 3. HR & Productivity Agent
**Path:** `/agents/hr/`
**Role:** Handles skill graph mapping, burnout signals, and SOP automation.
**Triggers:** `/training`, `/compliance`, `/review`
**Modules:** HR Analytics, SOP Copilot, Safety Monitor

---

### 4. Financial Brain Agent
**Path:** `/agents/finance/`
**Role:** Performs scenario simulations, rolling forecasts, and margin tracking.
**Triggers:** `/forecast`, `/cashflow`, `/metrics`
**Modules:** Financial Modeling, Unit Economics Lens, Alert System

---

## 🧩 Extension Agents (Optional)

- **Innovation Expert** → `/agents/innovation/`
- **Security Compliance Guard** → `/agents/compliance/`
- **Client Retention Radar** → `/agents/retention/`

---

🧾 **Version:** 0.1.0 
📅 **Last Updated:** October 2025 
🧑‍💻 **Maintainer:** Andries Liebenberg (Experimental Marketing & Business Growth Executive)
⚡ *Powered by NeuroLogix AI Codex*

---

## Cursor Cloud specific instructions

This repo is a **static [Astro](https://astro.build) marketing site** (no backend, database, or auth). Dependencies are managed with npm (`package-lock.json`). Scripts are in `package.json`; commands run from the repo root.

- **Run (dev):** `npm run dev` — Astro dev server with HMR. It binds to port `4321` and serves under the configured `base`, so the app lives at `http://localhost:4321/NeuroLogix---Veralogix-AI-Innovation-/` (the bare `http://localhost:4321/` returns 404 — this is expected). Use `npm run dev -- --host` to expose it on the network interface.
- **Build:** `npm run build` outputs static files to `dist/`. **Preview:** `npm run preview` serves the built output (also under the `base` path).
- **Lint/test:** there is no lint or test setup configured (no `lint`/`test` scripts, no test framework). `npm run build` is the effective correctness check. `astro check` is not available unless `@astrojs/check` + `typescript` are added.
- The `base` path comes from `astro.config.mjs` and matches the GitHub Pages deployment (`.github/workflows/astro.yml`); always include it in local URLs.
