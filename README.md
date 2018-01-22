## Purpose of project

This toy project was for exploring interesting paradigms and modules to understand more about functional Programming in React with Redux. This is built on `create-react-app`.

It is a real-time Todo App.
[App Link](https://todopaloit.herokuapp.com/)

## Structure
```
...
/src
  /components
    /base             - normal components.
    /templates        - layout components for containers.
  /containers         - components connected with redux store, foldering based on router components.
  /libs
    /helpers
      composition.js  - pipe and compose
      memo.js         - memoizing event handler functions.
  /store
    /api              - axios to backend.
    /middleware       - redux middlewares
    /modules          - duck pattern (action creators, reducers).
    /selectors        - selector pattern for mapStateToProps.
    configure.js      - redux store configuration.
  /styles
    theme.js          - theme with styled-components.
    utils.js          - styling helper functions.
...
```


**[Duck Pattern](https://github.com/erikras/ducks-modular-redux) for redux**
  - Actions, reducers -> 1 module file with  [redux-actions](https://github.com/reduxactions/redux-actions)

**[Atomic React](https://arc.js.org/) like index.js export/import (automatic absolute path)**
  - maybe has a problem with code splitting? -> need to check.
  - will refactor this after being familiar with Webpack.

**Practice for writing middleware of redux**
  - custom socket redux-middleware will handle actions and socket.io events.
  - (soon) custom offline-first middleware will provide offline-first functionality.

**Backend**
  - Node with express, no database currently.
  - Websocket implemented by [Socket.io](https://socket.io/)

## History
  - Todo app without socket : [branch](https://github.com/AlexMin314/React-Redux-Study/tree/no.socket.ver)
  - Todo app with socket, but events are linked to component directly : [branch](https://github.com/AlexMin314/React-Redux-Study/tree/socket.hacky)

## What I've learned from this practice.

**Basics of Functional Programming approach**
  - stateless components only, pure functions.
  - custom compose, pipe, curry, HOC

**Routing**
  - [react-router v4](https://reacttraining.com/react-router/web/guides/quick-start)
  - params, parsing query needed? -> [query-string](https://github.com/sindresorhus/query-string)
  - deep integration needed? -> [react-router-redux 5.x ](https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux)

**Async Action**
  - [redux-thunk](https://github.com/gaearon/redux-thunk) -> Saga? if I have more time...

**Optimization**
  - **Selector Pattern** : [reselect](https://github.com/reactjs/reselect) is good for performance optimization and functional reusability
  - **Code splitting, Async chunk**
    - option1. via [AsyncComponent](https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194)
    - option2. [react-loadable](https://github.com/thejameskyle/react-loadable)

**Avoiding known anti-patterns.**
  - Using big component.
  - Unnecessary mapStateToProps.
  - Passing useless props into child.
  - Using dynamically generated event handler functions as props.
  - Using anonymous function as selectors of redux state.
  - I used [react-perf-devtool](https://github.com/nitin42/react-perf-devtool/blob/master/README.md) extension to check performance enhancement in ms.

**Promise action handling**
  - [From] [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)
  - [To] [redux-pender](https://github.com/velopert/redux-pender)
    - Appending PENDING, SUCCESS, FAILURE to action type automatically.

**Immutable data handling**
  - [immutable.js](https://facebook.github.io/immutable-js/)

**Styling**
  - [styled-component](https://www.styled-components.com/) can create themes and reusable functions.
  - Responsive styling without any className usage or frameworks for small challenges.
  - `@media` helpers in utils.js and theme.js
  - But if using className is okay, then I will use [classNames](https://www.npmjs.com/package/classnames).
  - For animation, I used styled-component. but [velocity-react](https://github.com/google-fabric/velocity-react), [react-motion](https://github.com/chenglou/react-motion) are seemed nice.

**Type Checking**
  - [prop-types](https://www.npmjs.com/package/prop-types)

**UI Dev Env**
  - stylebook: not yet.

**Meta Tag handling (SEO)**
  - [react-helmet](https://github.com/nfl/react-helmet)


## Planning
- webpack configuration from scratch
  - route base code splitting.
  - tree shaking
  - babel transform
- Testing practice with Jest, Enzyme
- storybook

## Run

add `NODE_PATH=src/` to `.env`

```
yarn install-all
yarn start-all
```

the both command will be applied to frontend and backend automatically by [npm-run-all](https://github.com/mysticatea/npm-run-all).
