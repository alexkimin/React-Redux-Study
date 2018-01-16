import { createSelector } from 'reselect'

const selectInputValue = (state, props) => state.Todo.get('input')
const getInputValue= newTodo => newTodo

export default createSelector(
  [selectInputValue],
  getInputValue
)
