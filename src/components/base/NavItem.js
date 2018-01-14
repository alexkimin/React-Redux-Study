import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledDiv = styled.div`

`

const NavItem = ({
  to,
  children,
  ...rest
 }) => {
  return to ? (
    <StyledDiv>
      <NavLink
        to={ to }
        activeStyle={{ opacity: 1, fontWeight: '600'}}
        {...rest}
      >
        { children }
      </NavLink>
    </StyledDiv>
  ) : (
    <StyledDiv>
      { children }
    </StyledDiv>
  )
}

NavItem.defaultProps = {
  children: 'No NavName here',
}

NavItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
}

export default NavItem
