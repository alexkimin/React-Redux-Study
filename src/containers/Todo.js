import React from 'react'
// import { Route } from 'react-router-dom'

import {
  TodoTemplate,
  TodoItem,
  TodoList,
  Spinner,
} from 'components'

import {
  pipe
} from 'libs'

const fakeInfo = [{
  id: 1,
  text: 'this is todo1',
  status: 'actived',
},
{
  id: 2,
  text: 'this is todo2',
  status: 'completed',
},
]



const Todo = ({ match }) => {

  const filterTodo = arr => arr.filter(e =>
    match.params.filter ? e.status === match.params.filter : e)
  const mapTodo = arr => arr.map(props =>
    (<TodoItem
      key={ props.id }
      checkFn={() => console.log('completed')}
      {...props}
    />))

  const rendering = pipe(
    filterTodo,
    mapTodo
  )

  return (
    <TodoTemplate>
      <TodoList>
        { rendering(fakeInfo) }
        <Spinner />
      </TodoList>
    </TodoTemplate>
  )
}

export default Todo
