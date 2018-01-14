import { createSelector } from 'reselect'

const selectNewTodoText = (state, props) => state.Todo.newTodo
const getNewTodoText = newTodo => newTodo

export default createSelector(
  [selectNewTodoText],
  getNewTodoText
)
