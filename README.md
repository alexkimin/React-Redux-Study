## Purpose
This toy project is for exploring interesting paradigms and modules - Functional Programming React with Redux.

## What I explored and used here
- basics of functional approach
  - custom composer, pipe, curry
  - stateless components only.
- [react-router v4](https://reacttraining.com/react-router/web/guides/quick-start) (params, query with [query-string](https://github.com/sindresorhus/query-string))
- async action with [redux-thunk](https://github.com/gaearon/redux-thunk)
- duck pattern with [redux-actions](https://github.com/reduxactions/redux-actions)
- selector pattern with [reselect](https://github.com/reactjs/reselect)
- promise action handling with [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware) -> [redux-pender](https://github.com/velopert/redux-pender)
- SCSS -> [styled-component](https://www.styled-components.com/)
- applying hot-loader after eject for dev server
- meta tag handling with [react-helmet](https://github.com/nfl/react-helmet)
- Node with express, fake NoSQL DB like data handling in controller.

## Planning
- immutable.js
- styled-component theme
- From Thunk to redux-saga
- Testing practice with Jest, Enzyme
- Typescript or flow
- normalizr
- Storybook

## Run
add `NODE_PATH=src/` to `.env`
```
yarn install
yarn start
```
the both command will be applied to frontend and backend automatically.
