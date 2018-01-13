import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Input,
  Button,
} from 'components'

const StyledForm = styled.form`
  width: 100%;
  display: flex;
`

const TodoAdd = props => {
  let inputValue // will hold input value - need to change this into redux
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

TodoAdd.propTypes = {
  
}

export default TodoAdd
