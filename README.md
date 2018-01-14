## Purpose
This toy project is for exploring interesting paradigms and modules - Functional Programming React with Redux.

## What I explored and used here
- Basics of Functional Programming approach
  - custom composer, pipe, curry, HOC
  - stateless components only, pure functions.
- Structure
  - Atomic react like index.js export/import (automatic absolute path)
  - Duck pattern (actions, reducers -> 1 module)
    - [redux-actions](https://github.com/reduxactions/redux-actions)
- Routing
  - [react-router v4](https://reacttraining.com/react-router/web/guides/quick-start)
    - params, parsing query with [query-string](https://github.com/sindresorhus/query-string)
    - deep integration needed? [react-router-redux 5.x ](https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux)
      - Rather than dispatching actions to navigate you can pass the history object provided to route components to your actions and navigate with it there.
      - Routing data is already a prop of most of your components that care about it, whether it comes from the store or the router doesn’t change your component’s code.
- Async action
  - [redux-thunk](https://github.com/gaearon/redux-thunk) -> Saga?
- Selector pattern
  - [reselect](https://github.com/reactjs/reselect)
  - for performance optimization and functional reusability
- Promise action handling
  - [From] [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)
  - [To] [redux-pender](https://github.com/velopert/redux-pender)
    - Appending PENDING, SUCCESS, FAILURE to action type automatically.
    - pender reducer itself is useful for aboved status.
- SCSS -> [styled-component](https://www.styled-components.com/)
- Meta tag handling
  - [react-helmet](https://github.com/nfl/react-helmet)
- Node with express, fake NoSQL DB like data handling in controller.

## Planning
- immutable.js
- styled-component themes and helper functions.
- route base code splitting.
- From Thunk to redux-saga
- Testing practice with Jest, Enzyme
- Typescript or flow
- Storybook

## Run
add `NODE_PATH=src/` to `.env`
```
yarn install
yarn start-all
```
the both command will be applied to frontend and backend automatically.
