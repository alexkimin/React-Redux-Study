## Purpose of project

This toy project is for exploring interesting paradigms and modules to understand more about functional Programming in React with Redux. This is built on `create-react-app`.

## What I've learnt from this practice.

- **Basics of Functional Programming approach**
  - custom composer, pipe, curry, HOC
  - stateless components only, pure functions.
- **Structure**
  - [Atomic React](https://arc.js.org/) like index.js export/import (automatic absolute path)
    - maybe has problem with code splitting?
  - [Duck Pattern](https://github.com/erikras/ducks-modular-redux) (actions, reducers -> 1 module file)
    - [redux-actions](https://github.com/reduxactions/redux-actions)
  ```
  testing...
  ```
- **Routing**
  - [react-router v4](https://reacttraining.com/react-router/web/guides/quick-start)
    - params, parsing query with [query-string](https://github.com/sindresorhus/query-string)
    - deep integration needed? [react-router-redux 5.x ](https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux)
      - Rather than dispatching actions to navigate you can pass the history object provided to route components to your actions and navigate with it there.
      - Routing data is already a prop of most of your components that care about it, whether it comes from the store or the router doesn’t change your component’s code.
- **Async Action**
  - [redux-thunk](https://github.com/gaearon/redux-thunk) -> Saga?
- **Selector Pattern**
  - [reselect](https://github.com/reactjs/reselect)
  - for performance optimization and functional reusability
- **Performance Optimazation**
  - I used [react-perf-devtool](https://github.com/nitin42/react-perf-devtool/blob/master/README.md) extension to check performance enhancement in number of ms.
    - I realized that if I follow general rules, then the performance will follow.
    - Mind rerendering, especially due to redux-store updating
    - Don't connect unnecessary states to props, split it into smaller component.
    - Splitting components and logic functions.
  - maybe will try [recompose](https://github.com/acdlite/recompose)
- **Offline-First Architecture**
  - I tried manually for studying but there are many choices.
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
  - proxying from port 3000(front) to 3001(back) for CORS problem.

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
