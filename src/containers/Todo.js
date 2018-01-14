import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// Actions
import {
  newTodo,
  addTodo,
  deleteTodo,
  toggleTodo,
 } from 'store/modules/Todo'

import {
  getFilteredTodo,
  getNewTodoData,
  getFetchingStatus,
 } from 'libs'

import {
  TitleHeader,
  TodoAddForm,
  NavFilterBar,
  TodoTemplate,
  TodoItem,
  TodoList,
  Spinner,
  Footer,
} from 'components'


const Todo = ({
  todos,
  isFetching,
  updateNewTodo,
  newTodoData,
  submitNewTodo,
  deleteTheTodo,
  toggleTheTodo,
}) => {
  return (
    <div>
      {/* Header */}
      <TitleHeader />
      {/* Todo Add Form */}
      <TodoAddForm
        onSubmit={(e) => {
          e.preventDefault()
          if (newTodoData.text) {
            // reset the input value to ''
            updateNewTodo({ text: '' }) // need to be in post action?
            submitNewTodo(newTodoData)
            // multiple action dispatch?
          }
        }}
        onChange={e => updateNewTodo({ text: e.target.value })}
        value={ newTodoData }
      />
      {/* filter bar */}
      <NavFilterBar />
      {/* Todos list */}
      <TodoTemplate>
        <TodoList>
          <Spinner fetching={ isFetching }/>
          { todos.map(props =>
            (<TodoItem
              key={ props.id }
              toggleFn={() => toggleTheTodo(props.id)}
              deleteFn={() => deleteTheTodo(props.id)}
              {...props}
            />)) }
        </TodoList>
      </TodoTemplate>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

Todo.propTypes = {
  todos: PropTypes.array,
  isFetching: PropTypes.bool,
  updateNewTodo: PropTypes.func,
  newTodoData: PropTypes.object,
  submitNewTodo: PropTypes.func,
  deleteTheTodo: PropTypes.func,
  toggleTheTodo: PropTypes.func,
}


// Selector Pattern with reselector
// mapStateToProps are selectors that calculated when store is changed
// the problem is even the state is same, will be calculated again
// with reselect package, we can memoize selectors to enhance performance.
export default connect(
  (state, props) => ({
      isFetching: getFetchingStatus(state, props),
      todos: getFilteredTodo(state, props),
      newTodoData: getNewTodoData(state, props),
  }),
  (dispatch) => ({
    updateNewTodo: text => dispatch(newTodo(text)),
    submitNewTodo: todo => dispatch(addTodo(todo)),
    deleteTheTodo: id => dispatch(deleteTodo(id)),
    toggleTheTodo: id => dispatch(toggleTodo(id)),
  })
)(Todo)

/*
You can get access to the history object’s properties and
the closest <Route>'s match via the withRouter
higher-order component. withRouter will re-render
its component every time the route changes with the same props
as <Route> render props: { match, location, history }.
The component is connected to redux via connect()(Comp).
The component is not a “route component”, meaning it is not rendered like so:
<Route component={SomeConnectedThing}/>
*/

// import { withRouter } from 'react-router'
// export default withRouter(connect(
//   (state, props) => ({
//   }),
//   (dispatch) => ({
//   })
// )(Todo))
