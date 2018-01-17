## Purpose of project

This toy project is for exploring interesting paradigms and modules to understand more about functional Programming in React with Redux. This is built on `create-react-app`.

It is realtime Todo App. [App Link](getConcurrent)

## Structure
```
...
/src
  /components
    /base - normal components.
    /templates - layout components for containers.
  /containers - components connected with redux store, foldering based on router components.
  /libs
  /static
  /store
    /api - axios to backend.
    /modules - duck pattern (action creators, reducers).
    /selectors - selector pattern for mapStateToProps.
    configure.js - redux store configuration.
  /styles
    theme.js - theme with styled-components.
    utils.js - styling helper functions.
...
```
- **Data flow.**
  - For instance, adding a new todo ;
    1. Dispatch async action_1 with axios(POST) and redux-pender.
    2. In POST router, new one will be created and saved.
      1. [pender-Success] Fire socket-event_1 with the new todo to all clients, send back success status to action_1's reducer.
      2. [pender-Failure] Send back failure status to action_1's reducer of POST request's owner. Handling the exceptions.
    3. If socket-event_1 is success, matched socket event listener will receive the new todo data.
    4. Fire dispatch withe sync action_2 for adding the new one into redux store.
    5. State will be updated -> re-rendering.
  - Offline-First Architecture will be applied soon.


## What I've learnt from this practice.

- **Basics of Functional Programming approach**
  - custom composer, pipe, curry, HOC
  - stateless components only, pure functions.
- **Structure**
  - [Atomic React](https://arc.js.org/) like index.js export/import (automatic absolute path)
    - maybe has problem with code splitting?
  - [Duck Pattern](https://github.com/erikras/ducks-modular-redux) (actions, reducers -> 1 module file)
    - [redux-actions](https://github.com/reduxactions/redux-actions)
- **Routing**
  - [react-router v4](https://reacttraining.com/react-router/web/guides/quick-start)
    - params, parsing query with [query-string](https://github.com/sindresorhus/query-string)
    - deep integration needed? [react-router-redux 5.x ](https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux)
- **Async Action**
  - [redux-thunk](https://github.com/gaearon/redux-thunk) -> Saga?
- **Selector Pattern**
  - [reselect](https://github.com/reactjs/reselect)
  - for performance optimization and functional reusability
- **Performance Optimazation**
  - I used [react-perf-devtool](https://github.com/nitin42/react-perf-devtool/blob/master/README.md) extension to check performance enhancement in number of ms.
    - I realized that if I follow general rules, then the performance will follow.
    - Mind re-rendering, especially due to redux-store updating
    - Don't connect unnecessary states to props, split it into smaller component.
    - Splitting components and logic functions.
  - maybe will try [recompose](https://github.com/acdlite/recompose)
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
  - For animation, I used styled-component. but [velocity-react](https://github.com/google-fabric/velocity-react), [react-motion](https://github.com/chenglou/react-motion) are seems nice.
- **Type Checking**
  - [prop-types](https://www.npmjs.com/package/prop-types)
- **UI Dev Env**
  - stylebook: not yet.
- **Meta Tag handling (SEO)**
  - [react-helmet](https://github.com/nfl/react-helmet)
- **Backend**
  - Node with express, no database now.
  - Websocket implemented by [Socket.io](https://socket.io/)

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
