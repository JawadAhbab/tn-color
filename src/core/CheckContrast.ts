import { Color } from './color'

export class CheckContrast {
  private bgcolor: Color
  private fgcolor: Color
  private size: number
  constructor(bgcolor: string, fgcolor: string, size = 16) {
    this.bgcolor = Color(bgcolor)
    this.fgcolor = Color(fgcolor)
    this.size = size
  }
}

// const isLevelAA = (bg: string, fg: string, fs: number) => {
//   var result = check(bg, fg, fs)
//   // return result.WCAG_AA
// }
// const isLevelAAA = (bg: string, fg: string, fs: number) => {
//   var result = check(bg, fg, fs)
//   // return result.WCAG_AAA
// }

// const check = (colorA: string, colorB: string, fontSize: number) => {
//   if (!colorA || !colorB) return false
//   // var l1 = hexToLuminance(colorA)
//   // var l2 = hexToLuminance(colorB)
//   // var contrastRatio = getContrastRatio(l1, l2)
//   // return verifyContrastRatio(contrastRatio)
// }
