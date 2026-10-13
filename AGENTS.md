<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

Personal portfolio/CV site: Next.js 16 App Router + React 19 + Tailwind v4, fully static (`output: "export"` in `next.config.ts`), deployed from `./out` to Firebase Hosting (primary) and GitHub Pages (fallback). Content is English plus one hand-written Arabic page at `/ar`.

## Commands

- `npm run dev` — dev server (also re-upserts the managed block above; it only rewrites between the markers)
- `npm run build` — the verification gate: Turbopack compile + TypeScript check + static export to `out/`
- `npm run lint` — flat-config ESLint 9, currently clean. Not run by `next build`, so run it yourself.
- `npx tsc --noEmit` — fast typecheck only; no `typecheck` script exists
- No tests, no formatter, no README, no env vars (nothing reads `process.env`).

CI (`.github/workflows/deploy.yml`, push to `main`) runs `npm ci` + `npm run build` then deploys `./out`. **No lockfile is committed, so `npm ci` fails until a `package-lock.json` exists.**

## Static-export constraints (hard)

- No API routes, route handlers, middleware, server actions, ISR, rewrites, or `next/image` optimization (`images.unoptimized: true`).
- `src/app/sitemap.ts` and `src/app/robots.ts` must keep `export const dynamic = "force-static"`.
- Dynamic routes must export `generateStaticParams` — see `src/app/projects/[slug]/page.tsx` and `src/app/articles/[slug]/page.tsx`.
- Only 3 client components exist (`"use client"`): `components/layout/header.tsx`, `app/projects/page.tsx`, `app/contact/page.tsx`. Contact is mailto/tel links only — no form backend.

## Architecture

- All content is TypeScript data in `src/data/` — no markdown, no CMS:
  - `site-config.ts` — identity, contact, `navLinks`, `stats`, `siteUrl` (drives canonical/SEO URLs)
  - `projects/<slug>.ts` — one file per project. **A new file must be imported and added to `allProjects` in `src/data/projects/index.ts` or it silently never renders.** `allProjects` is sorted by each project's `order`; `getFeaturedProjects`, `getProjectsByCategory`, and `getRelatedProjects` (honors `relatedProjectSlugs`) derive from it. Categories are a fixed union in `projects/types.ts`.
  - `articles.ts` — structured array of `sections[]` (optional `codeBlock`), not markdown
  - `services.ts`, `experience.ts`, `skills.ts`
- `src/lib/seo.ts` — `constructMetadata` + JSON-LD generators used from each page's `generateMetadata`; `src/app/sitemap.ts` lists routes explicitly, so add new routes to its `staticRoutes` array.
- Bilingual: `/ar` is a single hand-written Arabic profile page (`src/app/ar/page.tsx`), not i18n routing. `alternates.languages` (en/ar/x-default) is set separately in `layout.tsx`, `constructMetadata`, the `/ar` page, and `/services` — keep them consistent when adding pages.
- `public/llms.txt` + `public/llms-full.txt` are static, hand-maintained AI/SEO summaries of the site. Update them whenever identity, links, or service copy changes; they already drift (both list `elbalooty.dev@gmail.com` while `site-config.ts` uses `mohamedelbalooty123@gmail.com`).
- Components are hand-written in `src/components/{layout,sections,case-study}`; `src/components/ui` does not exist. Path alias `@/*` → `src/*`.

## UI conventions

- Tailwind v4: no `tailwind.config`; theme and dark-only styles live in `src/app/globals.css` (`:root` vars, `color-scheme: dark`). The site is dark-only (`<html className="dark">`); `next-themes` is installed but unused — there is no theme toggle.
- `components.json` configures the shadcn CLI (style `base-nova`, `@base-ui/react`) but no shadcn components are installed — match the existing hand-rolled Tailwind (compose classes with `cn` from `src/lib/utils`) before adding component libraries.
- React Compiler lint rules are active via `eslint-config-next`: manual `useMemo`/`useCallback` in client components can fail `react-hooks/preserve-manual-memoization`; derive values inline instead.

## Content rules

Authoritative spec: `docs/portfolio-master-spec.md` (design direction, IA, quality gates). The non-negotiables:

- Never invent facts — metrics, users, downloads, clients, store links, technologies. The CV (`docs/Mohamed Gamal Elbalooty.pdf`) is the source of truth; use `[ADD REAL METRIC]` placeholders or omit claims.
- Adding a project must stay a content operation, not a UI task: a new `src/data/projects/*.ts` file must render with zero component changes.

## Housekeeping

- The `nextjs-agent-rules` block at the top is written by `next dev`; commit it alongside your work so the tree stays clean.
- `CLAUDE.md` contains only `@AGENTS.md` — keep all guidance in this file.
