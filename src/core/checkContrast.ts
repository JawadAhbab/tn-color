function ColorContrastChecker() {}

function isLevelAA(bg: string, fg: string, fs: number) {
  var result = check(bg, fg, fs)
  return result.WCAG_AA
}
function isLevelAAA(bg: string, fg: string, fs: number) {
  var result = check(bg, fg, fs)
  return result.WCAG_AAA
}

function check(colorA: string, colorB: string, fontSize: number) {
  if (!colorA || !colorB) return false
  var l1 = this.hexToLuminance(colorA)
  var l2 = this.hexToLuminance(colorB)
  var contrastRatio = this.getContrastRatio(l1, l2)
  return this.verifyContrastRatio(contrastRatio)
}
