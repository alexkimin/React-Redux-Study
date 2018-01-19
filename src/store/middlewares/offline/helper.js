const _applyFn = (state, fn) => fn(state)

export const composer = (...fns) => data =>
  fns.reduceRight(_applyFn, data)

export const pipe = (...fns) => data =>
  fns.reduce(_applyFn, data)
