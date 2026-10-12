# Mohamed Elbalooty — Personal Portfolio & Engineering CV

The personal portfolio, case studies, and engineering CV website of **Mohamed Elbalooty** (Flutter Team Lead & Senior Mobile Engineer).

- **Production URL**: [https://mohamed-elbalooty.web.app](https://mohamed-elbalooty.web.app)
- **Secondary Domain**: [https://mohamed-elbalooty-portfolio.web.app](https://mohamed-elbalooty-portfolio.web.app)
- **Architecture**: Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript
- **Target**: Static HTML Export (`out/`) hosted on Firebase Hosting classic

---

## Quickstart & Local Development

### 1. Install Dependencies
```bash
npm ci
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Quality & Verification Gates
```bash
npm run lint         # ESLint 9 checks
npx tsc --noEmit     # TypeScript type-check
npm run build        # Static production build to ./out
```

---

## Deployment & CI/CD

The portfolio is deployed to **Firebase Hosting** (classic static tier) with automated pipelines in **GitHub Actions**:

- **Production Deployment**: Pushes or merged PRs into `master` automatically trigger `.github/workflows/deploy.yml`, building static assets into `./out` and deploying to the live Firebase Hosting channel and GitHub Pages fallback.
- **Pull Request Previews**: Pull requests targeting `master` trigger `.github/workflows/firebase-hosting-pull-request.yml`, which runs quality checks and deploys an isolated preview channel URL.
- **Manual Deployment**:
  ```bash
  npm run build
  npx -y firebase-tools@latest deploy --only hosting --project mohamed-elbalooty-portfolio
  ```

For the comprehensive deployment guide, architecture details, secrets setup, custom domain guide, and rollback protocols, see:

👉 [**Full Deployment Documentation (`docs/DEPLOYMENT.md`)**](docs/DEPLOYMENT.md)

---

## License

Private repository. Copyright © Mohamed Elbalooty. All rights reserved.
