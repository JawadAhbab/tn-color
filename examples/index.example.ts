import { contrastColor } from 'contrast-color'
import { isDark } from '../src/index'

console.log(
  contrastColor({
    bgColor: '#00000',
    threshold: 165,
  })
)
