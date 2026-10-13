export const materials = {
  wallMain: '#E8DED0',
  wallSecondary: '#E2D7C8',
  ceiling: '#EDE6DA',
  floor: '#CDB89F',
  desk: '#C6A780',
  deskLegs: '#B3916E',
  projectorBody: '#EEECE7',
  projectorBodyOff: '#D9D3CA',
  projectorLens: '#2C2A26',
  projectorMetal: '#555754',
  golfBag: '#8D887D',
  golfBagDark: '#6F6A60',
  clubShaft: '#C9C4BC',
  clubHead: '#555754',
  accent: '#66786B',
  projectionBg: '#F7F3ED',
  ambient: '#FFF6EA',
  keyLight: '#FFF2E0',
  fillLight: '#E8DED0',
} as const

export type MaterialPalette = typeof materials
