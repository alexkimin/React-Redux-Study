import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Input,
  Button,
} from 'components'

const StyledForm = styled.form`
  width: 100%;
  border: 1px solid orange;
  display: flex;
`

const TodoAdd = props => {
  let inputValue // will hold input value
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault()
        // dispatching inputValue here with todo format
      }}
    >
      <Input
        placeholder='text here...'
        name='addTodo'
        onChange={e => inputValue = e.target.value }/>
      <Button
        name="ADD"
        type='submit'
        />
    </StyledForm>
  )
}

export default TodoAdd
