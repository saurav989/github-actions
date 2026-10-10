# GitHub Actions Demo

This repository contains a small Angular 21 application introducing Git, GitHub,
and GitHub Actions, plus a GitHub Actions workflow example.

## Project Structure

```text
.
├── .github/workflows/       # GitHub Actions workflow examples
├── public/                  # Static public assets
├── src/
│   ├── app.component.ts     # Root application component
│   ├── assets/images/       # Application images
│   ├── components/          # Help area and help box components
│   ├── test/                # Component tests
│   ├── index.css            # Global styles
│   └── main.ts              # Angular bootstrap
├── angular.json
├── package.json
└── tsconfig*.json
```

## Requirements

Use Node.js 20.19+, 22.12+, or 24+ from a supported release line.

## Run Locally

From the repository root:

```powershell
npm install
npm start
```

Open http://localhost:4200. Select **Show Help** to display the Git, GitHub,
and GitHub Actions descriptions.

## Test and Build

```powershell
npm test
npm run build
```

Tests use Angular TestBed with Vitest. The production build is generated in
`dist/02-basic-example/browser`.
