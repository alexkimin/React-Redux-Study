import { createSelector } from 'reselect'

const selectInputValue = (state, props) => state.Todo.input
const getInputValue= newTodo => newTodo

export default createSelector(
  [selectInputValue],
  getInputValue
)
