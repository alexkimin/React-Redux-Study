import { createSelector } from 'reselect'

const selectTodos = (state, props) => state.Todo.get('todos')
const selectFilter = (state, props) => props.match.params.filter

const _filterType = type => filterKeyword => type === filterKeyword
const _typeChecker = _filterType('completed')
const getFiltered = (todos, filterKeyword) =>
  filterKeyword
  ? todos.filter(todo => _typeChecker(filterKeyword) === todo.isCompleted)
  : todos

export default createSelector(
  [selectTodos, selectFilter],
  getFiltered
)
