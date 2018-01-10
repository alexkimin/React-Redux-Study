import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
  padding: 5px;
  width: 100%;
  height: 30px;
  border: 1px solid gray;
`

const TodoItem = props => {
  return (
    <StyledDiv>
      <span>X</span>
      <span>{ props.name }</span>
      <span>V</span>
    </StyledDiv>
  )
}

export default TodoItem
