import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import axios from 'axios'
import { pipe } from 'libs'
import { getTodo } from 'store/modules/Todo'
import {
  TodoTemplate,
  TodoItem,
  TodoList,
  Spinner,
} from 'components'


const Todo = props => {
  // purpose for playing with react-router params, isCompleted is Boolean.
  const filterType = props.match.params.filter === 'completed'
  const filterTodo = isfiltering => arr => isfiltering
    ? arr.filter(e => filterType === e.isCompleted)
    : [...arr]
  // curry the filter function for case of no filtering - it will skip .filter() iteration.
  const curryFilterTodo = filterTodo(props.match.params.filter)
  // return mapped array with jsx.
  const mapTodo = arr => arr.map(props =>
    (<TodoItem
      key={ props.id }
      checkFn={() => console.log('completed')}
      {...props}
    />))
  // compose
  // can do with function chaining.
  const rendering = pipe(
    curryFilterTodo,
    mapTodo
  )

  return (
    <TodoTemplate>
      <TodoList>
        <Spinner fetching={true}/>
        { rendering(props.getAllTodo()) }
      </TodoList>
    </TodoTemplate>
  )
}

// withRouter is for accessing router stuff in redux
export default withRouter(connect(
  (state, { match }) => {
    const filter = match.params
    return ({
      todos: (state) => console.log(state)
    })
  },
  (dispatch) => ({
    getAllTodo: () => dispatch(getTodo)
  })
)(Todo))
