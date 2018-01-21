const _applyFn = (state, fn) => fn(state)

export const composer = (...fns) => data =>
  fns.reduceRight(_applyFn, data)

export const pipe = (...fns) => data =>
  fns.reduce(_applyFn, data)

export const curry = props => fn => fn(props)

export const isPromise = (promise) => {
   if(!promise) return false;
   return promise.then && promise.catch;
}
