# Standalone Projector Environment

Branch: `feat/projector-environment`  
Worktree: `C:\Users\Jisoo\Project\projector-environment`

This document covers the **3D environment only**. The portfolio website continues on `main` / the `person` working directory.

## Layout

```text
packages/projector-environment/   Reusable RoomEnvironment package
apps/environment-demo/            Independent demo / integration test app
docs/PROJECTOR_ENVIRONMENT.md     This file
```

The existing root Vite portfolio app is left in place on this branch and is not the environment demo.

## Run the demo

```bash
conda activate person-web   # if using the project conda env
cd C:\Users\Jisoo\Project\projector-environment
npm install
npm run dev:env
```

Open the URL Vite prints (default port **5174**).

Build:

```bash
npm run build:env
npm run preview:env
```

## Integrate the real portfolio later

```tsx
import { RoomEnvironment } from '@portfolio/projector-environment'

export function App() {
  return (
    <RoomEnvironment
      projectionContent={<PortfolioRoutes />}
      initialProjectorOn
    />
  )
}
```

Ownership:

- **Environment:** room, camera, lighting, projector state, projection frame
- **Portfolio:** sections, data, routing, résumé, contact

Do not import demo components into the package. Do not import portfolio sections into the package.

## Adjust composition

- Camera: `packages/projector-environment/src/config/camera.ts` or `config.camera` prop
- Projection size/angle: `config/layout.ts` / `config.projection`
- Materials: `config/materials.ts`
- Desk future objects: `deskAnchors` in `config/layout.ts`
- Golf club selection later: named groups `golf-bag`, `club-shafts`, `club-<id>`, `head-<id>`

## Replacing models

Current assets are procedural Three.js geometry. To swap GLB/glTF later:

1. Place files under `public/assets/models/`
2. Load with Drei `useGLTF` inside `objects/Desk.tsx`, `Projector.tsx`, or `GolfClubs.tsx`
3. Keep the same export names and public API

## Known integration limitations

1. Projector mesh clicks are disabled on the WebGL canvas (`pointer-events: none`) so page scrolling is never captured. Use the HTML hotspot (lower-left) or the always-visible control buttons.
2. Projection alignment is CSS-based (DOM over 3D), not a perspective-correct DOM→wall mapping. Slight perspective is applied for depth without harming text sharpness.
3. Host apps must provide compatible React 19 + R3F + Three peers; the package does not bundle its own React.
4. Portfolio app on `main` is not automatically wired to this package until a later integration PR.

## Git

- Develop only on `feat/projector-environment`
- Do not merge to `main` from this task
- Push: `git push -u origin feat/projector-environment`
