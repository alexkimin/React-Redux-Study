import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// APIs
import { clearTodoAPI } from 'store/api/todoAPI'
// Actions
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearTodo
} from 'store/modules/Todo'
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

const Todo = (props) => {

  // Socket.io eventListening
  // const socket = props.socket
  // socket.off()
  // socket.on('addTodo', todo => props.submitNewTodo({ todo }))
  // socket.on('toggleTodo', id => console.log('socket recieved') || props.toggleTheTodo(id))
  // socket.on('deleteTodo', id => props.deleteTheTodo(id))
  // socket.on('clearTodo', todos => props.clearCompleted({ todos }))
  // socket.on('conUser', num => props.updateConcurrentUser({ num }))

  return (
    <TodoTemplate>
      {/* Todo Add Form */}
      <TodoAddForm />
      {/* filter bar */}
      <NavFilterBar />
      {/* Todos list */}
      <TodoRender reverse />
      {/* Footer */}
      <TodoFooter onClick={ clearTodoAPI } />
    </TodoTemplate>
  )
}

Todo.propTypes = {
  submitNewTodo: PropTypes.func,
  deleteTheTodo: PropTypes.func,
  toggleTheTodo: PropTypes.func,
  clearCompleted: PropTypes.func,
  updateConcurrentUser: PropTypes.func,
}

// Selector Pattern with reselector
// mapStateToProps are selectors that calculated when store is changed
// the problem is even the state is same, will be calculated again
// with reselect package, we can memoize selectors to enhance performance.
export default connect(
  (state, props) => ({

  }),
  (dispatch) => ({
    submitNewTodo: bindActionCreators(addTodo, dispatch),
    toggleTheTodo: bindActionCreators(toggleTodo, dispatch),
    deleteTheTodo: bindActionCreators(deleteTodo, dispatch),
    clearCompleted: bindActionCreators(clearTodo, dispatch),
    updateConcurrentUser: bindActionCreators(concurrentUser, dispatch),
  })
)(Todo)
