import { Color } from './Color'

export const betterContrast = (bgcolor: string, colors: [string, ...string[]]) => {
  const bg = Color(bgcolor)
  const map = colors.map(color => ({ color, contrast: bg.contrast(Color(color)) }))
  return map.sort((a, b) => b.contrast - a.contrast)[0].color
}
