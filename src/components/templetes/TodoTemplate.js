import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlexBox } from 'components'

const Wrapper = styled.div`
  border: 1px solid gray;
  padding: 20px;
`

const TodoTemplate = ({ children }) => {
  return (
    <Wrapper>
      <FlexBox column>
        { children }
      </FlexBox>
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
