import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
// APIs
import {
  deleteTodoAPI,
} from 'store/api/todoAPI'
// Actions
import { updateTodo, toggleTodo, deleteTodo } from 'store/modules/Todo'
// Selectors
import { getFiltered, getIsFetching } from 'store/selectors'
// Components
import { TodoItem, Spinner, TodoList } from 'components'
// helpers
import { memo } from 'libs'

// Momoize event handlers
let memoizeRender = new Map()
const memoizer = memo(memoizeRender)

// logic is splitted from component
const rendering = (props, list) => {
  // const deleteTodoAnimation = memoizer('delete', props.updateTheTodo)
  return list.map((todo, i) =>
    (<TodoItem
        key={ todo.id }
        idx={ i }
        toggleFn={ () => {
            const thetodo = {...todo}
            thetodo.isCompleted = !thetodo.isCompleted
            props.toggleTheTodo(thetodo)
          }
        }
        deleteFn={ () => {
          // deleteTodoAnimation({ id: todo.id })
                           props.deleteTheTodo(todo.id)
             }
        }
        enterDelay={ 0 }
        {...todo}
    />)
  )
}


/*
 After splitted this component from Todo.js
 performance enhanced due to preventing unnecessary rerendering
 via store update. (230ms -> 130ms)
*/
const TodoRender = props => {
  const { todos, reverse, isFetching } = props
  const todosList = reverse ? todos.reverse() : todos
  console.log('todo render')
  return (
    <TodoList flex={ 10 }>
      {/* 130ms -> 70ms */}
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
    toggleTheTodo: bindActionCreators(toggleTodo, dispatch),
    deleteTheTodo: bindActionCreators(deleteTodo, dispatch),
  })
)(TodoRender))
