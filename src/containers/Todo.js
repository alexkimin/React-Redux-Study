import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// Actions
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  clearTodo,
  inputTodo,
  updateTodo,
 } from 'store/modules/Todo'

// selectors
import {
  getFiltered,
  getIsFetching,
  getInputValue,
} from 'store/selectors'

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
  inputValue,
  updateInputVal,
  updateTheTodo,
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
            // reset the input value to ''
            updateInputVal({ input: '' }) // need to be in post action?
            submitNewTodo({ text: inputValue })
            // multiple action dispatch?
          }}
        }
        onChange={ e => updateInputVal({ input: e.target.value }) }
        value={ inputValue }
      />

      {/* filter bar */}
      <NavFilterBar col={ 1 }/>
      {/* Todos list */}
      <TodoList col={ 10 } fetching={ isFetching }>
        <Spinner />
        { todos.reverse().map((props, i) =>
          (<TodoItem
              key={ props.id }
              idx={ i }
              toggleFn={ () => toggleTheTodo(props.id) }
              deleteFn={ () => { updateTheTodo({ id: props.id })
                                 deleteTheTodo(props.id, 500) }
              }
              enterDelay={ 0 }
              willUnmount={ props.willUnmount }
              {...props}
          />)) }
      </TodoList>
      {/* Footer */}
      <TodoFooter onClick={ () => clearCompleted() } />
    </TodoTemplate>
  )
}

Todo.propTypes = {
  todos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
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
    isFetching: getIsFetching(state, props),
    todos: getFiltered(state, props),
    inputValue: getInputValue(state, props)
  }),
  (dispatch) => ({
    submitNewTodo: bindActionCreators(addTodo, dispatch),
    deleteTheTodo: bindActionCreators(deleteTodo, dispatch),
    toggleTheTodo: bindActionCreators(toggleTodo, dispatch),
    clearCompleted: bindActionCreators(clearTodo, dispatch),
    updateInputVal: bindActionCreators(inputTodo, dispatch),
    updateTheTodo: bindActionCreators(updateTodo, dispatch),
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
// local scoped variables experiemnt
let newTodoInputVal = ''
let inputNode = null // will works as ref in class component.
<TodoAddForm
  onSubmit={ e => {
    // below logic is for avoiding input rerendering to keep focus status.
      e.preventDefault()
      resetValue(inputNode)
      return newTodoInputVal && submitNewTodo({ text: newTodoInputVal })
    }
  }
  onChange={ e => newTodoInputVal = e.target.value }
  getRef={ node => {
      inputNode = node
      // if rerendering happens, reset the value after getting the ref.
      return inputNode && resetValue(inputNode)
  }}
/>
(dispatch) => ({
  submitNewTodo: todo => dispatch(addTodo(todo)),
  deleteTheTodo: id => dispatch(deleteTodo(id)),
  toggleTheTodo: id => dispatch(toggleTodo(id)),
  clearCompleted: () => dispatch(clearTodo()),
  updateInputVal: (text) => dispatch(inputTodo(text)),
})



*/
