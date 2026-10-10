# github-actions

## Angular Demo

The application in `second-action-react-demo` uses Angular 21 with standalone
components. The folder name is retained for existing repository references.

Use Node.js 20.19+, 22.12+, or 24+ from a supported release line.

```powershell
cd second-action-react-demo
npm install
npm run dev
```

Open http://localhost:4200. The demo's Show Help button toggles the three help items.

```powershell
npm test
npm run build
```

Tests use Angular TestBed and Vitest. The production site is generated in
`second-action-react-demo/dist/02-basic-example/browser`.