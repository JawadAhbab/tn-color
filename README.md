```js
const color = Color('#33ACD3', fallback)
const dark = isDark('#33ACD3', threshold)
const light = isLight('#33ACD3', threshold)
const diff = colorDiff('#33ACD3', '#A3FCD3')
const contrast = new Contrast(bgcolor, fgcolor, fontSize)
```

| Typings      | Type             | Default |
| ------------ | ---------------- | ------- |
| `fallback`   | `Color`          |         |
| `threshold?` | `Number (0-255)` | `165`   |
| `diff`       | `Number (0-100)` |         |
