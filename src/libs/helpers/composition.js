
const combineTwo = (a, b) => x => (<div>{a(x)} {b(x)}</div>)
const combineComponents = (...args) => {
  const [first, ...rest] = args
  return [...rest].reduce((acc, c) => combineTwo(acc, c), first)
}
