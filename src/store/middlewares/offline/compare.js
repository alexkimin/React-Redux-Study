
const compare = (...arg) =>
  arg.reduce((acc, c) => acc && JSON.stringify(arg[0]) === JSON.stringify(c))

export default compare
