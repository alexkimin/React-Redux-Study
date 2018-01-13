import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlexBox } from 'components'

const Wrapper = styled.div`

`

const TodoLayout = ({ children }) => {
  return (
    <Wrapper>
      <FlexBox column center>
        { children }
      </FlexBox>
    </Wrapper>
  )
}

TodoLayout.propTypes = {
  children: PropTypes.element,
}

export default TodoLayout
