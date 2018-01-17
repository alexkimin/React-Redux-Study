export const composer = (...fns) => data =>
  fns.reduceRight((val, fn) => fn(val), data)

export const pipe = (...fns) => data =>
  fns.reduce((val, fn) => fn(val), data)
