import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
// APIs
import {
  toggleTodoAPI,
  deleteTodoAPI,
} from 'store/api/todoAPI'
// Actions
import { updateTodo } from 'store/modules/Todo'
// Selectors
import { getFiltered, getIsFetching } from 'store/selectors'
// Components
import { TodoItem, Spinner, TodoList } from 'components'

// logic is splitted from component
const rendering = (props, list) => list.map((todo, i) =>
    (<TodoItem
        key={ todo.id }
        idx={ i }
        toggleFn={ () => toggleTodoAPI(todo.id) }
        deleteFn={ () => { props.updateTheTodo({ id: todo.id })
                           deleteTodoAPI(todo.id, 500) }
        }
        enterDelay={ 0 }
        willUnmount={ todo.willUnmount }
        {...todo}
    />)
  )


/*
 After splitted this component from Todo.js
 performance enhanced due to preventing unnecessary rerendering
 via store update. (230ms -> 130ms)
*/
const TodoRender = props => {
  const { todos, reverse, isFetching } = props
  const todosList = reverse ? todos.reverse() : todos
  return (
    <TodoList flex={ 10 }>
      {/*
        <Spinner fetching={ isFetching }/>
        { rendering(props, todosList) }

        Aboved prev version of code had double rendering() issue.
        after changed like bewlow, ms of app loading became a half (130ms -> 70ms).
      */}
      { isFetching
        ? (<Spinner />)
        : rendering(props, todosList)
      }
    </TodoList>
  )
}

TodoRender.propTypes = {
  todos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  reverse: PropTypes.bool,
  updateTheTodo: PropTypes.func,
}

// withRouter HOC is for accessing to parmas of the closest router.
// Selector Pattern with reselector
export default withRouter(connect(
  (state, props) => ({
    todos: getFiltered(state, props),
    isFetching: getIsFetching(state, props),
  }),
  (dispatch) => ({
    updateTheTodo: bindActionCreators(updateTodo, dispatch),
  })
)(TodoRender))
