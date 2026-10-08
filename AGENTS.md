<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

Personal portfolio/CV site: Next.js 16 App Router + React 19 + Tailwind v4, fully static (`output: "export"` in `next.config.ts`), deployed from `./out` to Firebase Hosting (primary) and GitHub Pages (fallback).

## Commands

- `npm run dev` — dev server (also re-upserts the managed block above; it only rewrites between the markers)
- `npm run build` — the verification gate: Turbopack compile + TypeScript check + static export to `out/`
- `npm run lint` — flat-config ESLint 9. Not run by `next build`, so run it yourself. If the only failures are `react-hooks/preserve-manual-memoization` in `src/app/projects/page.tsx` or unused-import warnings, they are pre-existing, not yours.
- `npx tsc --noEmit` — fast typecheck only; no `typecheck` script exists
- No tests, no formatter, no README, no env vars (nothing reads `process.env`).

CI (`.github/workflows/deploy.yml`, push to `main`) runs `npm ci` + `npm run build`, then deploys `./out`. **No lockfile is committed, so `npm ci` fails until a `package-lock.json` exists.**

## Static-export constraints (hard)

- No API routes, route handlers, middleware, server actions, ISR, rewrites, or `next/image` optimization (`images.unoptimized: true`).
- Dynamic routes must export `generateStaticParams` — see `src/app/projects/[slug]/page.tsx`.
- Only 3 client components exist (`"use client"`): `layout/header.tsx`, `app/projects/page.tsx`, `app/contact/page.tsx`. Contact is mailto links only — no form backend.

## Architecture

- All content is TypeScript data in `src/data/` — no markdown, no CMS:
  - `site-config.ts` — bio, contact, nav, `siteUrl` (drives canonical/SEO URLs)
  - `projects/<slug>.ts` — one file per project; **new files must also be added to `allProjects` in `src/data/projects/index.ts` or they silently never render** (slug lives inside the file; kebab-case filename matches slug by convention)
  - `articles.ts` — articles as a structured array (`sections[]`, optional `codeBlock`), not markdown files
  - `experience.ts`, `skills.ts`
- `src/lib/seo.ts` — JSON-LD generators used from each page's `generateMetadata`; also `src/app/sitemap.ts`, `src/app/robots.ts`.
- Components are hand-written in `src/components/{layout,sections,case-study}`; `src/components/ui` does not exist.
- Path alias `@/*` → `src/*`.

## UI conventions

- Tailwind v4: no `tailwind.config`; theme and hand-written dark-only styles live in `src/app/globals.css`.
- shadcn CLI is configured (`components.json`, style `base-nova`, Base UI primitives) but no shadcn components are installed — match the existing hand-rolled Tailwind style before adding new component libraries.
- React Compiler lint rules are active via `eslint-config-next`: manual `useMemo`/`useCallback` in client components can fail `react-hooks/preserve-manual-memoization`; derive values inline instead.

## Content rules

Authoritative spec: `docs/portfolio-master-spec.md` (design direction, IA, quality gates). The non-negotiables:

- Never invent facts — metrics, users, downloads, clients, store links, technologies. The CV (`docs/Mohamed Gamal Elbalooty.pdf`) is the source of truth; use `[ADD REAL METRIC]` placeholders or omit claims.
- Adding a project must stay a content operation, not a UI task: new `src/data/projects/*.ts` files must render with zero component changes.

## Housekeeping

- `CLAUDE.md` contains only `@AGENTS.md` — keep all guidance in this file.
