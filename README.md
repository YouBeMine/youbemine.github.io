# YouBeMine — Organization Portfolio

> **Privacy by Design, Connection by Intent.**

The official portfolio website for the [YouBeMine](https://github.com/YouBeMine) open-source organization — the impenetrable digital sanctuary for modern couples.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Language | TypeScript |
| Deployment | GitHub Pages (static export) |

## Prerequisites

- Node.js 18.17 or later
- npm 9 or later

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

The static output will be in the `out/` directory, ready for GitHub Pages deployment.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page composition
└── components/
    ├── Hero.tsx           # Hero section with CTA
    ├── ZeroKnowledge.tsx  # Security architecture section
    ├── TechShowcase.tsx   # Repository / project cards
    ├── Leadership.tsx     # Founder profile
    └── Footer.tsx         # Footer with links
```

## Deployment

This project is configured for static export and GitHub Pages. On every push to `main`, the site is built and deployed automatically.

## License

Open source. See [LICENSE](LICENSE) for details.
