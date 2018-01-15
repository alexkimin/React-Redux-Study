import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: white;
  flex: 1;
  box-shadow: ${props => props.theme.shadow};
`

const TodoTemplate = ({ children }) => {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
}

TodoTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
}

export default TodoTemplate
