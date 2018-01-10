import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

import { FlexBox } from 'components'

const Contents = styled.div`
  flex: 10;
  margin-top: 100px;
  border: 1px solid red;
`

const FlexSpace = styled.div`
  flex: 1;
`

const AppLayout = (props) => {
  return (
    <FlexBox>
      <FlexBox col={1} />
      <Contents>
        <div>Today's Todo List</div>
        <div>Add todo input section</div>
        <ul>
          <li><Link to="/">All</Link></li>
          <li><Link to="/filter/completed">Completed</Link></li>
          <li><Link to="/filter/actived">Actived</Link></li>
        </ul>
        { props.children }
      </Contents>
      <FlexBox col={1} />
    </FlexBox>
  )
}

export default AppLayout
