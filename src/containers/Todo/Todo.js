import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// APIs
import { clearTodoAPI } from 'store/api/todoAPI'
// Actions
import { clearTodo } from 'store/modules/Todo'
import { concurrentUser } from 'store/modules/User'
// Components
import {
  NavFilterBar,
  TodoTemplate,
} from 'components'
// Containers
import {
  TodoRender,
  TodoAddForm,
  TodoFooter } from 'containers'

const _clearCompleted = props => () => console.log('click!') ||  props.clearCompleted()

const Todo = props => {
  return (
    <TodoTemplate>
      {/* Todo Add Form */}
      <TodoAddForm />
      {/* filter bar */}
      <NavFilterBar />
      {/* Todos list */}
      <TodoRender reverse />
      {/* Footer */}
      <TodoFooter onClick={ _clearCompleted(props) } />
    </TodoTemplate>
  )
}

Todo.propTypes = {

  clearCompleted: PropTypes.func,
  updateConcurrentUser: PropTypes.func,
}

// Selector Pattern with reselect
// mapStateToProps are selectors that calculated when store is changed
// the problem is even the state is same, will be calculated again
// with reselect package, we can memoize selectors to enhance performance.
export default connect(
  (state, props) => ({

  }),
  (dispatch) => ({
    clearCompleted: bindActionCreators(clearTodo, dispatch),
    updateConcurrentUser: bindActionCreators(concurrentUser, dispatch),
  })
)(Todo)
