import { Color } from './color'

const maxdiff = Math.sqrt(Math.pow(101, 2) + Math.pow(257, 2) + Math.pow(257, 2))
export const colorDiff = (cA: string, cB: string) => {
  const colorA = Color(cA).lab()
  const colorB = Color(cB).lab()
  const l = Math.pow(colorA.l() - colorB.l(), 2)
  const a = Math.pow(colorA.a() - colorB.a(), 2)
  const b = Math.pow(colorA.b() - colorB.b(), 2)
  return (Math.sqrt(l + a + b) / maxdiff) * 100
}
