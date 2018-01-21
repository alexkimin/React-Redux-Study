//

const _applyFn = (state, fn) => fn(state)

export const composer = (...fns) => data =>
  fns.reduceRight(_applyFn, data)

export const pipe = (...fns) => data =>
  fns.reduce(_applyFn, data)

  // [...fns].reduce.apply(_applyFn, fns)

export const pipeMutations = (fns, state) =>
  state.withMutations(s => fns.reduce(_applyFn, s))

export const curry = props => fn => fn(props)
