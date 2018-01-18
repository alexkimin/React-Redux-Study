## Purpose of project

This toy project was for exploring interesting paradigms and modules to understand more about functional Programming in React with Redux. This is built on `create-react-app`.

It is a real-time Todo App.
[App Link](getConcurrent)

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
    /modules          - duck pattern (action creators, reducers).
    /selectors        - selector pattern for mapStateToProps.
    configure.js      - redux store configuration.
  /styles
    theme.js          - theme with styled-components.
    utils.js          - styling helper functions.
...
```
- **Avoiding known anti-patterns.**
  - Using big component.
  - Unnecessary mapStateToProps.
  - Passing useless props into child.
  - Using dynamically generated event handler functions as props.
  - Using anonymous function as selectors of redux state.


- [Duck Pattern](https://github.com/erikras/ducks-modular-redux) for redux
  - Actions, reducers -> 1 module file with  [redux-actions](https://github.com/reduxactions/redux-actions)


- [Atomic React](https://arc.js.org/) like index.js export/import (automatic absolute path)
  - maybe has a problem with code splitting? -> need to check.
  - will refactor this after being familiar with Webpack.


- **Offline-First Architecture**
  - implemented manually for practice (soon)
  - can use library like [redux-optimistic-ui](https://github.com/mattkrick/redux-optimistic-ui)
  - didn't use localStorage, but if needed? -> [redux-persist](https://github.com/rt2zz/redux-persist)


  - **More funcitonal Approach??**
    - maybe will try [recompose](https://github.com/acdlite/recompose) soon.


  - **Backend**
    - Node with express, no database currently.
    - Websocket implemented by [Socket.io](https://socket.io/)

## What I've learned from this practice.

- **Basics of Functional Programming approach**
  - stateless components only, pure functions.
  - custom compose, pipe, curry, HOC


- **Routing**
  - [react-router v4](https://reacttraining.com/react-router/web/guides/quick-start)
    - params, parsing query needed? -> [query-string](https://github.com/sindresorhus/query-string)
    - deep integration needed? -> [react-router-redux 5.x ](https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux)


- **Async Action**
  - [redux-thunk](https://github.com/gaearon/redux-thunk) -> Saga? if I have more time...


- **Selector Pattern**
  - [reselect](https://github.com/reactjs/reselect) : good for performance optimization and functional reusability


- **Performance Optimization**
  - I used [react-perf-devtool](https://github.com/nitin42/react-perf-devtool/blob/master/README.md) extension to check performance enhancement in ms.
    - I realized that if I follow general rules, then the performance will follow.
    - Mind re-rendering, especially due to redux-store updating
    - Don't connect unnecessary states to props, split it into a smaller component.
    - Splitting components and logic functions.


- **Offline-First Architecture**
  - [NOT YET] I tried manually for studying but there are many choices.


- **Promise action handling**
  - [From] [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)
  - [To] [redux-pender](https://github.com/velopert/redux-pender)
    - Appending PENDING, SUCCESS, FAILURE to action type automatically.
    - pender reducer itself is useful for aboved status.


- **Immutable data handling**
  - [immutable.js](https://facebook.github.io/immutable-js/)


- **Styling**
  - [styled-component](https://www.styled-components.com/) can create themes and reusable functions.
  - Responsive styling without any className usage or frameworks for small challenges.
  - But if using className is okay, then I will use [classNames](https://www.npmjs.com/package/classnames).
  - For animation, I used styled-component. but [velocity-react](https://github.com/google-fabric/velocity-react), [react-motion](https://github.com/chenglou/react-motion) are seemed nice.


- **Type Checking**
  - [prop-types](https://www.npmjs.com/package/prop-types)


- **UI Dev Env**
  - stylebook: not yet.


- **Meta Tag handling (SEO)**
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
yarn install
yarn start-all
```

the both command will be applied to frontend and backend automatically.
