import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

// Actions
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
 } from 'store/modules/Todo'

// selectors
import { getFiltered } from 'store/selectors'
// components
import { TodoItem, Spinner } from 'components'

const TodoRender = ({
  todos,
  reverse,
  deleteTheTodo,
  toggleTheTodo,
  updateTheTodo,
}) => {
  const todosList = reverse ? todos.reverse() : todos
  return (
    <div>
      <Spinner />
      { todosList.map((props, i) =>
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
    </div>
  )
}

TodoRender.defaultProps = {

}

TodoRender.propTypes = {
  todos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  reverse: PropTypes.bool,
  deleteTheTodo: PropTypes.func,
  toggleTheTodo: PropTypes.func,
  updateTheTodo: PropTypes.func,
}

export default withRouter(connect(
  (state, props) => ({
    todos: getFiltered(state, props),
  }),
  (dispatch) => ({
    deleteTheTodo: bindActionCreators(deleteTodo, dispatch),
    toggleTheTodo: bindActionCreators(toggleTodo, dispatch),
    updateTheTodo: bindActionCreators(updateTodo, dispatch),
  })
)(TodoRender))
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
