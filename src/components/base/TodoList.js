import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
  boader: 1px solid green;
  padding: 5px;
  width: 100%;
  border: 1px solid red;
`

const TodoList = (props) => {
  return (
    <StyledDiv>{ props.children }</StyledDiv>
  )
}

export default TodoList
