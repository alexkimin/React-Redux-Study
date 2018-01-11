import React from 'react'
import axios from 'axios'

import {
  TodoTemplate,
  TodoItem,
  TodoList,
  Spinner,
} from 'components'

import {
  pipe
} from 'libs'


const Todo = ({ match }) => {
  // purpose for playing with react-router params, isCompleted is Boolean.
  const filterType = match.params.filter === 'completed'
  const filterTodo = isfiltering => arr => isfiltering
    ? arr.filter(e => filterType === e.isCompleted)
    : [...arr]
  const curryFilterTodo = filterTodo(match.params.filter)
  const mapTodo = arr => arr.map(props =>
    (<TodoItem
      key={ props.id }
      checkFn={() => console.log('completed')}
      {...props}
    />))
  const rendering = pipe(
    curryFilterTodo,
    mapTodo
  )

  return (
    <TodoTemplate>
      <TodoList>
        <Spinner fetching={true}/>
        { rendering([{id:1, text:'hey', isCompleted:true }]) }
      </TodoList>
    </TodoTemplate>
  )
}

export default Todo
