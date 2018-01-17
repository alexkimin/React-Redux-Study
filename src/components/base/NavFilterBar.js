import React from 'react'
import styled from 'styled-components'

import { NavItem } from 'components'

const StyledUl = styled.ul`
  list-style: none;
  display: inline-block;
  border-bottom: 1px solid ${ props => props.theme.color.border };
  margin-top: 15px;
  margin-bottom: 10px;
`

const StyledLi = styled.li`
  display: inline-block;
`

const NavFilterBar = props => {
  return (
    <StyledUl>
      <StyledLi>
        <NavItem exact to="/">All</NavItem>
      </StyledLi>
      <StyledLi>
        <NavItem to="/filter/completed">Completed</NavItem>
      </StyledLi>
      <StyledLi>
        <NavItem to="/filter/actived">Actived</NavItem>
      </StyledLi>
    </StyledUl>
  )
}

export default NavFilterBar
