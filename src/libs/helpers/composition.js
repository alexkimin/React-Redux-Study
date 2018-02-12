// custom helpers for practice

export const _each = (list, iterator) => {
  const len = list.length
  for(let i = 0; i < len; i++) {
    iterator(list[i])
  }
  return list
}

export const _eachR = (list, iterator) => {
  const len = list.length
  for(let i = len - 1; i >= 0; i--) {
    iterator(list[i])
  }
  return list
}

export const _map = (list, mapper) => {
  const newList = []
  _each(list, (e) => newList.push(mapper(e)))
  return newList
}

const _mapRecursive = (list, mapper) => {
  const _map = ([first, ...rest], mapper, newList) =>
    first
      ? _map([...rest], mapper, [...newList, mapper(first)])
      : newList
  return _map(list, mapper, [])
}

export const _filter = (list, predicator) => {
  const newList = []
  _each(list, (e) => newList.push(predicator(e)))
  return newList
}

export const _reduce = ([first, ...rest], iterator, acc) => {
  let accum = acc || first
  const targetList = acc ? [first, ...rest] : [...rest]
  _each(targetList, (current) => {
    accum = iterator(accum, current)
  })
  return accum
}

export const _reduceRight = (list, iterator, acc) => {
  let accum = acc || list[list.length - 1]
  const targetList = acc ? list : [...list].slice(0, -1)
  _eachR(targetList, (current) => {
    accum = iterator(accum, current)
  })
  return accum
}

export const _curry = fn => (...args) => {
  const [a, ...rest] = [...args]
  if (rest.length > 0) return fn(a, ...rest)
  return b => fn(a, b)
}

export const _curryr = fn => (...args) => {
  const [a, ...rest] = [...args]
  if (rest.length > 0) return fn(...rest, a)
  return b => fn(b, a)
}

export const _applyFn = (a, fn) => fn(a)

export const _pipe = (...fns) => arg =>
  _reduce(fns, _applyFn, arg)

export const _compose = (...fns) => arg =>
  _reduceRight(fns, _applyFn, arg)

export const _do = (arg, ...fns) => _pipe(...fns)(arg)

export const _doR = (arg, ...fns) => _compose(...fns)(arg)

export const _doMutation = (state, ...fns) =>
  state.withMutations(s => _reduce(fns, _applyFn, s))

// take

// value

// get


// Lazy Evaluation set
const L = {}

// L.map

// L.filter

// L.pipe

// L.compose

// L.do