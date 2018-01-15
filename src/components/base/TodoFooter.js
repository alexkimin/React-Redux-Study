import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Footer, Button } from 'components'

import { utils } from 'styles'

const StyledDiv = styled.div`
  ${props => utils.flexBox(props)}
  border-top: 1px solid ${props => props.theme.color.border};
`

const TodoFooter = ({ onClick, theme }) => {
  return (
    <StyledDiv center row>
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
  theme: PropTypes.object,
}

export default TodoFooter
