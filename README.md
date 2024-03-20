```js
const color = Color('#33ACD3', fallback)
const dark = isDark('#33ACD3', threshold)
const light = isLight('#33ACD3', threshold)
const diff = colorDiff('#33ACD3', '#A3FCD3') // 0 - 100
```

| Parameter    | Type             | Default     |
| ------------ | ---------------- | ----------- |
| `fallback`   | `() => void`     | `undefined` |
| `threshold?` | `Number (0-255)` | `165`       |
