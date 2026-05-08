## NOX React + Tailwind

This is a clean React + Tailwind project scaffolded from the downloaded site’s design tokens (OKLCH colors, gradients, glass styles).

### Run

```bash
cd nox-react
npm install
npm run dev
```

### Structure

- `src/components/ui/`: reusable primitives (`Button`, `Container`, `Section`)
- `src/components/layout/`: app shell (`Navbar`, `Footer`, `PageLayout`)
- `src/components/sections/`: page sections (`Hero`, `FeatureGrid`, `Cta`)
- `src/styles/index.css`: Tailwind directives + tokens + custom utilities (`glass`, `text-silver`, `cta-gradient`)

### Next conversion step (when you add the HTML/assets)

If you drop the downloaded `index.html` / images / fonts into this repo, I can:

- parse the page into React sections
- turn repeating patterns into components (cards, nav items, CTAs)
- move images/fonts to `public/` (or import from `src/assets/`)
- wire routing if there are multiple pages

