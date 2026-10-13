# Russell Soo — Personal Portfolio

Projector-room personal site for Russell Soo (Aerospace Engineering @ UC Berkeley). The projected wall **is** the website: real HTML portfolio over a warm 3D room (React Three Fiber), with a simple projector on/off control.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- React Router (`HashRouter` for GitHub Pages)
- Three.js / React Three Fiber / Drei

## Conda environment (recommended here)

This machine uses a conda env for Node. Activate before install/dev/build:

```bash
conda activate person-web
```

If the env is missing:

```bash
conda env create -f environment.yml
conda activate person-web
```

Conda is not required on systems that already have Node 22+ on `PATH`; you can use system Node instead.

## Setup

```bash
conda activate person-web   # if using conda
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Typecheck + production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Oxlint |

## Content

Edit data (no fabricated credentials — placeholders are intentional):

- `src/data/profile.ts` — name, about, contact, résumé flag
- `src/data/projects.ts` — project cards + detail pages
- `src/data/research.ts`
- `src/data/experience.ts`
- `src/data/publications.ts`

Place résumé PDF at `public/assets/resume/` and set `resumeAvailable: true` in `profile.ts`.

## Routes

Hash routes (GitHub Pages friendly):

- `/#/` — home (projector room + portfolio)
- `/#/project/:slug` — project detail

## GitHub Pages

1. Repo Settings → Pages → Source: **GitHub Actions**
2. Push to `main` (workflow: `.github/workflows/deploy.yml`)
3. Site uses `base: './'` and `HashRouter`, so project-page hosting works

## Architecture

1. **Portfolio** — accessible HTML sections and project pages  
2. **Projection** — CSS frame (~88% desktop width), on/off dimming  
3. **Room** — static R3F scene (desk/projector left, golf clubs right)

If WebGL is unavailable, a warm CSS room fallback is used; the portfolio still works.

## License

Private personal site unless otherwise noted.
