import ColorClass from 'color'
import { contrastColor } from 'contrast-color'
type ColorParam = ColorClass | string | ArrayLike<number> | number | { [key: string]: any }

export type Color = ColorClass<ColorParam>
export const Color = (color: ColorParam, fallback = '#FF0000') => {
  try {
    return ColorClass(color)
  } catch {
    return ColorClass(fallback)
  }
}

export const isLight = (bgColor: string, threshold = 165) => !isDark(bgColor, threshold)
export const isDark = (bgColor: string, threshold = 165) =>
  contrastColor({ bgColor, threshold }) === '#FFFFFF'

const maxdiff = Math.sqrt(Math.pow(101, 2) + Math.pow(257, 2) + Math.pow(257, 2))
export const colorDiff = (cA: string, cB: string) => {
  const colorA = Color(cA).lab()
  const colorB = Color(cB).lab()
  const l = Math.pow(colorA.l() - colorB.l(), 2)
  const a = Math.pow(colorA.a() - colorB.a(), 2)
  const b = Math.pow(colorA.b() - colorB.b(), 2)
  return (Math.sqrt(l + a + b) / maxdiff) * 100
}
