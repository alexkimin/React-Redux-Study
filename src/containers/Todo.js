import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// Actions
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  clearTodo,
 } from 'store/modules/Todo'
// selectors
import {
  getFilteredTodo,
  getFetchingStatus,
 } from 'libs'
// components
import {
  TitleHeader,
  TodoAddForm,
  NavFilterBar,
  TodoTemplate,
  TodoItem,
  TodoList,
  Spinner,
  TodoFooter,
} from 'components'


const Todo = ({
  todos,
  isFetching,
  submitNewTodo,
  deleteTheTodo,
  toggleTheTodo,
  clearCompleted,
}) => {
  // local scoped variables.
  let newTodoInputVal = ''
  let inputNode = null // will works as ref in class component.

  return (
    <TodoTemplate>
      {/* Header */}
      <TitleHeader />
      {/* Todo Add Form */}
      <TodoAddForm
        onSubmit={ e => {
          // below logic is for avoiding input rerendering to keep focus status.
            e.preventDefault()
            inputNode.value = ''
            return newTodoInputVal && submitNewTodo({ text: newTodoInputVal })
          }
        }
        onChange={ e => newTodoInputVal = e.target.value }
        getRef={ node => inputNode = node }
      />
      {/* filter bar */}
      <NavFilterBar />
      {/* Todos list */}
      <TodoList>
        <Spinner fetching={ isFetching }/>
        { todos.map(props =>
          (<TodoItem
            key={ props.id }
            toggleFn={ () => toggleTheTodo(props.id) }
            deleteFn={ () => deleteTheTodo(props.id) }
            {...props}
          />)) }
      </TodoList>
      {/* Footer */}
      <TodoFooter onClick={ () => clearCompleted() }/>
    </TodoTemplate>
  )
}

Todo.propTypes = {
  todos: PropTypes.array,
  isFetching: PropTypes.bool,
  deleteTheTodo: PropTypes.func,
  toggleTheTodo: PropTypes.func,
  clearCompleted: PropTypes.func,
}

// Selector Pattern with reselector
// mapStateToProps are selectors that calculated when store is changed
// the problem is even the state is same, will be calculated again
// with reselect package, we can memoize selectors to enhance performance.
export default connect(
  (state, props) => ({
      isFetching: getFetchingStatus(state, props),
      todos: getFilteredTodo(state, props),
  }),
  (dispatch) => ({
    submitNewTodo: todo => dispatch(addTodo(todo)),
    deleteTheTodo: id => dispatch(deleteTodo(id)),
    toggleTheTodo: id => dispatch(toggleTodo(id)),
    clearCompleted: () => dispatch(clearTodo()),
  })
)(Todo)

/*
You can get access to the history object’s properties and
the closest <Route>'s match via the withRouter
higher-order component. withRouter() will re-render
its component every time the route changes with the same props
as <Route> render props: { match, location, history }.
The component is connected to redux via connect()(Comp).
The component is not a “route component”, meaning it is not rendered like so:
<Route component={SomeConnectedThing}/>
*/
// import { withRouter } from 'react-router'
// export default withRouter(connect()(Todo))

/*
// This was previous version of form that has focus problem.
<TodoAddForm
  onSubmit={ e => {
    e.preventDefault()
    if (newTodoData.text) {
      // reset the input value to ''
      updateNewTodo({ text: '' }) // need to be in post action?
      submitNewTodo(newTodoData)
      // multiple action dispatch?
    }}
  }
  onChange={ e => updateNewTodo({ text: e.target.value }) }
  value={ newTodoData }
  getRef={ node => node && node.focus() }
/>
*/
