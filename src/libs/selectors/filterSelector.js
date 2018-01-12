import { createSelector } from 'reselect'
import { pipe } from 'libs'

const _filterType = type => filter => filter === type
const _typeChecker = _filterType('completed')

const filterTodo = isfiltering => arr => isfiltering
  ? arr.filter(e => _typeChecker('completed') === e.isCompleted)
  : arr

/*
Reselect is a library for building memoized selectors.
We define selectors as the functions that retrieve
snippets of the Redux state for our React components.
Using memoization, we can prevent unnecessary rerenders and
recalculations of derived data which in turn will speed up our application.
*/
const getTodos = (state, filter) => state.todos

export const getFilteredTodo = (state, filter) => {
  return createSelector(
    getTodos,
    filterTodo(filter)
  )(todos)
}
