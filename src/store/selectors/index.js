const req = require.context('.', true, /^(?!.\/index).*.js$/)

req.keys().forEach((key) => {
  const regex =  /.\/(.*?).js$/;
  let selectors = regex.test(key) && key.match(regex)[1]
  selectors = `get${selectors.slice(0,1).toUpperCase() + selectors.slice(1)}`
  module.exports[selectors] = req(key).default
})
