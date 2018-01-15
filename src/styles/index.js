const req = require.context('.', true, /\.\/(?!index).*.js$/)

req.keys().forEach((key) => {
  const regex =  /.\/(.*?).js$/
  const styles = regex.test(key) && key.match(regex)[1]
  module.exports[styles] = req(key).default
})
