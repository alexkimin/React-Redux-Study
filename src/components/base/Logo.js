import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from '../../static/images/logo.png'

const StyledDiv = styled.div`
  background-image: url("${ logo }");
  background-repeat: no-repeat;
  background-size: contain;
  width: 120px;
  height: 40px;
  display: inline-block;
`

const Logo = props => (
  <NavLink to="/">
    <StyledDiv />
  </NavLink>
)

export default Logo
