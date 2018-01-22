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
// import { memo } from 'libs'
// Momoize event handlers
// let memoizeRender = new Map()
// const memoizer = memo(memoizeRender)

const _toggleTheTodo = props => todo => () => {
    const thetodo = {...todo}
    thetodo.isCompleted = !thetodo.isCompleted
    props.toggleTheTodo(thetodo)
  }

const _deleteTheTodo = props => todo => () =>
  props.deleteTheTodo(todo.id)

const _rendering = (props, list) => {
  return list.map((todo, i) =>
    (<TodoItem
        key={ todo.id }
        idx={ i }
        toggleFn={ _toggleTheTodo(props)(todo) }
        deleteFn={ _deleteTheTodo(props)(todo) }
        enterDelay={ 0 }
        {...todo}
    />)
  )
}

const _scrollTo = node => node && node.scrollIntoView()
const FakeNode = fn => (<div key='fake' ref={ fn } />)

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
      {/* 130ms -> 70ms */}
      { isFetching
        ? (<Spinner />)
        : reverse
          ? _rendering(props, todosList)
          : [..._rendering(props, todosList), FakeNode(_scrollTo)]
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
