import { createSelector } from 'reselect'
import { pipe } from 'libs'

const _filterType = type => filter => filter === type
const _typeChecker = _filterType('completed')

const filterTodo = (todos, isfiltering) => {
  console.log('todo filtering')
  return isfiltering
  ? todos.filter(e => _typeChecker('completed') === e.isCompleted)
  : todos
}

/*
Reselect is a library for building memoized selectors.
We define selectors as the functions that retrieve
snippets of the Redux state for our React components.
Using memoization, we can prevent unnecessary rerenders and
recalculations of derived data which in turn will speed up our application.
*/
const getTodos = (state, props) => {
  console.log('todo input selector')
  return state.Todo.todos
}

const getFilter = (state, props) => props.match.params.filter

export const getFilteredTodo = createSelector(
    [getTodos, getFilter],
    filterTodo
  )
