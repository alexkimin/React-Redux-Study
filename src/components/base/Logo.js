import React from 'react'
import styled from 'styled-components'

import logo from '../../static/images/logo.png'

const StyledDiv = styled.div`
  background-image: url("${ logo }");
  background-repeat: no-repeat;
  background-size: contain;
  width: 120px;
  height: 40px;
  display: inline-block;
`

const Logo = props => (<StyledDiv />)

export default Logo
