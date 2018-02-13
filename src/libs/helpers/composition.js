// custom helpers for practice

export const _curry = fn => (...args) => {
  const [a, ...rest] = [...args]
  if (rest.length === 1) return fn(a, ...rest)
  return b => fn(a, b)
}

export const _curryr = fn => (...args) => {
  const [a, ...rest] = [...args]
  if (rest.length === 1) return fn(...rest, a)
  return b => fn(b, a)
}
// wrapping할 경우 b는 cb가 되므로, a를 받는 _do 파이핑을 가능케 함.

export const _isObject = obj => typeof obj === 'object' && !!obj

export const _keys = obj => _isObject(obj) ? Object.keys(obj) : []

// for error handling
export const _get = _curryr(
  (obj, key) => obj ? obj[key] : undefined
)

const _length = _get('length')

// enhanced each for polymorphism
// it will iterate object and array
// no error with null(which doesn't have .length)
export const _each = (list, iterator) => {
  const keys = _keys(list)
  for(let i = 0, len = keys.length; i < len; i++) {
    iterator(list[keys[i]])
  }
  return list
}

export const _eachR = (list, iterator) => {
  const keys = _keys(list)
  for(let i = keys.length - 1; i >= 0; i--) {
    iterator(list[keys[i]])
  }
  return list
}

export const _map = _curryr((list, mapper) => {
  const newList = []
  _each(list, (e) => newList.push(mapper(e)))
  return newList
})

const _mapRecursive = (list, mapper) => {
  const _map = ([first, ...rest], mapper, newList) =>
    first
      ? _map([...rest], mapper, [...newList, mapper(first)])
      : newList
  return _map(list, mapper, [])
}

export const _filter = _curryr((list, predicator) => {
  const newList = []
  _each(list, (e) => predicator(e) && newList.push(e))
  return newList
})

const _filterRecursive = (list, predicator) => {
  const _filter = ([first, ...rest], predicator, newList) =>
    first
      ? _filter([...rest], predicator, predicator(first)
        ? [...newList, first]
        : newList)
      : newList
  return _filter(list, predicator, [])
}

export const _reduce = ([first, ...rest], iterator, acc) => {
  let accum = acc === undefined ? first : acc
  const targetList = acc === undefined ? [...rest] : [first, ...rest]
  _each(targetList, (current) => {
    accum = iterator(accum, current)
  })
  return accum
}

export const _reduceRight = (list, iterator, acc) => {
  let accum = acc === undefined ? acc : list[list.length - 1]
  const targetList = acc === undefined ? list : [...list].slice(0, -1)
  _eachR(targetList, (current) => {
    accum = iterator(accum, current)
  })
  return accum
}

export const _applyFn = (a, fn) => fn(a)

export const _pipe = (...fns) => arg =>
  _reduce(fns, _applyFn, arg)

export const _compose = (...fns) => arg =>
  _reduceRight(fns, _applyFn, arg)

// thread first macro
export const _do = (arg, ...fns) => _pipe(...fns)(arg)

// thread last macro
export const _doR = (arg, ...fns) => _compose(...fns)(arg)

export const _doMutation = (state, ...fns) =>
  state.withMutations(s => _pipe(...fns)(s))

/*
 programming with collection
  1. getter - map, values, pluck
  2. filter - filter, reject, compact, without
  3. search - find, some, every
  4. folding - reduce, min, max, group_by, count_by
 */

const _identity = (val) => val

const _negate = fn => val => !fn(val)

// 1. getter -> map
//    1. values (for key-value pair)
export const _values = data => _map(data, _identity)
//    2. pluck (get values based on the key passed in)
export const _pluck = (data, key) => _map(data, _get(key))

// 2. filter
//    1. reject (filter with false evaluation)
export const _reject = _curryr((data, predicator) =>
  _filter(data, _negate(predicator)))
//    2. compact (filter with true evaluation)
export const _compact = _curryr(_filter(_identity))

// 3. search
//    1-1. find (return value)
export const _find = _curryr((list, predicator) => {
  const keys = _keys(list)
  for(let i = 0, len = keys.length; i < len; i++) {
    const val = list[keys[i]]
    if(predicator(val)) return val
  }
})
//    1-2. findIndex (return index)
export const _findIndex = _curryr((list, predicator) => {
  const keys = _keys(list)
  for(let i = 0, len = keys.length; i < len; i++) {
    if(predicator(list[keys[i]])) return i
  }
  return -1
})
// curryr로 감싸므로 함수를 먼저 받고 나중에 실행시 list를 받도록 할수 있음 -> _do


//    2. some - find true
export const _some = (data, predicator=_identity) =>
  _findIndex(data, predicator) !== -1

//    3. every - find false
export const _every = (data, predicator=_identity) =>
  _findIndex(data, _negate(predicator)) !== -1

// 4. folding
//    1. min, max, min_by, max_by
export const _min = (data, iterator=_identity) =>
  _reduce(data, (a, b) => iterator(a) < iterator(b) ? a : b)
export const _max = (data, iterator=_identity) =>
  _reduce(data, (a, b) => iterator(a) < iterator(b) ? b : a)
// 상기를 map한 후 적용한다면 원소의 값이 이미 변해있으므로 불편한 경우가 많다
// 예를들면 데이터셋을 받아서 30대 이상중 최소값인 유저를 구하는 경우 용이하다.

//    2. group_by, push

export const _push = (obj, key, val) => {
  (obj[key] = obj[key] || []).push(val)
  return obj
}

export const _group_by = _curryr((data, iterator) =>
  _reduce(data, (grouped, val) =>
    _push(grouped, iterator(val), val)
  , {})
)

/* 예시
_do(users,
  _group_by((user) => user.age - user.age % 10)// 10대 20대 .. 그룹핑
)

_do(users,
  _group_by(_get('age'))// 10대 20대 .. 그룹핑
)

const _head = (list) => list[0]
_do(users,
  _group_by(_pipe(_get('name'), _head))// 이름 앞글자로 그룹핑
)

 */

//    3. count_by, inc
const _inc = (count, key) => {
  count[key] = count[key] ? count[key]++ : 1
  return count
}

export const _count_by = _curryr((data, iterator) =>
  _reduce(data, (count, val) =>
    _inc(count, iterator(val))
  , {})
)

//
//  Async
//
const square = n => new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, n * n)
})
// square(2)
//   .then(square)
//   .then(console.log) // 16
//
const list = [2, 3, 4]
//
// new Promise((resolve, reject) => {
//   (function recur(res) {
//     if(list.length === res.length) return resolve(res)
//     square(list[res.length])
//       .then((val) => {
//         res.push(val)
//         recur(res)
//       })
//   })([])
// }).then(console.log)


// export const _doP =

// _doP(list,
//   _map(square),
//   _map(square),
//   _map(square),
//   console.log
// )

/*
  Lazy Evaluation set
*/
const L = {}

// L.map

// L.filter

// L.pipe

// L.compose

// L.do


/*
  Examples
 */

const products = [
  {
    is_selected: true, // <--- 장바구니에서 체크 박스 선택
    name: "반팔티",
    price: 10000, // <--- 기본 가격
    sizes: [ // <---- 장바구니에 담은 동일 상품의 사이즈 별 수량과 가격
      { name: "L", quantity: 4, price: 0 },
      { name: "XL", quantity: 2, price: 0 },
      { name: "2XL", quantity: 3, price: 2000 }, // <-- 옵션의 추가 가격
    ]
  },
  {
    is_selected: true,
    name: "후드티",
    price: 21000,
    sizes: [
      { name: "L", quantity: 2, price: -1000 },
      { name: "2XL", quantity: 4, price: 2000 },
    ]
  },
  {
    is_selected: false,
    name: "맨투맨",
    price: 16000,
    sizes: [
      { name: "L", quantity: 10, price: 0 }
    ]
  }
]
//1. 모든 수량

// const totalQuantity = (products) => _reduce(products, (tq, product) =>
//   _reduce(product.sizes, (sq, item) =>
//     sq + item.quantity
//   , tq)
// , 0)

// _do(products,
//   totalQuantity,
//   console.log
// )


//2. 선택 된 총 수량
// _do(products,
//   _filter(_get('is_selected')),
//   totalQuantity,
//   console.log
// )

//3. 모든 가격

//4. 선택 된 총 가격
