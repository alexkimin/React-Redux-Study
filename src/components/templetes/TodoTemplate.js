import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlexBox } from 'components'

const Wrapper = styled.div`
  border: 1px solid gray;
  padding: 20px;
  display: flex;
  flex-direction: column;
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
