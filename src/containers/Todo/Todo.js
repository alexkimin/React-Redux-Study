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
import { NavFilterBar, TodoTemplate } from 'components'
// Containers
import { TodoRender, TodoAddForm, TodoFooter } from 'containers'

const _clearCompleted = props => () => props.clearCompleted()

const Todo = props => {
  return (
    <TodoTemplate>
      {/* Todo Add Form */}
      <TodoAddForm />
      {/* filter bar */}
      <NavFilterBar />
      {/* Todos list */}
      <TodoRender reverse />
      {/* 
        inner route example
        <Route exact path={`${props.match.url}`} render={() => <TotalList />} />
        <Route exact path={`${props.match.url}/:todoID`} render={() => <OneTodo />} />
      */}
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
const s = (state, props) => ({
  // spilt into child container
})

const d = dispatch => ({
  clearCompleted: bindActionCreators(clearTodo, dispatch),
  updateConcurrentUser: bindActionCreators(concurrentUser, dispatch),
})

export default connect(s, d)(Todo)
