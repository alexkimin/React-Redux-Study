import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import axios from 'axios'
import {
  pipe,
  getFilteredTodo,
 } from 'libs'
import {
  TodoTemplate,
  TodoItem,
  TodoList,
  Spinner,
} from 'components'

const renderTodo = (arr) => arr.map(props =>
  (<TodoItem
    key={ props.id }
    checkFn={() => console.log('completed')}
    {...props}
  />))

const Todo = props => {
  return (
    <TodoTemplate>
      <TodoList>
        <Spinner fetching={props.isFetching}/>
        { renderTodo(props.todos) }
      </TodoList>
    </TodoTemplate>
  )
}

// mapStateToProps = (state, props)
// withRouter is for accessing router stuff in redux
// selector pattern with reselector
// mapStateToProps are selectors that calculated when store is changed
// the problem is even the state is same, will be calculated again
// with reselect package, we can memoize selectors to enhance performance.
export default withRouter(connect(
  (state, props) => ({
      isFetching: state.Todo.isFetching,
      todos: getFilteredTodo(state, props)
  }),
  (dispatch) => ({

  })
)(Todo))
