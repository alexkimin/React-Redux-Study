import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlexBox } from 'components'

const Wrapper = styled.div`
 border: 1px solid blue;
`

const TodoLayout = (props) => {
  return (
    <Wrapper>
      <FlexBox column center>
        {props.children}
      </FlexBox>
    </Wrapper>
  )
}

export default TodoLayout
