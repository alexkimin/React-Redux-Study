// import React from 'react'

// const combineTwo = (a, b) => x => (<div>{a(x)} {b(x)}</div>)
// const combineComponents = (...args) => {
//   const [first, ...rest] = args
//   return [...rest].reduce((acc, c) => combineTwo(acc, c), first)
// }

// const _composer = (f, g) => (...args) => g(f(...args))
// // left to right
// export const pipe = (...fns) => fns.reduce(_composer)
// // right to left
// export const composer = (...fns) => fns.reduceRight(_composer)


export const composer = (...fns) => data =>
  fns.reduceRight((val, fn) => fn(val), data)

export const pipe = (...fns) => data =>
  fns.reduce((val, fn) => fn(val), data)
