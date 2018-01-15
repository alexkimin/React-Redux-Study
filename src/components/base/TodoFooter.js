import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Footer, Button } from 'components'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`

const TodoFooter = ({ onClick }) => {
  return (
    <StyledDiv>
      <Footer text='todo footer'/>
      <Button
        name='Clear'
        onClick={ onClick }
      />
    </StyledDiv>
  )
}

TodoFooter.defaultProps = {

}

TodoFooter.propTypes = {
  onClick: PropTypes.func,
}

export default TodoFooter
