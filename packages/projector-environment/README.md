# `@portfolio/projector-environment`

Reusable warm, minimalist 3D projector-room environment.

Mount arbitrary React content on the projected wall. The environment owns the room, camera, lighting, and projector state. The parent owns website content and routing.

## Install / link

In this monorepo the package is available via workspace:

```ts
import { RoomEnvironment } from '@portfolio/projector-environment'
```

Peer dependencies (provided by the host app):

- `react`, `react-dom`
- `three`
- `@react-three/fiber`
- `@react-three/drei`

## Basic usage

```tsx
import { RoomEnvironment } from '@portfolio/projector-environment'

function App() {
  return (
    <RoomEnvironment
      projectionContent={<PortfolioApp />}
      initialProjectorOn={true}
      onProjectorStateChange={(on) => console.log(on)}
    />
  )
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `projectionContent` | `ReactNode` | Required. Arbitrary React/HTML for the wall. |
| `initialProjectorOn` | `boolean` | Default `true`. |
| `onProjectorStateChange` | `(on: boolean) => void` | Optional state callback. |
| `className` | `string` | Optional root class. |
| `config` | `Partial<EnvironmentConfig>` | Camera, projection layout, DPR, debug orbit. |

## Behavior notes

- Desktop shows the 3D room + large CSS projection frame (~88vw).
- Mobile / narrow viewports hide the 3D scene and show content directly.
- Projector off dims content but **does not unmount** it (React state is preserved).
- Always-visible HTML controls restore the projection.
- Canvas uses `pointer-events: none` so scrolling is not captured by WebGL; use the lower-left hotspot or control buttons to toggle the projector.
- Styles are scoped under `.pe-*` classes to avoid clobbering the host app.

## Tuning

```ts
import {
  RoomEnvironment,
  defaultEnvironmentConfig,
  deskAnchors,
  materials,
} from '@portfolio/projector-environment'

<RoomEnvironment
  projectionContent={<PortfolioApp />}
  config={{
    camera: { ...defaultEnvironmentConfig.camera, fov: 34 },
    projection: { width: 'min(90vw, 1200px)' },
    debugOrbit: false,
  }}
/>
```

`deskAnchors` exposes future object slots on the desk surface.
