import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavItem = ({
  to,
  children,
  ...rest
 }) => {
  return to ? (
    <NavLink
      to={ to }
      activeStyle={{ opacity: 1, fontWeight: '600'}}
      {...rest}
    >
      { children }
    </NavLink>
  ) : (
    <div>{ children }</div>
  )
}

export default NavItem
