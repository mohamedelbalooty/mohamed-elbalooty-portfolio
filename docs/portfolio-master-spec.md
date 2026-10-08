# Antigravity Master Specification — Mohamed Elbalooty Personal Portfolio

## Mission

Build a premium, production-ready personal portfolio for Mohamed Elbalooty that positions him as a genuine Senior Flutter Engineer / Flutter Team Lead, not as a junior developer showcasing UI screenshots.

The site must communicate:

- technical depth
- architecture and engineering judgment
- ownership of production mobile applications
- fintech experience
- team leadership and mentoring
- delivery and release ownership
- ability to work across product, backend, and stakeholders
- modern AI-assisted engineering capability
- strong professional taste

The portfolio is a long-term professional asset. It must be easy to expand from the initial set of projects to dozens of projects without changing the design or component code.

---

# 1. Non-Negotiable Rules

## Accuracy / Truthfulness

Treat the supplied CV as the source of truth for existing facts.

NEVER invent:

- users
- downloads
- revenue
- performance percentages
- team sizes other than the stated 5-member mobile team
- clients
- company names
- product capabilities
- production metrics
- business impact
- technologies not supported by the source
- awards
- certifications
- project links
- GitHub repositories
- App Store / Google Play URLs

When information is missing, use a clearly marked content placeholder such as:

`[ADD REAL METRIC]`

or omit the claim.

Do not turn assumptions into facts.

## Senior Positioning

Do not make the website look like a generic Flutter developer template.

The website should emphasize:

**Problem → Decision → Architecture → Implementation → Outcome**

rather than merely:

**Technology → Screenshot**

Avoid excessive badges, generic "I love coding" statements, skill bars, percentage ratings, and template-like cards.

## Content Architecture

Separate content from UI.

All projects, experience items, skills, social links, and site copy should live in structured data/content files.

Adding a new project must NOT require editing a UI component.

---

# 2. Recommended Stack

Use:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui where useful
- Static-friendly architecture
- MDX or typed data objects for project content
- Lucide icons or another lightweight icon library
- GitHub Actions for CI/CD
- Firebase Hosting for production deployment

Prefer Static Export / static generation for the portfolio so it can be deployed cheaply and reliably.

Avoid unnecessary backend infrastructure.

The architecture must keep the option open to move later to Vercel or another platform without rewriting the application.

---

# 3. Visual Direction

Create a high-end engineering portfolio with an editorial/product feel.

Do NOT use:

- cheesy developer illustrations
- generic laptop mockups
- excessive neon
- excessive gradients
- stock photos
- skill progress bars
- huge animations
- noisy backgrounds
- a template-looking dashboard

Visual character:

- strong typography
- generous spacing
- sharp hierarchy
- restrained visual effects
- subtle motion
- excellent mobile layout
- premium dark-first aesthetic with optional light mode
- technical diagrams/cards used only where they add meaning

The website should feel like a senior engineer's personal product.

Reference the visual discipline of premium SaaS/product sites, but do not copy another website.

---

# 4. Information Architecture

Create these routes:

/                         → Home
/about                    → About / Engineering Profile
/experience              → Experience
/projects                → All Projects
/projects/[slug]         → Project Case Study
/articles                → Articles / Technical Notes
/articles/[slug]         → Article
/contact                 → Contact

Optional later routes:

/uses
/now
/resume

The initial launch must not feel empty. Prioritize the strongest pages and make secondary areas gracefully expandable.

---

# 5. Homepage

## Hero

Use a strong positioning statement:

**Mohamed Elbalooty**
**Senior Flutter Developer · Flutter Team Lead**

Supporting message should communicate:

5+ years of software engineering experience across FinTech, E-commerce, healthcare, ERP/POS, architecture, production delivery, and team leadership.

Do not overclaim.

Primary CTAs:

- View Selected Work
- Download CV

Secondary links:

- LinkedIn
- GitHub
- Email

## Trust / Proof Strip

Use factual signals from the CV:

- 5+ Years Experience
- FinTech Experience
- Flutter Team Leadership
- 6+ White-labeled E-commerce Apps

Only display claims supported by the source.

## Featured Work

Show 4–6 strongest projects.

Prioritize projects that best demonstrate senior-level engineering and fintech/product ownership.

Initial candidates from the source:

- Lirat
- P2P Syria
- Card App
- White-labeled E-commerce Apps
- POS / ECR Systems
- Lia

Do not fabricate details for any project.

## Engineering Philosophy

Short section explaining that the focus is on:

- maintainable architecture
- production reliability
- scalability
- developer experience
- user-centric product delivery
- engineering leadership

## Experience Preview

Show current and recent roles with a link to the full Experience page.

## AI-Assisted Engineering

Create a small but credible section showing practical use of:

- ChatGPT
- GitHub Copilot
- Cursor
- Claude

Do not imply that AI replaces engineering judgment.

Position AI as an engineering multiplier.

## Final CTA

Strong closing statement:

**Have a mobile product that needs senior engineering ownership?**

Buttons:

Let's Connect
View GitHub

---

# 6. Experience Page

Create a premium vertical timeline.

Use these source facts:

## Tasawk — Flutter Team Leader
Jul. 2025 – Present

Source-supported responsibilities:

- Led Flutter mobile development
- Resolved complex technical challenges
- Designed scalable architectures using Flutter and Clean Architecture
- Used SaaS flavor-based environments for multi-client deployments
- Managed planning, development, testing, release, and maintenance
- Oversaw App Store and Google Play releases
- Collaborated with product, backend, and stakeholders
- Focused on product quality, UX, and scalable business solutions

## Geexar — Senior Flutter Developer
Mar. 2024 – Jun. 2025

Source-supported facts:

- Architected and developed SaaS-based fintech platforms
- Worked on Lirat, P2P Syria, and Card App
- Delivered secure payment integrations and subscription features
- Led a 5-member mobile team
- Applied Agile methodologies and sprint planning
- Performed code reviews
- Mentored junior developers

## NEOXERO — Senior Flutter Developer
Jan. 2023 – Feb. 2024

Source-supported facts:

- Developed 6+ white-labeled Flutter e-commerce applications
- Integrated Bagisto and OpenCart web services
- Supported Zid and Salla web themes
- Focused on performance and best practices

## Crystal Mind — Flutter Developer
Apr. 2022 – Dec. 2022

Source-supported facts:

- Created and tested POS and ECR apps
- Served ERP systems
- Built reusable and testable modules/components
- Worked with POS machine SDKs

## WaitBuzz_Co — Flutter Developer
Mar. 2021 – Apr. 2022

Source-supported facts:

- Designed and implemented UX features
- Collaborated with managers and developers
- Aligned app features with business objectives

Do not add responsibilities beyond the supplied facts.

---

# 7. Projects System

This is the most important architectural requirement.

Create a reusable project content schema.

Suggested TypeScript model:

```ts
export type ProjectCategory =
  | "FinTech"
  | "E-commerce"
  | "ERP / POS"
  | "Healthcare"
  | "Other";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  featured: boolean;

  shortDescription: string;
  overview?: string;

  role?: string;
  company?: string;
  period?: string;

  technologies: string[];
  architecture?: string[];

  problem?: string;
  responsibilities?: string[];
  challenges?: string[];
  solutions?: string[];

  features?: string[];

  outcomes?: string[];

  screenshots?: {
    src: string;
    alt: string;
    caption?: string;
  }[];

  appStoreUrl?: string;
  googlePlayUrl?: string;
  githubUrl?: string;
  liveUrl?: string;

  tags: string[];
}
```

Keep optional fields optional.

A project can be published even when some fields are unavailable.

---

# 8. Initial Project Inventory

Create structured project entries for:

### Lirat

Category:
FinTech

Source-supported context:
A SaaS-based fintech platform / digital wallet developed at Geexar.

Do not add wallet features unless they are confirmed later.

### P2P Syria

Category:
FinTech

Source-supported context:
A SaaS-based fintech platform developed at Geexar.

### Card App

Category:
FinTech

Source-supported context:
A SaaS-based fintech platform developed at Geexar.

### White-labeled E-commerce Apps

Category:
E-commerce

Source-supported context:
6+ Flutter applications integrating Bagisto and OpenCart web services and supporting Zid/Salla themes.

This can be represented as a portfolio collection/case study rather than pretending it was one single application.

### POS / ECR Systems

Category:
ERP / POS

Source-supported context:
POS and ECR applications serving ERP systems, including reusable/testable modules for POS machine SDKs.

### Lia

Category:
E-commerce

Source-supported description:
Multi-vendor gifting app enabling users to send flowers and gifts.

Known from source:
Google Play and Apple Store links exist in the CV, but the actual URLs must be supplied before publishing.

### Lia Delivery

Category:
E-commerce / Delivery

Source-supported description:
Courier delivery app for managing orders and navigating to customer locations.

### Anaqeed Al-Fakha

Category:
E-commerce

Source-supported description:
Online store for fresh fruits and vegetables offering ordering and delivery.

### Kharada

Category:
E-commerce / Recycling

Source-supported description:
Scrap recycling app enabling users to sell unwanted materials with pickup services.

### Ezhal Mowitak

Category:
E-commerce / Delivery

Source-supported description:
Smart water delivery platform for ordering bottled water with flexible delivery options.

Do not manufacture project dates, companies, technologies, metrics, download counts, or links for these projects.

---

# 9. Project Case Study Design

Every detailed project page should use this storytelling structure:

1. Overview
2. Product / Business Context
3. My Role
4. The Problem
5. Engineering Challenges
6. Architecture & Technical Decisions
7. Implementation
8. Key Features
9. Outcome / Impact
10. Screenshots
11. Links
12. Related Projects

Only render sections that have real content.

For example, if no verified outcome metric exists, do not show a fake "98% performance improvement."

Instead use qualitative outcomes supported by the source, such as:

- scalable architecture
- reusable modules
- production delivery
- multi-client support
- secure integrations

---

# 10. Senior-Level Visual Storytelling

For selected case studies, provide visual blocks for:

### Architecture

Simple diagrams such as:

Presentation
↓
Domain
↓
Data
↓
API / Services

Only show architecture that is actually confirmed for that project.

### Engineering Decisions

Example format:

**Decision**
Why was this approach chosen?

**Trade-off**
What was gained and what complexity was introduced?

**Result**
What did this enable?

Do not invent project-specific answers. Create placeholders until confirmed.

This section is critical because it makes the portfolio feel senior rather than cosmetic.

---

# 11. Skills

Do not create a giant logo wall.

Group skills into meaningful engineering areas.

### Core
Flutter
Dart
Kotlin

### State Management
BLoC
Provider
GetX

### APIs & Data
REST
GraphQL
Firebase
Socket.IO
Pusher
SQLite

### Architecture
Clean Architecture
MVVM
MVC
OOP
SOLID
Design Patterns

### Delivery
CI/CD
GitHub Actions
Fastlane
App Store
Google Play

### Testing
Unit Testing
Widget Testing
Integration Testing

### Product / Platform
Payment Gateway
Secure Authentication
Token Management
Offline Caching
Google Maps
WebRTC

### AI-Assisted Development
ChatGPT
GitHub Copilot
Cursor
Claude

Only include source-supported technologies.

---

# 12. About Page

Tell a coherent professional story.

Theme:

A Senior Flutter engineer who grew from hands-on mobile development into architecture, production ownership, team leadership, and increasingly AI-assisted engineering.

Avoid motivational clichés.

Do not say "I am passionate about coding" unless rephrased into something concrete.

Focus on:

- building maintainable systems
- solving difficult mobile problems
- shipping production software
- helping teams move faster
- improving engineering quality
- collaborating with product/backend stakeholders

---

# 13. Articles Architecture

Create an articles system even if only one article exists at launch.

Use MDX or structured content.

Every article should support:

- title
- slug
- summary
- date
- reading time
- tags
- author
- cover image (optional)
- content
- related projects

Initial article ideas can be placeholders only. Do NOT generate fake experience stories.

Future examples:

- Designing Maintainable Flutter Architecture
- Lessons from Building FinTech Mobile Products
- Flutter Production Release Checklist
- AI-Assisted Flutter Development Workflow

---

# 14. SEO Strategy

Implement strong, legitimate technical SEO from day one.

## Global

- meaningful `<title>`
- meta description
- canonical URL
- Open Graph
- Twitter/X card
- semantic HTML
- sitemap.xml
- robots.txt
- favicon
- manifest where appropriate

## Structured Data

Implement appropriate JSON-LD.

At minimum consider:

- Person
- WebSite
- BreadcrumbList
- Article for article pages
- CreativeWork/SoftwareApplication only when accurate for a specific project

Do not add schema properties that are not true.

## Page-Level SEO

Every project page must have a unique title and description.

Example pattern:

`Lirat — FinTech Flutter Project | Mohamed Elbalooty`

Do not stuff keywords unnaturally.

Target legitimate search intent around:

- Senior Flutter Developer
- Flutter Team Lead
- Flutter Developer Egypt
- FinTech Flutter Developer
- Senior Mobile Engineer

Use these naturally where relevant.

## Internal Linking

Connect:

Home → Projects
Projects → Project Case Study
Project Case Study → Experience
Articles → Projects
Experience → Relevant Projects

---

# 15. Performance

Treat performance as a feature.

Requirements:

- optimized images
- responsive images
- lazy loading where appropriate
- minimal JavaScript
- avoid huge client components
- prefer server/static rendering
- no unnecessary animation libraries
- no autoplay video
- accessible reduced-motion behavior

Run Lighthouse / equivalent performance checks.

Target excellent scores without sacrificing the design.

---

# 16. Accessibility

Implement:

- semantic headings
- keyboard navigation
- visible focus states
- accessible buttons
- meaningful alt text
- sufficient contrast
- reduced-motion support
- proper link names
- responsive typography

Accessibility is part of senior engineering quality.

---

# 17. Responsive Design

The website must be first-class on:

- mobile
- tablet
- laptop
- large desktop

Do not design desktop first and "shrink" it afterward.

Project case studies must remain readable on mobile.

---

# 18. Microinteractions

Use subtle motion:

- section reveal
- hover transitions
- project card transitions
- navigation state
- page transitions where appropriate

No excessive effects.

Motion should communicate hierarchy and interaction, not demonstrate that animation exists.

---

# 19. Contact

Primary:

mohamedelbalooty123@gmail.com

LinkedIn:
linkedin.com/in/mohamed-elbalooty

GitHub:
github.com/mohamedelbalooty

Location:
Cairo, Egypt

Use the exact contact information supplied by the CV.

Include a clear recruiter-friendly CTA.

---

# 20. Resume

Create a prominent Download CV CTA.

Keep the CV file replaceable without changing code.

Use:

`public/resume/Mohamed-Elbalooty-CV.pdf`

The filename should be easy to replace later.

---

# 21. Analytics / Search Console

Prepare the site for:

- Google Search Console
- privacy-conscious analytics if needed

Do not make analytics mandatory for local development.

Environment variables must be used for external IDs/configuration.

---

# 22. Deployment

Primary deployment target:

Firebase Hosting

Requirements:

- production build
- static export compatibility
- Firebase configuration
- HTTPS
- custom domain readiness
- GitHub Actions deployment workflow

Also make the repository easy to deploy to GitHub Pages as a fallback if static export is used.

Document deployment steps in README.

---

# 23. Developer Experience

The repository README must explain:

1. What the project is
2. Stack
3. Folder structure
4. How to run locally
5. How to add a project
6. How to add an article
7. How to replace the CV
8. How to deploy
9. Environment variables
10. SEO maintenance

The most important developer instruction:

**Adding a project should be a content operation, not a UI development task.**

---

# 24. Content Editing Workflow

Make this extremely easy.

For example:

```text
src/data/projects/
  lirat-wallet.ts
  p2p-syria.ts
  card-app.ts
  lia.ts
```

Then a future project can be added by:

```text
new-project.ts
```

plus assets.

The UI automatically discovers/render projects from the data source.

Projects should support:

- featured/unfeatured
- categories
- tags
- ordering
- hidden draft state if useful

---

# 25. SEO Content Expansion System

Do not mass-generate dozens of SEO pages.

Instead, allow future creation of real content:

- project case studies
- technical articles
- engineering notes
- architecture write-ups

Every published page must provide unique value.

AI may assist with:

- keyword research
- metadata suggestions
- content structure
- internal linking
- readability improvements
- SEO audits

But factual claims must always be grounded in Mohamed's actual experience.

---

# 26. AI Agent Behavior

Operate like a senior product + design + frontend engineering team.

Before implementation:

1. Inspect the repository.
2. Build a short implementation plan.
3. Identify missing content fields.
4. Create the content/data architecture first.
5. Then implement UI.
6. Run quality checks.
7. Fix issues.
8. Produce deployment documentation.

Do not constantly ask for confirmation over minor decisions.

Choose sensible defaults and keep them easy to change.

When information is missing, create clearly marked placeholders rather than inventing facts.

---

# 27. Quality Gates

Before declaring the portfolio complete, verify:

### Content
- no fabricated facts
- no placeholder text visible to normal visitors
- consistent terminology
- no grammar/spelling issues

### UI
- mobile tested
- desktop tested
- no broken layouts
- no horizontal overflow
- consistent spacing
- consistent typography

### Accessibility
- keyboard navigation
- focus state
- semantic headings
- image alt text
- contrast

### Performance
- optimized images
- minimal client JS
- no unnecessary dependencies
- Lighthouse audit

### SEO
- unique page titles
- descriptions
- canonical
- sitemap
- robots.txt
- structured data
- Open Graph
- internal links

### Engineering
- TypeScript clean
- no obvious warnings
- reusable components
- content separated from presentation
- clean folder structure

### Deployment
- production build succeeds
- Firebase configuration documented
- CI/CD workflow documented

---

# 28. What "Done" Means

The site is not done when it "looks good."

It is done when:

- a recruiter understands who Mohamed is within 10 seconds
- a hiring manager can see senior-level engineering evidence
- a technical interviewer can explore architecture and decisions
- projects can be added without changing UI code
- the site performs well
- SEO foundations are correct
- the repository itself demonstrates engineering quality
- deployment is repeatable
- the design feels premium and memorable

---

# 29. Final Design Principle

The site should silently communicate:

**"This is a senior engineer who can own a product, not just build screens."**

Every design and content decision should reinforce that message.

Do not over-explain seniority.

Demonstrate it through:

- decisions
- architecture
- ownership
- trade-offs
- production delivery
- leadership
- clarity
- quality
