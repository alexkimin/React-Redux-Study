export const memo = obj => (type, fn) => {
  if (!obj[type]) obj[type] = fn
  return obj[type]
}
