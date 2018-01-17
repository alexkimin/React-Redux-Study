import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledUl = styled.ul`
  list-style:none;
  flex:1;
  overflow: auto;
`
const TodoList = ({
  children,
  fetching,
   ...rest
 }) => {
   // New children will replace existing children.
   // key and ref from the original element will be preserved.
  return (
    <StyledUl padded center={ fetching } {...rest}>
      { React.Children.map(children, child =>
          React.cloneElement(child, { fetching })) }
    </StyledUl>
  )
}

TodoList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.any
  ]),
}

export default TodoList
