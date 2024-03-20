import { contrastColor } from 'contrast-color'

export const isDark = (bgColor: string, threshold = 165) => {
  return contrastColor({ bgColor, threshold }) === '#FFFFFF'
}
