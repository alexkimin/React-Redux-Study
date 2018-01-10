import React from 'react'
// import { Route } from 'react-router-dom'

import {
  TodoTemplate,
  TodoItem,
  TodoList,
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
  const filter = match.params.filter
  const filterTodo = arr =>
    arr.filter(e => filter ? e.status === filter : e)
  const mapTodo = arr =>
    arr.map((props) => <TodoItem
                          key={ props.id }
                          checkFn={() => console.log('completed')}
                          {...props}
                        />)

  const rendering = pipe(
    filterTodo,
    mapTodo,
  )

  return (
    <TodoTemplate>
      <TodoList>
        { rendering(fakeInfo) }
      </TodoList>
    </TodoTemplate>
  )
}

export default Todo
