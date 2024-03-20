import { CheckContrast } from '../src'

const check = new CheckContrast('#F0F3F6', '#405060', 12.75) // 7.44

console.log(check.contrast)
console.log(check.passAA)
console.log(check.passAAA)
