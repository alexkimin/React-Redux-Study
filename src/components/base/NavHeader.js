import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { NavItem } from 'components'

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  display: inline-block;
`

const StyledLi = styled.li`
  display: inline-block;
  margin: 0 5px;
`

const Navheader = (props) => {
  return (
    <header>
      <StyledUl>
        <StyledLi><NavItem exact to="/">All</NavItem></StyledLi>
        <StyledLi><NavItem to="/filter/completed">Completed</NavItem></StyledLi>
        <StyledLi><NavItem to="/filter/actived">Actived</NavItem></StyledLi>
      </StyledUl>
    </header>
  )
}

export default Navheader
