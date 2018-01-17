import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// Actions
import { clearTodo } from 'store/modules/Todo'
// Components
import {
  TitleHeader,
  NavFilterBar,
  TodoTemplate,
  TodoFooter
} from 'components'
// Containers
import { TodoRender, TodoAddForm } from 'containers'

const Todo = (props) => {
  return (
    <TodoTemplate>
      {/* Header */}
      <TitleHeader />
      {/* Todo Add Form */}
      <TodoAddForm />
      {/* filter bar */}
      <NavFilterBar />
      {/* Todos list */}
      <TodoRender reverse />
      {/* Footer */}
      <TodoFooter onClick={ () => props.clearCompleted() } />
    </TodoTemplate>
  )
}

Todo.propTypes = {
  clearCompleted: PropTypes.func,
}

// Selector Pattern with reselector
// mapStateToProps are selectors that calculated when store is changed
// the problem is even the state is same, will be calculated again
// with reselect package, we can memoize selectors to enhance performance.
export default connect(
  (state, props) => ({

  }),
  (dispatch) => ({
    clearCompleted: bindActionCreators(clearTodo, dispatch),
  })
)(Todo)
