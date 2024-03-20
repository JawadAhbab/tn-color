import { isDark } from './isDark'

export const isLight = (bgColor: string, threshold = 165) => {
  return !isDark(bgColor, threshold)
}
