export const memo = map => (type, fn) => {
  if (!map.has(type)) map.set(type, fn)
  return map.get(type)
}
