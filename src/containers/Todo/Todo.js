import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// Actions
import {
  addTodo,
  clearTodo,
  inputTodo,
 } from 'store/modules/Todo'

// selectors
import {
  getIsFetching,
  getInputValue,
} from 'store/selectors'

// components
import {
  TitleHeader,
  TodoAddForm,
  NavFilterBar,
  TodoTemplate,
  TodoList,
  TodoFooter,
} from 'components'
import { TodoRender } from 'containers'


const Todo = ({
  isFetching,
  submitNewTodo,
  clearCompleted,
  inputValue,
  updateInputVal,
  ...rest
}) => {

  return (
    <TodoTemplate>
      {/* Header */}
      <TitleHeader />
      {/* Todo Add Form */}
      <TodoAddForm
        onSubmit={ e => {
          e.preventDefault()
          if (inputValue) {
            updateInputVal({ input: '' })
            submitNewTodo({ text: inputValue })
          }}
        }
        onChange={ e => updateInputVal({ input: e.target.value }) }
        value={ inputValue }
      />

      {/* filter bar */}
      <NavFilterBar col={ 1 }/>
      {/* Todos list */}
      <TodoList col={ 10 } fetching={ isFetching }>
        <TodoRender reverse/>
      </TodoList>
      {/* Footer */}
      <TodoFooter onClick={ () => clearCompleted() } />
    </TodoTemplate>
  )
}

Todo.propTypes = {
  isFetching: PropTypes.bool,
  clearCompleted: PropTypes.func,
}

// Selector Pattern with reselector
// mapStateToProps are selectors that calculated when store is changed
// the problem is even the state is same, will be calculated again
// with reselect package, we can memoize selectors to enhance performance.
export default connect(
  (state, props) => ({
    isFetching: getIsFetching(state, props),
    inputValue: getInputValue(state, props)
  }),
  (dispatch) => ({
    submitNewTodo: bindActionCreators(addTodo, dispatch),
    updateInputVal: bindActionCreators(inputTodo, dispatch),
    clearCompleted: bindActionCreators(clearTodo, dispatch),
  })
)(Todo)
