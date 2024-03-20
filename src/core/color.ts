import ColorClass from 'color'
type ColorParam = ColorClass | string | ArrayLike<number> | number | { [key: string]: any }

export type Color = ColorClass<ColorParam>
export const Color = (color: ColorParam, fallback = '#FF0000') => {
  try {
    return ColorClass(color)
  } catch {
    return ColorClass(fallback)
  }
}
