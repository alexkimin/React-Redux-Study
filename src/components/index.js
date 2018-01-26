const req = require.context('.', true, /\.\/[^/]+\/(?!index).*.js$/)

req.keys().forEach((key) => {
  const regex =  /.\/[^/]+\/(.*?).js$/
  const componentName = regex.test(key) && key.match(regex)[1]
  module.exports[componentName] = req(key).default
})

/*
 This apporach has a problem with code splitting I guess.
 Recommned to use babel transform...
*/
