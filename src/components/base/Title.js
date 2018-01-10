import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
  font-size: 30px;
`
const Title = props => (<StyledDiv>{ props.children }</StyledDiv>)

export default Title
