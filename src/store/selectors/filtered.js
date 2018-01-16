import { createSelector } from 'reselect'

/*
Reselect is a library for building memoized selectors.
We define selectors as the functions that retrieve
snippets of the Redux state for our React components.
Using memoization, we can prevent unnecessary rerenders and
recalculations of derived data which in turn will speed up our application.
*/
const selectTodos = (state, props) => state.Todo.get('todos')
const selectFilter = (state, props) => props.match.params.filter

const _filterType = type => filterKeyword => type === filterKeyword
const _typeChecker = _filterType('completed')
const getFiltered = (todos, filterKeyword) => {
  // console.log('reselect is not working', Math.random())
  return filterKeyword
  ? todos.filter(todo => {
    return _typeChecker(filterKeyword) === todo.isCompleted
  })
  : todos
}

export default createSelector(
  [selectTodos, selectFilter],
  getFiltered
)
