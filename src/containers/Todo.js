import React from 'react'
// import { Route } from 'react-router-dom'

import {
  TodoTemplate,
  TodoItem,
  TodoList,
} from 'components'

const fakeInfo = [{
  name: 'this is todo1',
},
{
  name: 'this is todo2',
},
]

const Todo = props => {
  const renderTodo = fakeInfo.map((eProps) => <TodoItem {...eProps} />)
  console.log(renderTodo)
  return (
    <TodoTemplate>
      <TodoList>
        { renderTodo }
      </TodoList>
    </TodoTemplate>
  )
}

export default Todo
